'use stirct'
// Objects
// one of the JavaScript's data type 
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value , key2 : value2};

// 1. Literals and properties
const obj = {}; // 'object literal' syntax
//const obj = new Object(); // 'object constructor' syntax

function print(person){
    console.log(`name : ${person.name}`);
    console.log(`age : ${person.age}`);
}

const omi = {name : '영미', age : 4}; //object literal
print(omi);

// can inject field after create object
omi.hasJob = true; 
console.log(`job : ${omi.hasJob}`); // true

// also can delete after create object
delete omi.hasJob;
console.log(`job : ${omi.hasJob}`); // undefined


// 2. Computed properties
// 동적으로 키의 밸류를 받아올 때 유용
// two way approach to object
console.log(omi.name); // use dot 
// use computed properties, key should be always string
console.log(omi['name']); 

// can inject field after create object 
omi['hasJob'] = true;
console.log(omi['hasJob']);

// computed properties / dot properties
// dot -> 코딩하는 그 순간 키에 대한 값을 받아올 때 (보통 이거 쓰는게 맞음)
// computed -> 정확하게 키 값이 뭔지 모를때 런타임에서 키가 결정 될 때 

function printVal(obj, key){
    console.log(`dot : ${obj.key}`); //undefined
    console.log(`computed : ${obj[key]}`); //영미
    //와.. 뭐야..? 닷은 안되고 컴퓨티드는 돼.. 
    // 닷 : obj 오브젝트에 key라는 이름의 키를 찾고 있음 (보이는 그대로)
    // 컴퓨티드 : omi 오브젝트에 'name' 이라는 이름의 키를 찾고 있음 (런타임)
    // 즉, 닷은 보이는 그대로 코딩 그대로
    // 컴퓨티드는 프로그래밍 실행중에, 즉 함수를 실행 중!!
}

printVal(omi, 'name');


// 3. Property value shorthand
const person1 = {name : 'bob' , age : 2};
const person2 = {name : 'steve' , age : 3};
const person3 = {name : 'dace' , age : 4};
const person4 = new Person('doja',24);
console.log(person4);

// 4. Constructor function
function Person(name, age){
    this.name = name;
    this.age = age;
}

// 5. in operator : property existence check (key in obj)
console.log( ` in operator 'name' in omi : ${'name' in omi}`);
console.log( ` in operator 'age' in omi : ${'age' in omi}`);
console.log( ` in operator 'random' in omi : ${'random' in omi}`);

// 6. for..in vs for..of
// for..in (key in obj)
for(key in omi){
    console.log(key);
}

// for..of (value of iterable)
const arr = [1,2,3,4];
for (value of arr) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'hoe', age: '24'};
const user2 = user;
//console.log(`user : ${user}`);
console.log(user);

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
//console.log(`user3 : ${user3}`);
console.log(user3);
// new way
const user4 = {};
Object.assign(user4, user);
//console.log(`user4 : ${user4}`);
console.log(user4);

// 7-1. the other example
const fruit1 = { color:'red'};
const fruit2 = { color:'blue', size:'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(`mixed Color : ${mixed.color}`);
console.log(`mixed Size : ${mixed.size}`);

//??