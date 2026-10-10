/**
 * Convert an arbitrary string into a URL-safe slug.
 *
 * - Strips diacritics (é -> e)
 * - Lowercases
 * - Replaces runs of non-alphanumeric characters with a single separator
 * - Trims leading/trailing separators
 *
 * @param {string} input
 * @param {{ separator?: string }} [options]
 * @returns {string}
 */
export function slugify(input, { separator = '-' } = {}) {
  if (typeof input !== 'string') {
    throw new TypeError(`slugify expected a string, got ${typeof input}`);
  }

  return input
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, separator)
    .replace(new RegExp(`^${escape(separator)}+|${escape(separator)}+$`, 'g'), '');
}

function escape(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
