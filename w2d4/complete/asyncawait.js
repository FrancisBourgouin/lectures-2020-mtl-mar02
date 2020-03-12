//Reusing the same function as promises
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
    }, 3000)
  })
}

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

//Combining those functions using the async / await syntax

const userAndEmojiAsync = async () => {

  //Quick & Dirty with no error handling
  const userInfo = await getUserAsync(200)
  const userWithEmoji = await prependAnEmojiAsync('🤷‍', userInfo.name)

  console.log(userWithEmoji)

  //With error handling, traditional try/catch
  let userInfoAlt = null
  let userWithEmojiAlt = null

  try {
    userInfoAlt = await getUserAsync(200)
  } catch (error) {
    console.log('There was an error with getting the user info')
  }
  
  if (userInfoAlt) {
    try {
      userWithEmojiAlt = await prependAnEmojiAsync('🤷‍', userInfo.name)
    } catch (error) {
      console.log('There was an error with putting the emoji')
    }

    console.log(userWithEmojiAlt)
  }

}

userAndEmojiAsync()