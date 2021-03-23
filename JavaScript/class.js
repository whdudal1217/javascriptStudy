'use strict';

// Object-oriented programming
// class : template
// object : instance of a class
// Javascript classes
// - introduce in ES6 -> before class exist, immediately make object or use function
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log(`${this.name} : hi`);
    }
}

const person1 = new Person('김철수', 25);
console.log(person1.name);
console.log(person1.age);
person1.speak();

// 2. Getter & setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){
        /*if(value < 0){
            throw Error('age can not be negative');
        }*/
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'jobs', -1); 
console.log(` mistake input age : ${user1.age}`)


// 3. Fields (public, private) -> 오페라, 사파리, 파폭 미지원
class Access{
    publicField = "public";
    #privateField = "private";
}

const access = new Access();
console.log(`Public Field : ${access.publicField}`);
console.log(`Private Field : ${access.privateField}`); //undefined로 뜸, 올 ㅇ-ㅇ

// 4. Static properties and Method -> 아직 사파리에서 지원하지 않음
// 만들어 둔 한개의 객체로 돌려막기, 굳이 객체의 내용을 변경하지 않는 경우엔 static으로 하는게 좋음
class StaticClass{
    static staticField = 'static';
    constructor(staticNumber){
        this.staticNumber = staticNumber;
    }
    static printStaticField(){
        console.log(StaticClass.staticField);
    }
}

const staticObject1 = new StaticClass();
const staticObject2 = new StaticClass();

//static 필드는 class 명으로 접근 
//object 상관 없이 공통으로 사용되는 필드라면 static으로
console.log(`staticObject1 : ${staticObject1.staticField}`); // undefined
console.log(`StaticClass.staticField : ${StaticClass.staticField}`); // 'static'

// 5. Inheritance
// a way for one class to 
class Shape{
    constructor(width, height,color){

    }
    draw(){

    }
    getArea(){
        
    }
}

