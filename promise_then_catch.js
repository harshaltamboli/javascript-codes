let p =new Promise((resolve,reject)=>{

    console.log("promis is a pending");
    setTimeout(()=>{
       
        resolve(true)
       
         reject(new Error("i am eroor"))
        
    },5000)
    
    
    
    })
    
 
    
    let p1 =new Promise((resolve,reject)=>{
    
        console.log("promis is a pending");
        setTimeout(()=>{
            
           
             reject(new Error("i am eroor"))
            
        },5000)
        
        
        
        })
    
        p.then((value)=>{
            console.log(value);
            
        });
        p1.catch((error)=>{
            console.log("sorry i am issue ");
            
        })
    
    console.log(p,p1);
    