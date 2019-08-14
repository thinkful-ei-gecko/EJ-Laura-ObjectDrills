'use strict';

/*
function createMyObject() {
  let person = {
    foo: 'bar',
    answerToUniverse: 42,
    "olly olly": 'oxen free',
    sayHello: function () {
  console.log('Hello!')
    }
  }
  return person;
}

let Robert = createMyObject();

Robert.sayHello();
*/

// function updateObject(obj) {

//     obj.foo = "foo";
//     obj.bar = "bar";
//     obj.bizz = "bizz";
//     obj.bang = "bang";

//     return obj;
// }

// let pickle = {} ;
// console.log(updateObject(pickle));

// function personMaker() {
//   let person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     fullName() {
//       console.log(`${this.firstName} ${this.lastName}`);
//     },
//   };
//   return person;
// }

// let character = personMaker();
// console.log(personMaker());
// character.fullName();

// const sampleObj = {
//     foo: 'foo',
//     bar: 'bar',
//     bizz: 'bizz',
//     bang: 'bang',
//   };

//   function keyDeleter(obj) {
//     delete obj.foo;
//     delete obj.bar;
//     return obj;
//   }

//   keyDeleter(sampleObj);
//   console.log(sampleObj);

// function makeStudentReport(data) {

//   let array = [];

//   data.forEach(element => {
//     array.push(
//       `${element.name}: ${element.grade}`
//     )
//   });

//   return array;
// }

// let data = [{
//   name: 'Jane Doe',
//   grade: 'A'
// },
// {
//   name: 'John Dough',
//   grade: 'B'
// },
// {
//   name: 'Jill Do',
//   grade: 'A'
// }
// ];

// console.log(makeStudentReport(data));

  
//   function enrollInSummerSchool(students) {
//     students.forEach(student =>  student.status = "In summer school");
//     return students;
//   }

//   const studentData = [
//     {
//       name: 'Tim',
//       status: 'Current student',
//       course: 'Biology',
//     },
//     {
//       name: 'Sue',
//       status: 'Withdrawn',
//       course: 'Mathematics',
//     },
//     {
//       name: 'Liz',
//       status: 'On leave',
//       course: 'Computer science',
//     },
//   ];


// console.log(enrollInSummerSchool(studentData));

// function findById(items, idNum) {
//   return scratchData.find(item => item.id === idNum);
// }

// const scratchData = [
//   { id: 22, foo: 'bar' },
//   { id: 28, foo: 'bizz' },
//   { id: 19, foo: 'bazz' },
// ];

// console.log(findById(scratchData, 28));

// const objectA = {
//     id: 2,
//     name: 'Jane Doe',
//     age: 34,
//     city: 'Chicago',
//   };
  
//   // running the function with `objectB` and `expectedKeys`
//   // should return `false`
//   const objectB = {
//     id: 3,
//     age: 33,
//     city: 'Peoria',
//   };
  
//   const expectedKeys = ['id', 'name', 'age', 'city'];
  
//   function validateKeys(object, expectedKeys) {
//     let currentKeys = Object.keys(object);

//     if (currentKeys.length !== expectedKeys.length) {
//         return false;
//     }
//     else {
//         for (let i=0; i<currentKeys.length; i++) {
//             if (currentKeys[i] === expectedKeys[i]) {
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         }
//     }
//   }

// console.log(validateKeys(objectA, expectedKeys));
// console.log(validateKeys(objectB, expectedKeys));

// let loaf = {
//   flour: 300,
//   water: 210,
//   hydration (){
//     console.log((this.water / this.flour) * 100);
//   }
// };

// console.log(loaf);
// loaf.hydration();

let coolObject = {
    foo: 59,
    bar: 22,
    fum: 38,
    quux: 42,
    spam: 99
}

for (let key in coolObject) {
    console.log(`${key} ${coolObject[key]}`);
}