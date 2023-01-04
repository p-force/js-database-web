class Child {
  constructor(person) {
    this.person = person;
  }

  getPname() {
    console.log(this.person.getName());
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const per = new Person("Anna");
const child = new Child(per);

child.getPname();