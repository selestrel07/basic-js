/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const first = [...s1].sort();
  const second = [...s2].sort();
  let index1 = 0;
  let index2 = 0;
  const result = [];
  while (index1 < first.length || index2 < second.length) {
    if (first[index1] === second[index2]) {
      result.push(first[index1]);
      index1++;
      index2++;
    } else if (first[index1] < second[index2]) {
      index1++;
    } else {
      index2++;
    }
  }
  return result.length;
}

module.exports = {
  getCommonCharacterCount
};
