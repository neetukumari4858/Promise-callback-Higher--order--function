// / why error
// undefined
var p = new Promise((resolve, reject) => {
    reject(Error('The Fails!'))
})
p.then(error1 => console.log(error1))
p.catch(error => console.log(error))
