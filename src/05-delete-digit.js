/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const variantArr = [];
  const str = `${n}`;
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      variantArr[i] = str.substr(1);
    } else if (i === str.length - 1) {
      variantArr[i] = str.substr(0, i);
    } else {
      variantArr[i] = str.substr(0, i);
      variantArr[i] += str.substr(i + 1, 1);
    }
  }

  let max = variantArr[0];
  for (let i = 0; i < variantArr.length; i++) {
    if (variantArr[i] > max) max = variantArr[i];
  }
  return Number(max);
}
module.exports = deleteDigit;
