'use strict';

require('core-js/fn/array/from');

require('core-js/fn/set');

var from = Array.from(new Set([1, 2, 3, 2, 1])); // => [1, 2, 3]
console.log(from);
