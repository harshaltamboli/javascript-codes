// find mehod

const number=[1,2,3,4,5,6,7,8,10];
const result =number.find((curElment)=>{
    return curElment>8
})
console.log(result);

// output:-10



// // find index
const numbers =[1,2,3,4,5,6,7,8,10];
const results =numbers.findIndex((curElment)=>{
    return curElment==6
})
console.log(results);

// output:- 5 index pe hai 6


 // filter method

 const Number=[1,2,3,4,5,6,7,8,10];
const Result =Number.filter((curElment)=>{
    return curElment!==5; 
})
console.log(Result);
