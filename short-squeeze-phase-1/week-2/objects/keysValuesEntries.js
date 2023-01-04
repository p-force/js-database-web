const person = {
  name: 'Person name here',
  age: 100,
  greeting() {
    console.log('Hi everyone')
  },
  _secret: 'some secret info here',
  _another: 225,
}

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log({ key, value: person[key] })
  }
}
console.log('========================')

// console.log(Object.keys(person))

// Object.keys(person).forEach((key) => {
//   console.log({ key, value: person[key] })
// })

// console.log('========================')

// Object.values(person).forEach((value) => {
//   console.log({ value })
// })

// console.log('========================')

// console.log(Object.entries(person))

Object.entries(person).forEach((entry) => {
  console.log({ entry })
})
