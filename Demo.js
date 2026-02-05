// // {var a=3,b=2}
// // console.log(a+b);
// let str="hello";
// let isok=true;
// let arr=[1,2,3];
// let obj={name:"dennis",age:20};
// let empty=null;
// let b;
// console.log(typeof(str),typeof(isok),typeof(arr),typeof(obj),typeof(empty),typeof(b));


// for(let i=0;i<5;i++){
//     console.log(i);
// }


// let i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// arr.forEach((i)=>{
//     console.log(i);
// })

// let j=0;
// do {
//     console.log(j);
//     j++;
// } while (j<5);

let arr = [1,2,3,4,5,6]

function printeven(arr){
    arr.forEach((e)=>{
        if(e%2===0) console.log(e);
        
    }) 
}
const printodd = (arr)=>{
    arr.forEach((e)=>{
        if(e%2!==0) console.log(e);
    }) 
    
}
printeven(arr)
console.log("...........");
printodd(arr)
console.log("...........");


const sales = "toyota"
function type(name){
    return name==="honda"?name:"sorry"
}
const car = {
    mycar: "ford",
    getcar: type("honnda"),
    special: sales
}
// console.log(car.mycar);
// console.log(car.getcar)
// console.log(car.special)

for(const key in car){
    // console.log(`${key} : ${car[key]}`);
}
const arr1 = [10,20,30,40]
for(const index in arr1){
    // console.log(index);
}

const str = "hello world"
let count=0;
for(const char of str){
    const vowel = ["a","e","i","o","u"]
    if(vowel.includes(char)){
        count=count+1;
    }
}
console.log(count);

const color = ["red","blue"]
for(const [i,c] of color.entries()){
    console.log(i,c);
    
}
