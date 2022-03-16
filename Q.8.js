// o/p nothing in output
//  why not working with variable see Q5.

new Promise((resolve, reject) => {
    resolve('Success!')
  })
  .then(() => {
    throw Error('Oh noes!')
  })
  .catch(error => {
    return "actually, that worked"
  })
  .catch(error => console.log(error.message))


// var pro= new Promise((resolve, reject) => {
//     resolve('Success!')
// })
// pro.then(() => {
//     throw Error('Oh noes!')
// })
// pro.catch(error => {
//     return "actually, that worked"
// })
// pro.catch(error => console.log(error.message))

