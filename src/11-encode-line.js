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
  let outputStr = '';
  let counter = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      if (counter === 1) {
        outputStr += str[i - 1];
      } else {
        outputStr += counter + str[i - 1];
      }
      counter = 1;
      if (i === str.length - 1) {
        outputStr += str[i];
      }
    } else {
      counter++;
      if (i === str.length - 1) {
        outputStr += counter + str[i];
      }
    }
  }
  return outputStr;
}
module.exports = encodeLine;
