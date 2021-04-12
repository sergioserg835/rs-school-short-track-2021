/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const items = n.split('-');
  const check = true;

  if (items.length !== 6) return false;
  for (let i = 0; i < items.length; i++) {
    if (items[i].length > 2) {
      return false;
    }
    const res = /^(([a-f]\d)|(\d[a-f])|(\d\d)|([a-f]+))$/gi.test(items[i]);
    if (res === false) {
      return false;
    }
  }
  return check;
}

module.exports = isMAC48Address;
