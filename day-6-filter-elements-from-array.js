/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const len = arr.length;
    const result = new Array(len);
    let count = 0;

    for (let i = 0; i < len; i++) {
        const val = arr[i];
        if (fn(val, i)) {
            result[count++] = val;
        }
    }

    result.length = count;
    return result;
};
