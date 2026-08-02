import { CONTACT_EMAIL, SERVICES } from './content';

/**
 * Builds a mailto: link whose subject and body are already written for the
 * visitor, based on the service they picked. There is no backend — the draft
 * opens in their own mail client and they send it themselves.
 */
export default function mailtoFor(serviceId, { brand, email, volume, note } = {}) {
  const service = SERVICES.find((s) => s.id === serviceId) ?? SERVICES[0];

  const lines = [service.lead, ''];
  if (brand) lines.push(`Brand: ${brand}`);
  if (email) lines.push(`Reply to: ${email}`);
  if (volume) lines.push(`Pieces this season: ${volume}`);
  if (note) lines.push('', note);

  const subject = brand ? `${service.label} — ${brand}` : service.label;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join('\n'))}`;
}
