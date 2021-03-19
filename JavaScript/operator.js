'use strict'

//1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`String literals : 
''''
1 + 2 = ${1+2}`);

//2. Numeric operators
console.log(1+1); //add
console.log(1-1); //substract
console.log(1/1); //divide
console.log(1*1); //multifly
console.log(5%2); //remainder
console.log(2**3); //exponentiation

//3. Increment and decrement operations
let counter = 1;
const preIncrement = ++counter;
// const preIncrement = ++counter; it means 
//counter = counter + 1;
//preIncrement = counter 
console.log(`preIncrement = ${preIncrement}, counter = ${counter}`);//2, 2
const postIncrement = counter++;
// const preIncrement = counter++; it means 
//preIncrement = counter
//counter = counter + 1;
console.log(`preIncrement = ${preIncrement}, counter = ${counter}`);//2, 3

const preDecrement = --counter;
console.log(`preIncrement = ${preIncrement}, counter = ${counter}`);//2, 2
const postDecrement = counter--;
console.log(`preIncrement = ${preIncrement}, counter = ${counter}`);//2, 1

//4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y; 
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10<6); //f
console.log(10<=6); //f
console.log(10>6); //t 
console.log(10>=6); //t

//6. Logical oprators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; //t

// || (or) : finds the first truthy value
console.log(`or : ${value1 || value2 || check()}`)
// check는 for문 연산을 해야하는 value1과 value2에 비해 조금 더 무거운 object이다.
// 이런 무거운 object는 Logical 연산을 할 때 가장 뒤에 두는 것이 좋다.
// in Logical operation, heavy objects are place at the last operating

// && (and) : finds the first falsy value 
// often used to compress long if statement
// nullable Object && nullable Object.sometning
// null Object return false
console.log(`and : ${value1 && value2 && check()}`)

//function
function check() {
    for (let index = 0; index < 10; index++) {
        //wasting time
        console.log('🍰');
    }
    return true;
}

// ! (not) 
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = 5;

// == : lose Equality, with type conversion
console.log(`stringFive == numberFive : ${stringFive == numberFive}`);
console.log(`stringFive != numberFive : ${stringFive != numberFive}`);

// === : strict Equality, no type conversion
console.log(`stringFive == numberFive : ${stringFive === numberFive}`);
console.log(`stringFive != numberFive : ${stringFive !== numberFive}`);

// object equality by reference
const person = { name : 'zico' };
const drink = { name : 'zico' };
const person3 = person;

console.log(`person == drink -> ${person == drink}`);
console.log(`person === drink -> ${person === drink}`);
console.log(`person == person3 -> ${person == person3}`);

//equality - puzzler
console.log(`0==false : ${0==false}`);// think : t <> correct : t
console.log(`0===false : ${0===false}`);// think : t <> correct : f
console.log(`''==false : ${''==false}`);// think : t <> correct : t
console.log(`''===false : ${''===false}`);// think : t <> correct : f
console.log(`null==undefined : ${null==undefined}`);// think : f <> correct : t
console.log(`null===undefined : ${null===undefined}`);// think : f <> correct : f

//8. Conditional operators : if 
// if, else if, else
const hisName = 'zico'
if(hisName === 'zico'){
    console.log('Welcome, zico');
}else if(hisName === 'P.O'){
    console.log('Welcome, P.O');
}else{
    console.log('unknown');
}

//9. Ternary operator : ?
// condition ? value1 : value2;
console.log(hisName==='zico'? 'hi is zico' : 'hi is not zico');

//10. Switch statement
// use for multiple if checks
// use for enum-like value checks
// use for multiple type checks in Ts
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('hmm...');
        break;
    case 'FireFox':
    case 'Chrome':
        console.log('good');
        break;
    default:
        console.log('hi');
        break;
}

//11. Loops
// 11-1. while Loop, while the condition is truthy,
// body code is executed
let i = 0;

while (i < 3){
    console.log(`while : ${i}`);
    i++;
}

// 11-2. do ~ while Loop, body code is executed first,
// then check condition

do{
    console.log(`do while : ${i}`);
    i--; 
}while (i > 0)

// 11-3. for Loop, for(begin; condition; step)
for (let j = 0; j < 3; j++) {
    console.log(`inline variable for ${j}`);
}

for(let j = 3; j > 0; j =- 2){
    console.log(`inline variable for ${j}`);
}

//nested loops
for (let j = 1; j <= 5; j++) {
    console.log(`---${j}---`);
    for (let k = 1; k <= 5; k++) {
        console.log(`${k}. 바깥 for문 : ${j} : 안쪽 for문 : ${k}`);
    }    
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)

for(let j = 0; j <= 10; j++){
    if(j%2!=0){
        continue;
    }
    console.log(`only even for : ${j}`);
}

// no continue, it's better
for (let j = 0; j < 10; j++) {
    if(j%2===0){
        console.log(`only even for (better) : ${j}`);
    }
}

// Q2. iterate from 0 to 10 and print numners until reaching 8 (use break)

for(let j = 0; j <= 10; j++){
    if(j==9){
        break;
    }
    console.log(`until 8 for : ${j}`);
}