const writeToTheLog = number => {
  return 5
}

console.log(writeToTheLog(5))


const writeToTheLogMaybe = number => {
  return () => {
    console.log(number)
  }
}
// Returns :
// () => {
//     console.log(50)
//   }

console.log(writeToTheLogMaybe(50))


const writeFifty = writeToTheLogMaybe(50)
const writeTwo = writeToTheLogMaybe(2)
// writeFifty = () => {
//   console.log(50)
// }

// writeFifty()
// writeTwo()

const customLiftOff = time => {
  for (let i = time; i >= 0; i--) {
    if (i !== 0) {
      console.log(`${i}...`)
    } else {
      console.log('Liftoff !')
    }
  }

}

customLiftOff(10)
customLiftOff(5)

const createCustomLiftOff = time => {
  //Creating my custom function
  const liftOffFct = () => {
    for (let i = time; i >= 0; i--) {
      if (i !== 0) {
        console.log(`${i}...`)
      } else {
        console.log('Liftoff !')
      }
    }
  }

  return liftOffFct
}

const quickLiftOff = createCustomLiftOff(5)
const longLiftOff = createCustomLiftOff(10)


longLiftOff()