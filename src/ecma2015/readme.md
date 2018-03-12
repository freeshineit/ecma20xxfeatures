## ES6 (ECMA2015)

### Assignment Destructuring (分配解构)

<!-- ```js
    let 

``` -->

### Spread Operator and Rest Parameters (扩展操作和其余的参数)

```js
    let arr = [1, 2, ...[3, 4, 5], 6, 7]
```

### Arrow Functions (箭头函数)

```js
    [1, 2].map(x =>  x * 2);
```

### Template Literals (模版字符串)

```js
    let shine = 'shine';

    let b = `my name is ${shine}`;
    console.log(b)
```

### Object Literals (对象字面量)

```js
    let a = 'a';
    let b = 'b';
    let foo = 'foo';

    let obj_es6 = {  //  es6
        a,
        b,
        foo
    }

    var obj_es5 = { // es5
        a: a,
        b: b,
        foo: foo
    }
```

### Classes (类)

```js
class foo {}
```

### Let and Const

### Symbols (一种新的原始数据类型Symbol, 表示独一无二的值)

```js
var symbol = Symbol()
```

### Iterators (Iterator 遍历器)

```js
    for (let el of document.querySelectorAll('a')) {
        // el
    }
```

### for..of

### Generators (Generator 函数是 ES6 提供的一种异步编程解决方案)

```js
    function* helloWorld () {
        yield 'hello';
        yield 'world';
        yield '!';
        return 'ending';
    }

    let hello = helloWorld()

    helloo.next(); // {value: "hello", done: false}
    helloo.next(); // {value: "world", done: false}
    helloo.next(); // {value: "!", done: false}
    helloo.next(); // {value: "ending", done: true}
    helloo.next(); // {value: "undefined", done: true}

```

### Promises

```js
let promise = new Promise( (resolve, reject) => {
    if (true) {
        resolve('😄')
    } else {
        reject(error)
    }
})

Promise.resolve('😂').then((value) => {
  // success
  console.log('Promise', value)
}, (error) => {
  // failure
  console.log('Promise', error)
})

promise.then((value) => {
  // success
  console.log('then', value)
}, (error) => {
  // failure
  console.log('then', error)
});
```

### Maps

```js

let map = new Map()

map.set('a', 'a');
map.set('b', 'b');
map.set('c', 'c');
map.set('d', 'd');

console.log(map) // {"a" => "a", "b" => "b", "c" => "c", "d" => "d"}
console.log(map.get('a'))

for (let [key, value] of map) {
    console.log(`${key} => ${value}`) 
}

console.log(...map.keys()) // a b c d
console.log(...map.values()) // a b c d
console.log(...map.entries()) // ["a", "a"],["b", "b"],["c", "c"],["d", "d"]
console.log(...map) // ["a", "a"],["b", "b"],["c", "c"],["d", "d"]
// Map api
// set(key, value)
// get(key)
// has(key)
// delete(key)
// clear(key)

```

### WeakMaps (和 Map相似，但不完全相同)

WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性。因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名。二是无法清空，即不支持clear方法。因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。

