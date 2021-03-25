//자바 스크립트는 dynamically typed language라서 배열에 뭐가 어떻게 담길지 모르니 좀 주의해서 하기
'use strict'

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['🍎','🍌']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); //이런 식으로 배열의 마지막 요소에 접근

// 3. Looping over an array
// print all fruits

for (let i = 0; i < fruits.length; i++) {
    console.log(` (for)fruit${i} : ${fruits[i]}`);
}
console.log('--------');

let i = 0;
for (const fruit of fruits) {
    console.log(` (forof)fruit${i} : ${fruit} `)
    i++;
}
console.log('--------');

// foreach is callback function 
i=0;
fruits.forEach(element => {
    console.log(`${i}he`);
    i++;
});
console.log('--------');

i=0;
fruits.forEach((fruit,index) => console.log(`(forEach_Arrow) : ${fruit}, ${index}`));
//array.forEach( (parameters) => logic.... )

console.log('--------');

i=0;
fruits.forEach(function(fruit, index, array) {
    console.log(`-*-*-*-*-((${i}))-*-*-*-*-`);
    console.log(`forEach fruit${i} : ${fruit}`);
    console.log(`forEach index${i} : ${index}`);
    console.log(`forEach array${i} : ${array}`);
    i++;
});

//4. Addition, Deletion, Copy
// push : add an item to the end
fruits.push('🍓','🍑');
console.log(`push    -> ${fruits}`);

// pop : remove an item from the end
fruits.pop();
console.log(`pop1    -> ${fruits}`);
fruits.pop();
console.log(`pop2    -> ${fruits}`);

// unshift : add an item to the beginning
fruits.unshift('🍑','🍓');
console.log(`unshift -> ${fruits}`);

// shift : remove an item from the beginning
fruits.shift();
console.log(`shift   -> ${fruits}`)

// note! shift, unshift are slower than pop, push

fruits.push('🍒','🥑','🍈');
console.log(fruits);

// splice : remove an item by index position
console.log('before splice : ' + fruits);
fruits.splice(1,1);
console.log('after splice : ' + fruits);

fruits.splice(1,1,'🍊','🥭');
console.log('after splice2 : ' + fruits);

// combine two arrays
const fruits2 = ['🍰','🧁'];
const foods = fruits.concat(fruits2);
console.log(foods);

// 5. Searching
// find the index , indexOf & includes
//console.clear();
console.log(fruits);
console.log(`indexOf'🍒' -> ${fruits.indexOf('🍒')}`);
console.log(`indexOf'🍊' -> ${fruits.indexOf('🍊')}`);
console.log(`includes'🍊' -> ${fruits.includes('🍊')}`);
console.log(`includes'🍖' -> ${fruits.includes('🍖')}`);
console.log(`indexOf'🍖' -> ${fruits.indexOf('🍖')}`);


// lastIndexOf
//console.clear();
fruits.push('🍓');
console.log(fruits);
console.log(`indexOf'🍓' -> ${fruits.indexOf('🍓')}`);
console.log(`lastIndexOf'🍓' -> ${fruits.lastIndexOf('🍓')}`);


// Study Alone

console.clear();
const arr = ['가'];

// push : 요소 집어넣기
let pushed = arr.push('나');
console.log(`pushed : ${pushed}`); //returns the new length of the array.
console.log(arr);

// join : push처럼 아예 넣지는 않고 parameter를 넣었을때 배열이 어떻게 나오는지 확인 정도의 용도..?
let joined = arr.sort('다'); 
console.log(`joined : ${joined}`); // '가', '나', '다'

console.log(arr); // '가', '나'

// reverse : 정렬을 거꾸로 한 배열이 튀어나옴 return T[];
let reverseArr = arr.reverse(); 
console.log(reverseArr);

// sort : 정렬 후 배열 돌려줌
let sortArr = reverseArr.sort();
console.log(sortArr);


// test 1
const array1 = [1, 30, 39, 29, 10, 13];
// test 1-1
const isBelowThreshold = (currentValue) => currentValue < 40; 
const a = function (value){
    return value < 40;
}
console.log('1 : '+array1.every(isBelowThreshold));

// test 1-2
let rs = array1.every(elem => elem <40);
console.log('2 : '+rs);











