function getTheLargestPrimeFactor(number: number): number {
  let numberAux = number
  let largestPrimeFactor = 0
  let counter = 2

  while (Math.sqrt(numberAux) > counter) {
    if (numberAux % counter === 0) {
      numberAux /= counter
    } else {
      counter += 1
    }
  }

  if (numberAux > largestPrimeFactor) {
    largestPrimeFactor = numberAux
  }

  return largestPrimeFactor
}

export function run() {
  console.log('Example: ', getTheLargestPrimeFactor(13195))
  console.log('Result: ', getTheLargestPrimeFactor(600851475143))
}
