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


function updateObject(obj) {

    obj.foo = "foo";
    obj.bar = "bar";
    obj.bizz = "bizz";
    obj.bang = "bang";

    return obj;
}

let pickle = {} ;
console.log(updateObject(pickle));

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

let character = personMaker();
console.log(personMaker());
character.fullName();

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

function makeStudentReport(data) {

  let array = [];

  data.forEach(element => {
    array.push(
      `${element.name}: ${element.grade}`
    )
  });

  return array;
}

let data = [{
  name: 'Jane Doe',
  grade: 'A'
},
{
  name: 'John Dough',
  grade: 'B'
},
{
  name: 'Jill Do',
  grade: 'A'
}
];

console.log(makeStudentReport(data));


  function enrollInSummerSchool(students) {
    students.forEach(student =>  student.status = "In summer school");
    return students;
  }

  const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];


console.log(enrollInSummerSchool(studentData));

function findById(items, idNum) {
  return scratchData.find(item => item.id === idNum);
}

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

console.log(findById(scratchData, 28));

const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };

  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };

  const expectedKeys = ['id', 'name', 'age', 'city'];

  function validateKeys(object, expectedKeys) {
    let currentKeys = Object.keys(object);

    if (currentKeys.length !== expectedKeys.length) {
        return false;
    }
    else {
        for (let i=0; i<currentKeys.length; i++) {
            if (currentKeys[i] === expectedKeys[i]) {
                return true;
            }
            else {
                return false;
            }
        }
    }
  }

console.log(validateKeys(objectA, expectedKeys));
console.log(validateKeys(objectB, expectedKeys));

let loaf = {
  flour: 300,
  water: 210,
  hydration (){
    console.log((this.water / this.flour) * 100);
  }
};

console.log(loaf);
loaf.hydration();

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

let food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(`${food.meals[3]} is the fourth meal.`);

let bigArray = [{
    name: "Bob",
    jobTitle: "CEO",
    boss: true
  },
  {
    name: "Fred",
    jobTitle: "UX Designer",
    boss: false
  },
  {
    name: "Maria",
    jobTitle: "Front End",
    boss: false
  },
  {
    name: "George",
    jobTitle: "Back End",
    boss: false
  }
]

for (let key in Object.keys(bigArray)) {
  if (bigArray[key].boss !== true) {
    console.log(`${bigArray[key].jobTitle} ${bigArray[key].name} reports to ${bigArray[0].name}`);
  } else {
    console.log(`${bigArray[key].jobTitle} ${bigArray[key].name} doesn't report to anybody`);
  }
}


function decode(string) {
  let cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
  };

  let stringArray = string.split(' ');
  //console.log(stringArray);

  let secretMessage = '';

  for (let i = 0; i < stringArray.length; i++) {
    let firstLetter = stringArray[i][0];
    let value = cipher[firstLetter];

    if (!value) {
      secretMessage += " ";
    } else {
      secretMessage += stringArray[i][value - 1];
    }
  }
  return console.log(secretMessage);
}


decode('craft block argon meter bells brown croon droop');
decode('downy brown blunt group agate aorta bathe igloo drift death blink chest cat!! homes');

function createCharacter(name, nickname, race, origin, attack, defense) {
  let character = {
    Name: name,
    Nickname: nickname,
    Race: race,
    Origin: origin,
    Attack: attack,
    Defense: defense,
    Describe() {
      console.log(`${this.Name} is a ${this.Race} from ${this.Origin}`);
    },
    EvaluateFight(fighter) {
      if (this.Defense > fighter.Attack && fighter.Defense > this.Attack) {
        console.log(`Your opponent takes 0 damage and you receive 0 damage.`)
      } else if (this.Defense > fighter.Attack) {
        console.log(`Your opponent takes ${this.Attack - fighter.Defense}  damage and you receive 0 damage.`)
      } else if (fighter.Defense > this.Attack) {
        console.log(`Your opponent takes 0 damage and you receive ${this.Defense - fighter.Attack} damage.`)
      } else {
        console.log(`Your opponent takes ${this.Attack - fighter.Defense} damage and you receive ${fighter.Attack - this.Defense} damage.`)
      }
    }
  }

  return character;
}

//creates all the characters
//this will print out in terminal

let characters = [createCharacter('Gandolf', 'gandolf', 'Wizard', 'Middle Earth', 10, 6),
createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
createCharacter('Medusa', 'Sosa', 'Snake Lady', 'Greek Mythology', 12, 16)];

console.log('---------------ALL CHARACTERS---------------')
console.log(characters);

//finds the hero nick named aragorn

console.log('---------------ARAGORN CHARACTER---------------')

characters.find(hero => {
  if (hero.Nickname === 'aragorn'){
    return hero.Describe();
  }
});

//filter the characters into new array from hobbit
//this will print out in the terminal

let newCharacters = characters.filter(hero => {
  return hero.Race === 'Hobbit';
})

console.log('---------------HOBBIT CHARACTERS---------------')
console.log(newCharacters);

//filter the characters with attack greater than 5
//also in terminal

let strongCharacters = characters.filter(hero => {
  return hero.Attack > 5;
})

console.log('---------------STRONG CHARACTERS---------------')
console.log(strongCharacters);