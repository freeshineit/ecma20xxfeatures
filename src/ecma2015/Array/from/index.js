import 'core-js/fn/array/from';
import 'core-js/fn/set';

let from = Array.from(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]
console.log(from)
Promise.resolve(32).then(x => console.log(x))
