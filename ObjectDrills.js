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

function updateObject(obj) {

    obj.foo = "foo";
    obj.bar = "bar";
    obj.bizz = "bizz";
    obj.bang = "bang";

    return obj;
}

let pickle = {} ;
console.log(updateObject(pickle));
