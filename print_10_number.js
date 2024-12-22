// Create an array of numbers from 1 to 10. Print only the even numbers

let arrays=[];
 for(let i=1;i<10;i++){
 arrays.push(i);
 }
 for(let i=0;i<arrays.length;i++){
    if(arrays [i] %2===0){
        console.log("number is even",arrays[i]);
    } else{
        console.log("number is odd",arrays[i]);
        
    }
 }

