const taxes = 14.975
const randomObject = {}
randomObject.userId = 5

// randomObject = {userId : 5} //This is bad !
//Creating a function that generates an error

const diminishTaxes = amount => {
  taxes -= amount
  console.log('The taxes are now :'+taxes)
}
//Avoiding a crash by using the try/catch method

try {
  diminishTaxes(2)
  texes = 0
} catch (error) {
  console.log('You have an error', error.name)
}
console.log('try catch complete !')

//Does it work on asynchronous functions ?

const diminishTaxesAsync = amount => {
  setTimeout(() => {
    taxes -= amount
    console.log('The taxes are now :' + taxes)
  }, 3000)
}

try {
  diminishTaxesAsync(2)
  texes = 0
} catch (error) {
  console.log('You have an error', error.name)
}
console.log('try catch complete !')


