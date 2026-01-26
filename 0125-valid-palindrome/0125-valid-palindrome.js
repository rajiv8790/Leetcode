/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.toLowerCase();
    let filteredString = ''

    for (let i = 0; i < s.length; i++) {
        if (/[a-z0-9]/.test(s[i])) {
            filteredString += s[i]
        }
    }

    let rev = filteredString.split('').reverse().join('')

    return filteredString === rev
};