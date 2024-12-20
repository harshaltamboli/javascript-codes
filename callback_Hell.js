
// simple example in data accessing input data     
// function getDeta(dataId){

//     setTimeout(()=>{
//         console.log("data",dataId);
        
//     },3000);
// }



function getDeta(dataId,getNextData){

    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData()
        }
        
        
    },3000);
}

getDeta(1,()=>{
    getDeta(2,()=>{
    getDeta(3,()=>{
        getDeta(4);
    
    
        
    })
    })
});

