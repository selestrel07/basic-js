/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disksNumber number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const moveCount = 2 ** disksNumber - 1;
  const time = Math.floor(moveCount * 60 * 60 / turnsSpeed);
  return {
    turns: moveCount,
    seconds: time
  }
}

module.exports = {
  calculateHanoi
};
