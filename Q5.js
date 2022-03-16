// o/p --The Fails!
// The Fails!

// -- How it understand error.msg
var p = new Promise((resolve, reject) => {
    return reject(Error('The Fails!'))
})
p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))


// o/p --The Fails
var p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
.catch(error => console.log(error.message))
.catch(error => console.log(error.message))