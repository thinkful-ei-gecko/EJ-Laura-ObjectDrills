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

function personMaker() {
  let person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName() {
      console.log(`${this.firstName} ${this.lastName}`);
    },
  };
  return person;
}

<<<<<<< HEAD
let character = personMaker();
console.log(personMaker());
character.fullName();
=======
// let character = personMaker();
// console.log(character.fullName());

const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
  }

  keyDeleter(sampleObj);
  console.log(sampleObj);
>>>>>>> e98ea7f7bbc286c2a77bffc505cf012dc6ea3ce1
