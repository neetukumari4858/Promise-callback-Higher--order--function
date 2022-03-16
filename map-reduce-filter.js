
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




// const arr=["good","lpg","bad"]
// const vowel="aeiou"
// const func=(value)=> {
//     // const chr=[...value];
//     const chr1=[...vowel].includes(value);


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

// const namelogger=name=>msg=>console.log(`${name} says, ${msg}`)
// namelogger("neetu")("hi")

//  shellow
// var person={name:"x",age:30,city:{name:"punjab"}};
// var p1=Object.assign({},person);
// var p1=person;
// person.name="w"
// console.log(p1)


// deep
// var p3=JSON.stringify(person);
// p3=JSON.parse(p3);
// p3.city.name = "delhi";
// console.log(p3,person)

// var person={name:"x",age:30};
// var p1=Object.assign({class:"5"},person);
// console.log(p1)



// const arr=[5,3,9,45,2]
// let max=0
// let l=[]
// for (i of arr){
//     if (i>max){
//         max=i
//     }
// }
// for (let i=0; i<max;i++){
//     if (arr.includes(i)){
//         l.push(i)
//     }
// }
// console.log(l)

// let name_list=[8,39,7,2,5];
// name_list.sort();
// console.log(name_list)




// intervie-------------------
// const a=[1,2,3,2,1,4,5,1,3]
// // result [1,2,3,4,5]
// const b=[]
// for (i of a){
//     if(!b.includes(i)){
//         b.push(i)
//     }
// }
// console.log(b)

// const a="sasaty"
// const b={}
// for (i of a){
//     let  c=0;
//     for (j of a){
//         if (j==i){
//             c=c+1
//         }
//     }
//     b[i]=c
// }
// console.log(b)



// var a=["a","b","c","d",]
// var b=[1,2,3,4]
// // result {a:1,b:2,c:3,d:4}
// var s={}
// var d=a.map((e,i)=>{
//     s[e]=b[i]
// })
// console.log(s)
// const d={}
// for (i of m){
//     for (j of n){
//         d[i]=j;
//         break;
        
//     }
// }
// console.log(d)
// result {a:1,b:2,c:3,d:4}

// {s:2,a:2,t:1,y:1}

// show(5)
// a=['s','a']
// a=['s','a']
// a=['s','a']
// a.length=0
// console.log(a)
// let a=" ";
// console.log(a)
// let age=[2,34,5,6,9];
// function check(age){
//     return age>=18;
// }
// let b=age.find(check);
// console.log(b)
