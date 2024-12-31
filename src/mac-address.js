/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {String} n
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const regex = /[0-9|A-F]{2}/;
  const arr = n.split('-');
  return arr.filter((x) => x.match(regex)).length === 6;
}
module.exports = {
  isMAC48Address
};
