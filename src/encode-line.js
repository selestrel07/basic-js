/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length < 2) return str;
  return str.match(/([a-zA-Z])\1*/g)
    .map(letter => letter.length > 1 ? `${letter.length}${letter[0]}` : letter)
    .join('');
}

module.exports = {
  encodeLine
};
