// const promiseObj=new Promise((resolve,reject)=>{
//     let req=false
//     if (req==true){
//         resolve("request success");
//     }else{
//         reject("request rejected");
//     }
// }).then(
//     (value)=>{
//         console.log(value);
//     },
//     (error)=>{
//         console.log(error);
//     }
// );

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('foo');
//     }, 300);
// });
// myPromise.then(
//     (value)=>{
//         console.log(value)
//     })
// console.log("end")

function getname(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("inside name")
            resolve(name);
        },2000)
    })
}
function gethobbies(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("inside hobbies")
            resolve(["reading","singing"]);
        },1000)
    })
}
getname("archana")
.then(nm=>gethobbies(nm))
.then(hobby=>console.log("hobby"))  
console.log("end")