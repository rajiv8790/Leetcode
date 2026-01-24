/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {

    nums.sort((a, b) => a - b);

    let result = 0;
    let n = nums.length;

    for (let i = 0; i < n / 2; i++) {
        result = Math.max(result, nums[i] + nums[n - 1 - i]);
    }

    return result;
};