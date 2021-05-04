
console.log('-*-*-*-*-*-*- TEST ME -*-*-*-*-*-*-')

let fruits = [];
console.log('NO.1');
fruits = ['apple', 'banana', 'orange'];
let strFruits = '';
fruits.forEach(element => {
    strFruits += element + ',';
});
console.log(strFruits);

console.log('NO.2');
strFruits = '🍎, 🥝, 🍌, 🍒';
fruits = strFruits.split(',');
console.log(fruits);

console.log('NO.3');
let array = [1, 2, 3, 4, 5];
console.log('first way : '+array.sort(function(a,b){ //a=2, b=1 / a=3,b=2 ∙∙∙
    console.log(`a : ${a}, b : ${b}`);
    return b-a;
}));
array = [1, 2, 3, 4, 5];
console.log('second way : '+array.reverse());

console.log('NO.4');
array = [1, 2, 3, 4, 5];
console.log(array.slice(2));

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

console.log('NO.5');

students.forEach(element => {
    if(element.score===90){
        console.log(`name : ${element.name} | score : ${element.score}`);
    }
});

console.log('NO.6');
students.push(new Student('F', 25, true, 100));
students.forEach(element => {
   console.log(element); 
});

console.log('NO.7');
let scores = [];
let i = 0;
students.forEach(element => {
    scores[i] = element.score;
    i++;
 });

console.log(scores);

console.log('NO.8');
students.forEach(element => {
    if(element.score <= 50){
        console.log(`name : ${element.name} | score : ${element.score}`);
    }
});

console.log('NO.9');
students.forEach(element => {
    let sum=0;
    let avg=0.0;
    sum =+ element.score;
    avg = sum/students.length;
    console.log(`Average is ${avg}`);
});