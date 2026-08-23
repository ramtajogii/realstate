// Sales WhatsApp number, shared by every "WhatsApp Us" button on the site.
export const WHATSAPP_NUMBER = '916389088088'

/**
 * Deep link that opens WhatsApp with the enquiry line already typed, so the
 * sales team can see which project the message is about.
 *
 * Pass the project name exactly as it is shown on the page, e.g.
 * whatsappEnquiryUrl('DALAN AVENUE MICRO SOCIETY').
 */
export function whatsappEnquiryUrl(projectName: string) {
  const text = `I would like to enquire about - ${projectName}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
