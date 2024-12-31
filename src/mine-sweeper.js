/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((row, i) => row.map((el, j) => {
    const getMatrixElement = (rowNum, colNum) => {
      return rowNum > -1 && rowNum < matrix.length && colNum > -1 && colNum < row.length ? matrix[rowNum][colNum] : 0;
    }
    return getMatrixElement(i - 1, j - 1) + getMatrixElement(i - 1, j)
      + getMatrixElement(i - 1, j + 1) + getMatrixElement(i, j - 1) + getMatrixElement(i, j + 1)
      + getMatrixElement(i + 1, j - 1) + getMatrixElement(i + 1, j)
      + getMatrixElement(i + 1, j + 1);
  }))
}

module.exports = {
  minesweeper
};
