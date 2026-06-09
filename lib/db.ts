import mongoose from 'mongoose';

const MONGODB_HOST = process.env.MONGODB_HOST;
const MONGODB_PORT = process.env.MONGODB_PORT || '27017';
const MONGODB_USER = process.env.MONGODB_USER || 'admin';
const MONGODB_PASS = process.env.MONGODB_PASS;
const MONGODB_NAME = process.env.MONGODB_NAME;
const MONGODB_AUTH_SOURCE = process.env.MONGODB_AUTH_SOURCE || 'admin';

function getMongoUri() {
  if (!MONGODB_HOST) {
    throw new Error('Please define the MONGODB_HOST environment variable.');
  }

  if (!MONGODB_NAME) {
    throw new Error('Please define the MONGODB_NAME environment variable.');
  }

  if (MONGODB_HOST === 'localhost' || MONGODB_HOST === '127.0.0.1') {
    return `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}`;
  }

  if (!MONGODB_PASS) {
    throw new Error('Please define the MONGODB_PASS environment variable for remote MongoDB.');
  }

  const user = encodeURIComponent(MONGODB_USER);
  const pass = encodeURIComponent(MONGODB_PASS);

  return `mongodb://${user}:${pass}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_NAME}?authSource=${MONGODB_AUTH_SOURCE}`;
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

if (!global.mongoose) {
  global.mongoose = { conn: null, promise: null };
}

const cached: MongooseCache = global.mongoose;

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(getMongoUri(), opts).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default dbConnect;
