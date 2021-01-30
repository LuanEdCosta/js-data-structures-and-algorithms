function printFibonacciEvenNumbersSum() {
  let first = 0,
    second = 1,
    next = 0,
    evenSum = 0

  for (let index = 0; next <= 4000000; index++) {
    if (index <= 1) {
      next = index
    } else {
      next = first + second
      first = second
      second = next
    }

    if (next % 2 === 0) {
      evenSum += next
    }
  }

  console.log('Even Sum: ', evenSum)
}

export function run() {
  printFibonacciEvenNumbersSum()
}
