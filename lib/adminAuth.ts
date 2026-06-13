export const ADMIN_COOKIE_NAME = 'admin_token';

export type AdminTokenPayload = {
  adminId: string;
  email: string;
  role: 'admin';
};

const encoder = new TextEncoder();

function getAuthSecret() {
  return process.env.NEXTAUTH_SECRET || 'change-this-admin-secret';
}

function bytesToBase64Url(bytes: Uint8Array) {
  let binary = '';

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function base64UrlToBytes(value: string) {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=');
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);

  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }

  return bytes;
}

function base64UrlEncode(value: string) {
  return bytesToBase64Url(encoder.encode(value));
}

function base64UrlDecode(value: string) {
  return new TextDecoder().decode(base64UrlToBytes(value));
}

async function getSigningKey() {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(getAuthSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify']
  );
}

async function signValue(value: string) {
  const key = await getSigningKey();
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(value));

  return bytesToBase64Url(new Uint8Array(signature));
}

export async function createAdminToken(payload: AdminTokenPayload) {
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signature = await signValue(encodedPayload);

  return `${encodedPayload}.${signature}`;
}

export async function verifyAdminToken(token?: string | null) {
  if (!token) {
    return null;
  }

  const [encodedPayload, signature] = token.split('.');

  if (!encodedPayload || !signature) {
    return null;
  }

  const expectedSignature = await signValue(encodedPayload);

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    const payload = JSON.parse(base64UrlDecode(encodedPayload)) as AdminTokenPayload;

    if (payload.role !== 'admin') {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}
