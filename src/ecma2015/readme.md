## ES6 (ECMAScript 2015)

### Assignment Destructuring (分配解构)

```js
    let obj = {
        id: 1,
        name: 'shine'
    }

    let {name} = obj;
```

### Spread Operator and Rest Parameters (扩展操作和其余的参数)

```js
    let arr = [1, 2, ...[3, 4, 5], 6, 7];

    function reset(a, b, ...params) {}

    reset('a', 'b', 'c', 'd');
```

### Arrow Function (箭头函数)

```js
    [1, 2].map(x =>  x * 2);

    let func = () => console.log('this is arrow function');
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

### Class (类)

```js
class foo {}
```

### Let and Const

```js
    let a  = 'a';
    const B = 'b';
```

### Symbol (一种新的原始数据类型Symbol, 表示独一无二的值)

```js
var symbol = Symbol()
```

### Iterator (Iterator 遍历器)

```js
    for (let el of document.querySelectorAll('img')) {
        // el
    }
```

### for..of

```js
    for (let el of document.querySelectorAll('img')) {
        // el
    }
```

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

### Promise

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

### Map

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

### WeakMap (和 Map相似，但不完全相同)

WeakMap 与 Map 在 API 上的区别主要是两个，一是没有遍历操作（即没有keys()、values()和entries()方法），也没有size属性。因为没有办法列出所有键名，某个键名是否存在完全不可预测，跟垃圾回收机制是否运行相关。这一刻可以取到键名，下一刻垃圾回收机制突然运行了，这个键名就没了，为了防止出现不确定性，就统一规定不能取到键名。二是无法清空，即不支持clear方法。因此，WeakMap只有四个方法可用：get()、set()、has()、delete()。

[ECMAScript 6 入门 阮一峰](http://es6.ruanyifeng.com/#docs/set-map)

### Set

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

### WeakSet

```js
    let weakSet = new WeakSet();
    weakSet.add('add');

    // WeakSet api
    // weakSet.add()
    // weakSet.delete()
    // weakSet.has()
