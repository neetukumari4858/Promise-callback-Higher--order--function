// den levy Quiz

function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}
let promise = job();
promise
.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
})
.catch(function() {
    console.log('Error 1');
})
// o/p Error 1
// Success 4   



// ---Why succes 4 is in o/p we did'nt call resolve function .
