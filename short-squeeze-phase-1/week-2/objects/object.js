const emptyObj = {}

const obj = {
  key1: 'first string', // <-- Обрати внимание на название ключа
  key2: 3,
  key3: true,
  key4: [1, 2, 3],
  key5: {
    subKey1: null,
  },
  myFunc() {
    console.log('This is function')
  },
  'key 6': 'key with space symbol',
  key1: 'last string', // <-- Обрати внимание на название ключаl
  // longLongConstVariable: 200000,
}

const longLongConstVariable = 'key1'

// console.log({ log1: obj })

// console.log({ log2: obj.longLongConstVariable })

// console.log({ log3: obj[longLongConstVariable] })

// console.log({ log4: obj['key 6'] })

console.log('key1' in obj)

delete obj.key1 // удаление свойства из объекта
// console.log({ log1: obj })

console.log('key1' in obj)
