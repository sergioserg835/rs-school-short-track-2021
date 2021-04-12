/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const positiveArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) positiveArr.push(arr[i]);
  }

  positiveArr.sort((a, b) => a - b);

  let order = -1;
  const outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      outputArr.push(arr[i]);
    } else {
      order++;
      outputArr.push(positiveArr[order]);
    }
  }
  return outputArr;
}

module.exports = sortByHeight;
