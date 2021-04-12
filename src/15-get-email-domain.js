/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let position = 0;
  while (position !== -1) {
    const newPosition = email.indexOf('@', position);
    if (newPosition === -1) break;
    position = newPosition + 1;
  }
  const result = email.substr(position);
  return result;
}

module.exports = getEmailDomain;
