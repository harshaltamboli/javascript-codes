console.log("one");
console.log("two");
console.log("three");

setTimeout(()=>{
    console.log("iteam waiting");
    
},4000);

console.log("four");
console.log("five");

setTimeout(()=>{
    console.log("iteam before waiting");
    
},5000);