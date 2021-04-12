/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domArr = [];
  const domArrReverse = [];
  let str = '';
  for (let i = 0; i < domains.length; i++) {
    domArrReverse[i] = domains[i].split('.').reverse();
    str = domArrReverse[i].join('.');
    domArrReverse[i] = str;
    domArr[i] = domains[i];
  }
  str = domains[0].substr(domains[0].lastIndexOf('.'));
  domArr.unshift(str);
  domArrReverse.unshift(str);
  const outputObject = {};
  let counter = 0;
  let name = '';
  for (let i = 0; i < domArr.length; i++) {
    for (let j = 0; j < domains.length; j++) {
      if (domains[j].indexOf(domArr[i]) !== -1) {
        counter++;
      }
    }
    if (domArrReverse[i].substr(0, 1) !== '.') {
      name = `.${domArrReverse[i]}`;
    } else {
      name = domArrReverse[i];
    }
    outputObject[name] = counter;
    counter = 0;
  }
  return outputObject;
}

module.exports = getDNSStats;
