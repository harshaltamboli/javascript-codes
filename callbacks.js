//****  syncronous callback example  ********
 


// function sum(a,b){
//     console.log(a+b);

// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
    
// }
// calculator(3,5,sum);


// <<<<<  Asyncronous callback example  >>>>

//     setTimeout(()=>{
//         console.log("hello");
        
//     },3000);


// console.log("one");


// 2

console.log("first line");

const helo=()=>{

    
    console.log(" this is a secound way in decleration in Asyncronus ");
    
};
setTimeout(helo,4000);