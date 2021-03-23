// javaScript is procedure Language
// function is sub-program that much important and have many functions
// fundamental building block in the program
// subprogram can be use multiple times
// performs a task or calculates a value

// 1. Function declaration
// function name (param1, param2) {body ··· return;}
// one-function do one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createrPoint
// function is object in JS

'use strict'

function hello() {
    console.log('say hi');
}

hello();

function hello2(message){
    console.log(message);
}

hello2('say hi, o-oMi');

// 2. Parameters 
// premitive parameters : passed by velue
// object parameters : passed by Reference

function changeName(obj){
    obj.name = 'coder';
}

const person = {name : '0mi'};
console.log('before changeName : ' + person.name);
changeName(person);
console.log('after changeName : ' + person.name);

// 3. default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi~ nice to meet you' , ); 
showMessage('Hi~ nice to meet you too' , 'o-oMi'); 

// 4. Rest Parameters(added in ES6)
function printAll(...args){ // ... means array, wow hmmteresting
    for (let i = 0; i < args.length; i++) {
        console.log("for : " + args[i]);
    }
    for (const arg of args) {
        console.log("for of : " + arg )
    }
}
printAll('1. dreams', '2. come', '3. true', '4. o-oMi');

// 5. Local scope
let globalMessanger = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessanger);

    function printAnother(){
        let childMessage = '안녕하세요';

    }
}
printMessage();

console.log(`function hoisting : ${sum(1,3)}`)

// 6. Return a value
function sum(a,b){
    return a + b;
}

// no return a value functions have 'return undefined'
const res = sum(1,2);
console.log(res);
console.log(`sum = ${sum(1,2)}`);

// 7. early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // logic code execute
    }
}
//good 
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // logic code execute
}

//First-class Function 
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as a argument to other functions
//can be returned by another function

// 1. Function expressions
// a Function declaration can be called earlier than it is defined. (hoisted)
// a Function expression is created when the execution reaches it

const print = function() { //anonymous function
    console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(`sumAgain : ${sumAgain(1,2)}`);


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'ok'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log("i say Yes~");
};

// named function 
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log("i say No!");
    //print(); //call stack size excceded error
};

randomQuiz('no ok -_-' , printYes, printNo);
randomQuiz('ok' , printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function() {
    console.log('simplePritn');
};

// Arrow function don't need 'block {}'
const arrowFunction = () => console.log("I'm arrowFunction");
// Arrow function don't need 'return xxx'
const arrowAdd = (a,b) => a+b;
// Arrow function can use return and block
const arrowCompare = (a,b) => {
    if(a>b){
        return 'a is bigger';
    }else if (a==b) {
        return 'a equals b';
    }else{
        return 'b is bigger';
    };
    return;
};

arrowFunction();
console.log(`arrowAdd : ${arrowAdd(1,2)}`);
console.log(`arrowCompare : ${arrowCompare(1,3)}`);

// IIFE : Immediately Invoked Function Expression
(function hello3(){
    console.log('IIFE'); 
})();

// Quiz
// function calculate(command,a,b)
// command : add, substract, divide, multiply, remainder

// normal function
function calculate(command, a, b){
    if(command==='add'){
        return a+b;
    }else if(command==='substract'){
        return a-b;
    }else if(command==='divide'){
        return a/b;
    }else if(command==='multiply'){
        return a*b;
    }else{
        return a%b;
    }
}
console.log(`(normal function) 1 + 2 = ${calculate('add',1,2)}`);

// use callbakc function & arrow
function cbCalculate(command, a, b){
    return command(a,b);
}

const add = (a,b) => a+b; //arrow

const substract = function(a,b){
    return a-b;
};

const divide = function(a,b){
    return a/b;
};

const multiply = (a,b) => a*b; //arrow

const remainder = function(a,b){
    return a%b;
};

console.log(`(callback function) 1 + 2 = ${cbCalculate(add,1,3)}`);

// teacher's answer 
function switchCalculate(command, a, b){
    switch(command){
        case 'add':
            return a+b;
        case 'substract':
            return a+b;
        case 'divide':
            return a+b;
        case 'multiply':
            return a+b;
        case 'remainder':
            return a+b;
        default :
            throw Error(' unknown command ');
    }
}
console.log(`(switchC function) 1 + 2 = ${switchCalculate('add', 1, 2)}`)