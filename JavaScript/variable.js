// 1. Use strict
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. variable, rw(Read/Write)
// let (added in ES6)
let globalName = "i'm global";
{
    let name = "Cho Yeong Mi";
    console.log(" let name : "+name);
    name = "Yeong Mi Cho"
    console.log(" let name2 : "+name);
    console.log(" let globalName : "+globalName);
}
console.log(" let name : "+name);
console.log(" let globalName : "+globalName);

// var -> don't use this 
// why are we avoided use var?
// - var can use without declaration 
// it called var-hoisting 
// var-hoisting : move declaration from bottom to top
// - var has no block scope
{
    blockAge = 4;
    var blockAge;
}
console.log("blockAge : " + blockAge);

console.log("var age : "+age)
age = 4;
var age;

// let -> generate error, let can't use without declaration 
//letAge = 4;
//let letAge;

// 3. Contant, r(read only)
// use Contatn whenever possible
// only use let if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;

// ※ immuable & mutable
// immutable data type ( favor immutable data type always )
// immutable data types : primitive types, frozen objects (i.e object.frozen())
// mmutable data types : all objects by default are mutable in js
// - security 
// - thread safety
// - reduce human mistake

// 4. variable type 
// - primitive (atomic data type) : number, String, boolean ... 
// - object (box container) : function(first-class function)
// first-class function : function use like variable,   
// primitive, object are diffrent save way

const count = 17; //int
const size = 17.1; //decimal number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);


const infinity = 1 / 0; 
const negativeInfinity = -1/0;
const nAn = " not a number : NAN " / 2;

console.log (`infinity : ${infinity}`);
console.log (`negativeInfinity : ${negativeInfinity}`);
console.log (`nAn : ${nAn}`);

const bigInt = 123456789123456789n;
console.log(`bigInt : ${bigInt} / bigIntType : ${typeof bigInt}`);

// String 
const char = 'a';
const string = 'hi';
const string2 = string + 'hello';
console.log(`value : ${string2}, type : ${typeof string2}`);

// Backquote과 Template literals 
// -Backquote : `` -> 백틱이라고 발음
// -Template literals : ${}
const string3 = `${String}, ${string2} i'm ym`;

// null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

//undefined
let x;
console.log(`value : ${x}, type : ${typeof x}`); 

//symbol : create unique identifiers for object
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log('1');
console.log(symbol1===symbol2); // false

//Returns a Symbol object from the global symbol registry matching the given key if found
const gSymbol1 = Symbol.for('pwd'); // can't find matching key, so create 'pwd' symbol
const gSymbol2 = Symbol.for('pwd'); // can find matching key, take 'pwd' symbol, so gSymbol1 === gSymbol2
console.log(gSymbol1===gSymbol2); // true 
console.log(gSymbol1===symbol1)//false
console.log(gSymbol1===symbol2)//false
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

//5. Dynamic typing : dynamically typed language
let text = 'byebye';
console.log(text.charAt(0));
console.log(`value : ${text} , type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7'+5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8'/'2';
console.log(`value : ${text}, type : ${typeof text}`);
//console.log(text.charAt(0)); //error 
