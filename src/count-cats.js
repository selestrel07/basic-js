/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix
    .map(cats => cats.reduce((acc, curr) => acc += (curr === '^^' ? 1: 0), 0))
    .reduce((acc, curr) => acc + curr, 0);
}

module.exports = {
  countCats
};
