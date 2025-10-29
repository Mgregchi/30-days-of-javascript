/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const n = arr.length;
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = fn(arr[i], i);
    }
    return result;
};