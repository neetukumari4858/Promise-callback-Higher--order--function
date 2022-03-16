// >>>>>callback in callback

// person_Ones=(callback)=>{
//     console.log("i am busy")
//     callback(10)
// }
// person_Ones(person_two=(a)=>{
//     console.log(a)
//     person_Ones(person_third=(b)=>{
//         console.log(b)
//     })
// })
// >>>>>>>>>>>>>>>>>>>>

// show1=(name,callback)=>{
//     console.log(name);
//     callback("kumari")
//   
// }
// show2=(surname)=>{
//     console.log(surname)
// }
// show1("neetu" ,show2)


// show1=(name,callback)=>{
//     console.log(`${name} ${callback("kumari")}`)
// }
// show2=(surname)=>{
//     console.log(surname)
// }
// show1("neetu" ,show2)

// setTimeout(show1=(a,b)=>{
//     console.log(a+b)
//     console.log("this is the sum of a ,b)")
// },2000,2,3)
// console.log("end")
// show2=(c)=>{
//     console.log(c)
// }
// show1(3,2,show2)
// console.log("end")



// error handling>>>>>>>>>..
// function async(cb){
//     cb(err,"This is data from sever");
// }
// async((err,data)=>{
//     if(err){
//         throw err
//     }else{
//         console.log("data",data)
//     }
// });
// >>>>>>>>>>>>>>>>>>>

const getroll=()=>{
    setTimeout(()=>{
        stu={
            name:"neetu",
            age:20,
            gender:'male'
        }
        console.log(`i am ${stu.name} my age is ${stu.age}`)
        let roll_no=[1,2,3,4,5]
        setTimeout((rollno)=>{
            console.log(`my rollno is ${rollno}`)
            setTimeout(()=>{
                console.log(`my gender is ${stu.gender}`)
            },2000)
        },2000,roll_no[1])
    },2000)
}
getroll();
