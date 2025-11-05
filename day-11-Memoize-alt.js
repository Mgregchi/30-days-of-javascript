/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();
  let callCount = 0;

  const memoized = (...args) => {
    const key = args.join(",");
    if (cache.has(key)) return cache.get(key);

    const result = fn(...args);
    cache.set(key, result);
    callCount++;
    return result;
  };

  memoized.getCallCount = () => callCount;
  return memoized;
}

// --- Helper functions ---
const sum = (a, b) => a + b;

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

// --- Main Execution ---
/**
 * @param {string} fnName
 * @param {string[]} actions
 * @param {Array[]} values
 * @return {Array}
 */
function run(fnName, actions, values) {
  let fn;
  if (fnName === "sum") fn = sum;
  else if (fnName === "factorial") fn = factorial;
  else if (fnName === "fib") fn = fib;

  const memoizedFn = memoize(fn);
  const output = [];

  for (let i = 0; i < actions.length; i++) {
    const action = actions[i];
    const val = values[i];
    if (action === "call") {
      output.push(memoizedFn(...val));
    } else if (action === "getCallCount") {
      output.push(memoizedFn.getCallCount());
    }
  }

  return output;
}
