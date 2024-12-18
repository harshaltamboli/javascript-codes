let p =new Promise((resolve,reject)=>{

console.log("promis is a pending");
setTimeout(()=>{
    console.log("i am a promis and i am fulfill");
   
    resolve(true)
   
   //  reject(new Error("i am eroor"))
    
},5000)



})

// rejected promise 

let p1 =new Promise((resolve,reject)=>{

    console.log("promis is a pending");
    setTimeout(()=>{
        console.log("i am a promis and i am Rejected");
       
       // resolve(true)
       
         reject(new Error("i am eroor"))
        
    },5000)
    
    
    
    })

console.log(p,p1);
