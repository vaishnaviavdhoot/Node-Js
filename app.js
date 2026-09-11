// var a=10;
// var b=20;
// console.log(name);
// console.log(a+b);
// console.log(global);
// console.log(this);
// console.log(globalThis);
// console.log(globalThis === global);
// console.log(globalThis === this);
// console.log(__dirname);
// console.log(__filename);
// console.log(module);
// console.log(exports);
// console.log(globalThis === window);
// console.log(self);
// console.log(frames)
// console.log(window);

require('./xyz');
const {multiply, calculateSum, x} = require('./calculate');
// const {x,calculateSum} = require('./calculate/sum');
var name ="vasihnavi";
console.log(calculateSum(10, 20));
console.log(multiply(10, 20));
console.log(x);