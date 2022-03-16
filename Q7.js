// 7
// Why one time fail in 0/p the fail

var p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
.catch(error => console.log(error.message))
.catch(error => console.log(error.message))