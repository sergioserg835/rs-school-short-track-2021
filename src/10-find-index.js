/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let finish = array.length - 1;
  let pos = -1;
  let found = false;
  let middle;
  while (found === false && start <= finish) {
    middle = Math.floor((start + finish) / 2);
    if (array[middle] === value) {
      found = true;
      pos = middle;
    } else if (array[middle] > value) {
      finish = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return pos;
}

module.exports = findIndex;
