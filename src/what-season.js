/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined || arguments.length === 0) return 'Unable to determine the time of year!';
  if (!(Object.prototype.toString.call(date) === "[object Date]" ))
    throw new Error('Invalid date!');
  try {
    date.toDateString();
  } catch (e) {
    throw new Error('Invalid date!');
  }
  switch (date.getMonth()) {
    case 11:
    case 0:
    case 1:
      return 'winter';
    case 2:
    case 3:
    case 4:
      return 'spring';
    case 5:
    case 6:
    case 7:
      return 'summer';
    default:
      return 'autumn';
  }
}

module.exports = {
  getSeason
};
