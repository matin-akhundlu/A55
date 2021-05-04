"use strict";

/* console.log(this); */
/* 
let text = "Hello"; */

/* function sum (a,b = 4) {
    let text = "hi"
    if(!a){
        return;
    }
    console.log(a + b);
};
 sum(5);

console.log(text);

let sum2 = function () {
    return 5;
};

console.log(sum2); */

/* confirm("Yaxshisan?") */
/* 
function ask(question, yes, no)
{if (confirm(question))
{yes();}
{no();}
}

function showOK() {
    alert("You agreed");
}

function showCancel() {
    alert ("You canceled");
}


function TestOK() {
    console.log("true cixdi");
}

function TestCancel() {
    console.log("false cixdi");
}


ask ("Do you agree?", showOK, showCancel);
ask ("still Do you agree?", TestOK, TestCancel); */
/* 
let sumTwoItems = a => a + 5;

console.log(sumTwoItems(5));
 */
/* 
for (let i = 0; i < 4; i++) {
    console.log (i, "inside loop")
}
 */

/* let imput = 3;

function multiple(inp) {
    let item = 2;
    return inp + item;
}

let output1 = multiple(input);
let output = multiple(2);
 */

/* 
let student = {
    name: "Matin",
    age: 34,
    grades: [80, 90],
    isMarried: false,
    sayHi: function (){
        console.log("hi");
    },
}; */

/* student.surname =  "Akhundlu";

console.log(student);

student.age = 30;

console.log(student);

delete student.isMarried;

console.log(student); */

/* 
let student = {
    name: "Matin",
    age: 34,
    grades: [80, 90],
    "is Married": false,
    sayHi: function (){
        console.log("hi");
    },
};

 */
/* 
console.log(student.age);
console.log(student["is Married"]); */

/* let dynamicKey = prompt("daxil edin");

student[dynamicKey] = 5;
student.dynamicKey = 5;
 */

/* 
for (let value in student) {
   console.log(student [value]); 
}

 *//* 

let user = {
    name: "Matin",
    surname: "Akhundlu",
    age: 34,
};

let user2 = {}; */
/* 
for (let key in  user) {
    user2[key] = user[key];
}

user2.name = "Gaga";

console.log(user2, "user2");
console.log(user, "user"); */

/* Object.assign(user2, user, {isMarried: false},);

console.log(user2); */

/* function createStudent(name, age) {
    return {
        name: name,
        age: age,
    };
}
 */
/* let student = createStudent("Matin", 34);
let student2 = createStudent("Gaga", 30);
 */
/* console.log(student);
console.log(student2); */

/* 
function Student(name, age) {
    
        this.name = name;
        this.age = age;
   }

let student = new Student ("Matin", 34);
let student2 = new Student ("Gaga", 30);

 */
/* 
let sayHi = function () {
    console.log(`${this.name} salam`);
};

let student1 = {
    name: "Malik",
    age: 18,
};

let student2 = {
    name: "Faruk",
    age: 25,
};

student1.sayHiFrom = sayHi;
student2.sayHiFrom = sayHi;


student1.sayHiFrom();
student2.sayHiFrom(); */