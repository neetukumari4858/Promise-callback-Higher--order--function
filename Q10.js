Promise.resolve('Success!')
  .then(() => {
    throw Error('Oh noes!')
  })
  .catch(error => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    return 'actually, that worked'
  })
  .then(data => {
    throw Error('The fails!')
  })
  .catch(error => console.log(error.message))

//   The fails!
// because resolve have parameter so second then will work 