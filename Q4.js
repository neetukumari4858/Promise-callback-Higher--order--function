// o/p -The Fails!
// The Fails!

// ---Why it printing two times
var p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
p.catch(error => console.log(error.message))
p.catch(error => console.log(error.message))


// 7
// Why one time fail in 0/p the fail

var p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
.catch(error => console.log(error.message))
.catch(error => console.log(error.message))
