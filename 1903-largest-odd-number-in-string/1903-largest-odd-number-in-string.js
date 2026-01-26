/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let result = "";
    let foundOdd = false;

    for (let i = num.length - 1; i >= 0; i--) {
        if (!foundOdd && ((num[i] - '0') % 2 === 1)) {
            foundOdd = true;
        }

        if (foundOdd) {
            result = num[i] + result;
        }
    }

    return result;
};