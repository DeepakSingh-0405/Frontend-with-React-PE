// console.log("first")
// function wait(){
//     setTimeout(() => {
//         console.log("second")
//     }, 2000);
// }
// function sec(wait){
//     wait()
// }
// sec(wait)
// console.log("third")


//PROMISES
// let promise = new Promise((res,rej)=>{
//     let success = false
//     if(success){
//         res("promise resolved")
//     }else{
//         rej("promise rejected")
//     }
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })


//FETCH API
fetch("https://jsonplaceholder.typicode.com/posts")   
.then((response)=>{
    return response.json()
})
.then((data)=>{
    data.forEach(user => {
        console.log(`${user.userId}: ${user.title}`)
    });
})
.catch((error)=>{
    console.log(error)
})
