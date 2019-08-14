'use strict';

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