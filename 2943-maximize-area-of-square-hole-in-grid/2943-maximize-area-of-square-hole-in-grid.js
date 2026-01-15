/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function (n, m, hBars, vBars) {

    const maxGap = (arr) => {
        arr.sort((a, b) => a - b);

        let max = 1;
        let count = 1;

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1] + 1) {
                count++;
                max = Math.max(max, count);
            } else {
                count = 1;
            }
        }

        return max + 1; // bars removed + 1 gap
    };

    let maxH = maxGap(hBars);
    let maxV = maxGap(vBars);

    let side = Math.min(maxH, maxV);

    return side * side;
};
