Promise.resolve('Success!')
  .then(data => {
    return data.toUpperCase()
})
.then(data => {
  console.log(data)
  return data
})
.then(console.log)

// SUCCESS!
// SUCCESS!

// --why two time success