import { numberArray } from './Array.js'

export function runTests() {
  // Accessing with the index
  // Complexity O(n)
  console.log(numberArray[0])
  console.log(numberArray[1])
  console.log(numberArray[2])

  // Adding at the end of the array
  numberArray.push(16)
  numberArray.push(17)
  console.log(numberArray)

  // Removing from the end of the array
  numberArray.pop()
  console.log(numberArray)

  // Adding at the beginning of the array
  numberArray.unshift(9)
  console.log(numberArray)

  // Removing from the beginning of the array
  numberArray.shift()
  console.log(numberArray)

  // Adding in specific index
  numberArray.splice(3, 0, 50, 60, 70)
  console.log(numberArray)

  // Removing from specific index
  numberArray.splice(3, 3)
  console.log(numberArray)
}