```

### Proxy (代理)

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

### Reflect (反射)

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

+   `Math.sign`: 用于判断一个数是正数、负数还是零。 [Math.sign](http://www.ecma-international.org/ecma-262/6.0/#sec-math.sign)

+   `Math.trunc`: 返回整数部分。 [Math.trunc](http://www.ecma-international.org/ecma-262/6.0/#sec-math.trunc)

+   `Math.cbrt`: 开立方根， ∛‾value。 [Math.cbrt](http://www.ecma-international.org/ecma-262/6.0/#sec-math.cbrt)

+   `Math.expm1`: e<sup>x</sup> - 1。 [Math.expm1](http://www.ecma-international.org/ecma-262/6.0/#sec-math.expm1)

+   `Math.log1p`: 返回1 + x的自然对数。 [Math.log1p](http://www.ecma-international.org/ecma-262/6.0/#sec-math.log1p)

+   `Math.log10`: 以10为底的对数的值。 [Math.log10](http://www.ecma-international.org/ecma-262/6.0/#sec-math.log10)

+   `Math.log2`: 以2为底的对数的值。 [Math.log2](http://www.ecma-international.org/ecma-262/6.0/#sec-math.log2)

+   `Math.sinh`: 数的双曲正弦。 [Math.sinh](http://www.ecma-international.org/ecma-262/6.0/#sec-math.sinh)

+   `Math.cosh`: 数的双曲余弦。 [Math.cosh](http://www.ecma-international.org/ecma-262/6.0/#sec-math.cosh)

+   `Math.tanh`: 数的双曲正切。 [Math.tanh](http://www.ecma-international.org/ecma-262/6.0/#sec-math.tanh)

+   `Math.asinh`: 数的逆双曲弧正弦。 [Math.asinh](http://www.ecma-international.org/ecma-262/6.0/#sec-math.asinh)

+   `Math.acosh`:  数的的逆双曲余弦。 [Math.acosh](http://www.ecma-international.org/ecma-262/6.0/#sec-math.acosh)

+   `Math.atanh`: 数的双曲正切。 [Math.atanh](http://www.ecma-international.org/ecma-262/6.0/#sec-math.atanh)

+   `Math.hypot`: 平方和的平方根。 [Math.hypot](http://www.ecma-international.org/ecma-262/6.0/#sec-math.hypot)

+   `Math.clz32`: 在一个数字的32位表示中引导零位 [Math.clz32](http://www.ecma-international.org/ecma-262/6.0/#sec-math.clz32)

+   `Math.imul`: 返回两个数以 32 位带符号整数形式相乘的结果。 [Math.imul](http://www.ecma-international.org/ecma-262/6.0/#sec-math.imul)

+   `Math.fround`:返回一个数的32位单精度浮点数形式。 [Math.fround](http://www.ecma-international.org/ecma-262/6.0/#sec-math.fround)

[ECMAScript 6 入门 阮一峰](http://es6.ruanyifeng.com/#docs/number#Math-%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%A9%E5%B1%95)

### Array

数组扩展

+   `Array.from`: 把类似数组或可迭代的对象转化为数组实例。 [Array.from](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

+   `Array.of` : 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。 [Array.of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of)

+   `Array.prototype.copyWithin`: 将数组元素的序列复制到数组中的其他位置。 [Array.prototype.copyWithin](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

+   `Array.prototype.fill`:  用所提供的值填充现有满足开始和结束索引的数组的所有元素() 。 [Array.prototype.fill](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

+   `Array.prototype.find`: 返回第一个满足回调函数的项 。 [Array.prototype.find](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
   
+   `Array.prototype.findIndex`: 返回第一项以满足回调的索引 。 [Array.prototype.findIndex](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

+   `Array.prototype.keys`: 返回一个新的Array迭代器，它包含数组中每个索引的键。 [Array.prototype.keys](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
   
+   `Array.prototype.values`: 返回一个新的Array迭代器，它包含数组中每个索引的值。 [Array.prototype.values](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

+   `Array.prototype.entries`: 返回一个新的Array迭代器，它包含数组中每个索引的键/值对。 [Array.prototype.entries](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)

+   `Array.prototype[Symbol.iterator]`: 完全一样的array.prototype.values方法。 [Array.prototype[Symbol.iterator]`:](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)

### Object

对象扩展

+   `Object.assign`: 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象 。 [Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

+   `Object.is`: 判断两个值是否是相同的值 。 [Object.is](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

+   `Object.getOwnPropertySymbols` – 返回对象上发现的所有属性symbols 。 [Object.getOwnPropertySymbols](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)

+   `Object.setPrototypeOf`: 改变原型。相当于`Object.__proto__`设置。 [Object.setPrototypeOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf)

### String and Unicode

字符串扩展和Unicode编码扩展

+   字符串操作
    +   `String.prototype.startsWith`: 字符串是否以指定的值开头。 [String.prototype.startsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

    +   `String.prototype.endsWith`:  字符串是否以指定的值结束。[String.prototype.endsWith](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

    +   `String.prototype.includes`: 字符串是否包含值。[String.prototype.includes](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

    +   `String.prototype.repeat`: 返回字符串重复指定次数的新字符串。 [String.prototype.repeat](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

    +   `String.prototype[Symbol.iterator]`: 返回一个新的Iterator对象，它遍历字符串的代码点，返回每一个代码点的字符串值。[String.prototype[Symbol.iterator]](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator)

+   Unicode
    +   `String.prototype.codePointAt`: [   String.prototype.codePointAt](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.codepointat)
    +   `String.fromCodePoint`: [String.fromCodePoint](http://www.ecma-international.org/ecma-262/6.0/#sec-string.fromcodepoint)
    +   `String.prototype.normalize`: [String.prototype.normalize](http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.normalize)


### Module（模块）

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

资源：

[ECMAScript 6 入门 阮一峰](http://es6.ruanyifeng.com/#docs/reflect)

[ES6 Overview in 350 Bullet Points](https://ponyfoo.com/articles/es6)

[MDN](https://developer.mozilla.org/)

[ECMAScript® 2015 Language Specification](http://www.ecma-international.org/ecma-262/6.0/)


