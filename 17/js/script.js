"use strict";

const str = 'test';

console.log(str.length);
console.log(str[2]);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some fruits';

console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';

console.log(logg.slice(6,11));
console.log(logg.slice(6));

console.log(logg.substring(6,11));

console.log(logg.substr(6,5));


const num = 12.2;

console.log(Math.round(num));


const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));