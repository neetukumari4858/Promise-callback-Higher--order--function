<!-- Neog Exercise -->

// strLength=(name,callback)=>{
//     let length_name=name.length
//     callback(length_name)
// }
// lengthOfString=(chr_Length)=>console.log(`OMG! my name is ${chr_Length} char long!`)
// strLength("neetu",lengthOfString)


// killme=(name,success,failure)=>{
//     let length_of_name=name.length;
//     if (length_of_name%2===0){
//         success()
//     }else{
//         failure()
//     }
// }
// success=()=>{
//     console.log("hey I live")
// }
// failure=()=>{
//     console.log(" you will die")
// }
// killme("ne",success,failure)

// setTimeout(() => console.log('A'), 0)
// setTimeout(() => console.log('C'), 0)
// setTimeout(() => console.log('B'), 0)

// console.log('A')
// setTimeout(() => console.log('B'),0)
// console.log('C')


// setTimeout(() => console.log('A'), 1000)
// setTimeout(() => console.log('B'), 400)
// setTimeout(() => console.log('C'), 1300)

// show=(num)=>{
//     const id=setInterval(()=>{
//         if (num===0){
//             console.log("bang bang")
//             clearInterval(id);

//         }else{
//             console.log(num)
//             num-=1
//         }
//     },2000)
// }

// Que
// const arr=[1,3,5,2,22,11,9];
// const Sum_of_odd=arr.reduce((acc,curr)=>(curr%2===0)? acc :acc+curr
// ,0)
// console.log(Sum_of_odd)

// const arr=[1,3,5,2,22,11,9];

// const Sum_of_odd=(obj,curr)=> curr%2===0 ?{...obj,Even:obj.Even+curr}:{...obj,Odd:obj.Odd+curr};
// const obj={Even:0,Odd:0};
// const output=arr.reduce(Sum_of_odd,obj)
// console.log(output)


//  2 Que
// const arr=[2,3,4,6,5]
// const odd_index=(acc,curr)=>{acc%2===0 ? :arr[acc]+curr ,acc=acc+1
// const output=arr.reduce(odd_index,0)


// const arr=[2,3,4,6,5]
// const odd_index=(acc,curr)=>{
//     let  a=0
//     if (acc%2!==0){
//       a=a+arr[acc]
//       return a
//     }
//     acc=acc+1;
// }
// const output=arr.reduce(odd_index,0)
// console.log(output)

// 3 Que

// const arr=[2,4,65,95,3,6]
// const max_num=(max,curr)=> {curr < max ? max : max = curr; return max;}
// const output=arr.reduce(max_num,0)
// console.log(output)

// Que4

// const arr=[20,45,50,4,8];
// const Divisable_ten=(num)=>num%10===0;
// const output =arr.filter(Divisable_ten)
// console.log(output)

// 5
// const arr=[2,3,4,5,6,7]
// const new_arr=(value)=> value%2===0 ? value+1 :value-1;
// const output=arr.map(new_arr)
// console.log(output)

// 6

// const arr=[2,3,4,5,6,7]
// const fun=(obj,curr)=> curr%2===0 ?{...obj,Even:obj.Even+curr}:{...obj,Odd:obj.Odd+curr} 
// const obj={Even:0,Odd:0}
// const output=arr.reduce(fun,obj)
// console.log(output);

// 7 not completed

// const arr=["apple","mango","banana",]
// const fun=(obj,curr)=>curr.length===5 ? {...obj,5:obj.5+1} :{...obj,6:obj.6+1}
// const obj={5:0,6:0}
// const output=arr.reduce(fun,obj)

// 8 not completed
// const arr=["good","lpg","bad"]
// const func=(value)=> value.includes("a" || "e" || "i" ||"o" || "u") ? value :"";
// const output=arr.filter(func)
// console.log(output)

// 9 not completed
// const arr=["apple","banana","orange","cherry"]
// const func=(value)=>{value:value.length}
// const output=arr.map(func);
// console.log(output);

<!-- practice Exercise -->


// Que 1
// const arr=[1,3,5,2,22,11,9];
// const Sum_of_odd=arr.reduce((acc,curr)=>(curr%2===0)? acc :acc+curr
// ,0)
// console.log(Sum_of_odd)
// const arr=[1,3,5,2,22,11,9];

// Que (1)(2)

// const Sum_of_odd=(obj,curr)=> curr%2===0 ?{...obj,Even:obj.Even+curr}:{...obj,Odd:obj.Odd+curr};
// const obj={Even:0,Odd:0};
// const output=arr.reduce(Sum_of_odd,obj)
// console.log(output)


//  2 Que

// const arr=[2,3,4,6,5]
// const odd_index=(acc,curr)=>arr.indexOf(curr)%2===0?acc: acc+=curr;
// const output =arr.reduce(odd_index,0)
// console.log(output)



// 3 Que

// const arr=[2,4,65,95,3,6]
// const max_num=(max,curr)=> {curr < max ? max : max = curr; return max;}
// const output=arr.reduce(max_num,0)
// console.log(output)

// Que4

// const arr=[20,45,50,4,8];
// const Divisable_ten=(num)=>num%10===0;
// const output =arr.filter(Divisable_ten)
// console.log(output)

// 5
// const arr=[2,3,4,5,6,7]
// const new_arr=(value)=> value%2===0 ? value+1 :value-1;
// const output=arr.map(new_arr)
// console.log(output)

// 6

// const arr=[2,3,4,5,6,7]
// const fun=(obj,curr)=> curr%2===0 ?{...obj,Even:obj.Even+curr}:{...obj,Odd:obj.Odd+curr} 
// const obj={Even:0,Odd:0}
// const output=arr.reduce(fun,obj)
// console.log(output);

// 7 

// const arr=["apple","mango","banana",]
// const fun=(obj,curr)=> obj.hasOwnProperty(curr.length) ? {...obj, [curr.length]: obj[curr.length]+1 } : {...obj,[curr.length]:1}
// const output=arr.reduce(fun,{})
// console.log(output);


// 8 not completed

// const arr=["good","lpg","bad"]
// const vowel="aeiou"
// const func=(value)=> {

//     const chr=[...value];
//     chr.map()
//     [...vowel].includes(chr)

// };
// const output=arr.filter(func)
// console.log(output)



// const arr=["good","bad","lpg"]
// const vowels=["a","e","i","o","u","A","E","I","O","U"]
// const output=arr.filter((value)=>{
//     let charArray=value.split("");//["g","o"]
//     for(let i=0;i<charArray.length;i++){
//         if(vowels.includes(charArray[i])){
//             return value;
//         };
//     }
// })
// console.log(output)

// 9 

// const arr=["apple","banana","orange","cherry"]
// const func=(value)=>({[value]:value.length});
// const output=arr.map(func);
// console.log(output);

// o/p- [{"apple":5},{"banana":6},{"orange":6},{"cherry":6}]







