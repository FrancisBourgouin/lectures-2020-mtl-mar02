
//Reworking the user function to return a promise instead of a callback

const getUserAsync = statusCode => {
  const user = { name: 'Dimitri Ivanovich Mendeleiv', status: 'Badass' }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const status = statusCode
      if (status === 200) {
        resolve(user)
      } else {
        reject('error with our promise', status)
      }
    },3000)
  })
}

// getUserAsync(200)
//   .then(user => console.log(user))
//   .catch((errorMessage, status) => console.log(errorMessage, status))
//   .finally(() => console.log('getUserAsync complete'))

// getUserAsync(500)
//   .then(user => console.log(user))
//   .catch((errorMessage, status) => console.log(errorMessage, status))
//   .finally(() => console.log('getUserAsync complete'))

//Reworking the emoji function to return a promise instead of a callback

const prependAnEmojiAsync = (emoji, string) => {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        const output = `${emoji} - ${string}`
        resolve(output)
      } else {
        reject('error with emoji stuff')
      }
    }, 2000)
  })
}

// prependAnEmojiAsync('😂', 'Random string here')
//   .then(output => console.log(output))
//   .catch(error => console.log('error'))
//   .finally()

//Combining the two functions together

const getUserAndEmojiPromise = () => {
  getUserAsync(400)
    .then(userObj => prependAnEmojiAsync('🎂', userObj.name))
    .then(output => console.log(output))
    .catch(error => console.log(error))
    .finally(() => console.log('Callback hell averted'))
}

getUserAndEmojiPromise()