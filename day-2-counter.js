// You can achieve this by using a closure — the inner function needs to “remember”
// the variable n from its outer scope and update it each time it’s called.

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounterVerbose = function (n) {
  let count;
  return function () {
    if (count == n || count == null) {
      count = n + 1;
      return n;
    } else {
      let prev = count;
      count++;
      return prev;
    }
  };
};

var createCounterMinimal = function (n) {
  let count = n;
  return function () {
    return count++;
  };
};

var createCounter = function (n) {
  // let count = n;
  return function () {
    return n++;
  };
};

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

const counter = createCounter(10);
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12
