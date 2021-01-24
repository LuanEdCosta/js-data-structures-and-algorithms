import { HashMap } from './HashMap.js'

export function runTests() {
  const hashMap = new HashMap<number>(10)

  hashMap.set('firstKey', 1)
  hashMap.set('secondKey', 2)
  hashMap.set('thirdKey', 3)
  hashMap.set('fourthKey', 4)

  hashMap.set('firstKey', 100)

  console.log(hashMap.delete('secondKey'))

  console.log(hashMap.has('secondKey'))
  console.log(hashMap.has('thirdKey'))
  console.log(hashMap.get('secondKey'))
  console.log(hashMap.get('thirdKey'))

  console.log(hashMap.getKeys())
  console.log(hashMap.getValues())
  console.log(hashMap.toObjectArray())

  console.log(JSON.stringify(hashMap))
}
