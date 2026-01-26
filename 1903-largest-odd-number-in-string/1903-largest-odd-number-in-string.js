/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    num = num.split('')
    let newArr = '';
    let n = num.length;
    for (let i = n - 1; i >= 0; i--) {

        if (!(num[i] % 2 === 0 && newArr.length === 0)) {
            newArr = num[i] + newArr;
        }

    }

    return newArr
};