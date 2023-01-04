console.log('work')

class Person {
  #vozrast // <-- приватное поле. К нему нельзя обратиться напрямую

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greeting() { // <-- это обычный метод
    console.log(`Hello from ${this.name}`)
  }

  getAge(pinCode) { // <-- это обычный метод
    if (pinCode === 1234) return this.#vozrast
    return `Permission denied` 
  }

  get age() { // <-- это getter
    return this.#vozrast
  }

  set age(newAge) { // <-- это setter
    if (newAge >= 0 && newAge <= 100 && typeof newAge === 'number') {
      this.#vozrast = newAge
    } 
  }
}

console.log(`Class Person is: ${typeof Person}`)

const tom = new Person('Tom', 23)