[ECMAScript 6 入门 阮一峰](http://es6.ruanyifeng.com/#docs/set-map)

### Sets

```js
let set = new Set();

    set.add('a');
    set.add('b');
    console.log(set)   // Set(2) {"a", "b"} 

    // Set api
    // set.add()
    // set.has()
    // set.delete()
    // set.clear()
    // set.size

    // set.keys()
    // set.values()
    // set.entries()
    // set.forEach()
```

### WeakSets

```js
    let weakSet = new WeakSet();
    weakSet.add('add');

    // WeakSet api
    // weakSet.add()
    // weakSet.delete()
    // weakSet.has()
```

### Proxies (代理)

```js
let proxy = new proxy(target, handler);
```

```js
var handler = {
  get: function(target, name) {
    if (name === 'prototype') {
      return Object.prototype;
    }
    return 'Hello, ' + name;
  },

  apply: function(target, thisBinding, args) {
    return args[0];
  },

  construct: function(target, args) {
    return {value: args[1]};
  }
};

var fproxy = new Proxy(function(x, y) {
  return x + y;
}, handler);

fproxy(1, 2) // 1
new fproxy(1, 2) // {value: 2}
fproxy.prototype === Object.prototype // true
fproxy.foo === "Hello, foo" // true

```
[ECMAScript 6 入门 阮一峰](http://es6.ruanyifeng.com/#docs/proxy)

### Reflection (反射)

[ECMAScript 6 入门 阮一峰](http://es6.ruanyifeng.com/#docs/reflect)

### Number

Number在ES6之前就已经存在了，ES6对其进行了扩展。

```js
0b111110111 === 503 // true //二进制
0o767 === 503 // true // 八进制
```

+   `Number.isNaN`: `Number.isNaN()`用来检查一个值是否为`NaN`。

+   `Number.isFinite`: `Number.isFinite` 用来检查一个数值是否为有限值。

+   `Number.parseInt`:` Number.parseInt()` 转化为整数。

+   `Number.parseFloat`: `Number.parseFloat()` 转化为浮点数。

+   `Number.isInteger`: `Number.isInteger()` 检查输入是否是一个整数。

+   `Number.EPSILON`: 有助于计算两个数字之间微不足道的差异。

+   `Number.MAX_SAFE_INTEGER`: 可以安全且精确地用JavaScript表示的最大整数。

+   `Number.MIN_SAFE_INTEGER`: 可以安全且精确地用JavaScript表示的最小整数。

+   `Number.isSafeInteger`: 检查整数是否在这些边界内，能够安全准确地表示。


### Math

Math在ES6之前就已经存在了，ES6对其进行了扩展。

+   `Math.sign` – sign function of a number

+   `Math.trunc`– integer part of a number

+   `Math.cbrt` – cubic root of value, or ∛‾value

+   `Math.expm1` – e to the value minus 1, or evalue - 1

+   `Math.log1p` – natural logarithm of value + 1, or ln(value + 1)

+   `Math.log10` – base 10 logarithm of value, or log10(value)

+   `Math.log2` – base 2 logarithm of value, or log2(value)

+   `Math.sinh` – hyperbolic sine of a number

+   `Math.cosh` – hyperbolic cosine of a number

+   `Math.tanh` – hyperbolic tangent of a number

+   `Math.asinh` – hyperbolic arc-sine of a number

+   `Math.acosh` – hyperbolic arc-cosine of a number

+   `Math.atanh` – hyperbolic arc-tangent of a number

+   `Math.hypot` – square root of the sum of squares

+   `Math.clz32` – leading zero bits in the 32-bit representation of a number

+   `Math.imul`– C-like 32-bit multiplication

+   `Math.fround` – nearest single-precision float representation of a number

[Nicolás Bevacqua](https://ponyfoo.com/articles/es6#math)

### Array

数组扩展

### Object

对象扩张


### Strings and Unicode （）

字符串扩展和Unicode编码扩展



### Modules（模块）

`a.js`
```js
    var obj = {};
    var ObjOne = {};
    // module.exports  = obj; // ES5 默认导出

    export { ObjOne };
    export default obj; // es6 默认导出

```

`b.js`
```js
    // var obj = require('a.js'); // ES5 导入
    import Obj from 'a.js'; // ES6 导入
    import {ObjOne} from 'a.js';

    // 上面还可以这样写
    // import Obj, {ObjOne} from 'a.js';
```

### 结束语

这只是一个简单的版本，适合刚入手ES6的新手，可以先大致过一遍ES6的新东西。具体的方面后期会慢慢补上，如果你喜欢请star🌟 谢谢

[原文地址](https://github.com/freeshineit/ecma20xxfeatures/blob/master/src/ecma2015/)