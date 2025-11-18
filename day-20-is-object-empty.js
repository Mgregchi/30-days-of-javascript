/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj)) return obj.length === 0;

  // If it's an object: detect first key (O(1) expected)
  for (let _ in obj) return false;
  return true;
};
