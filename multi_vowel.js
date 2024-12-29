
function vowell(str){

    let acount=0;
    let ecount=0;
    let icount=0;
    let ocount=0;
    let ucount=0;
    for( const char of str){
        if(char=== "a")acount++
        if(char=== "e")ecount++
        if(char=== "i")icount++
        if(char=== "o")ocount++
        if(char=== "u")ucount++
       
        
    }
    console.log("a is ",acount);
    console.log("e is ",ecount);
     console.log("i is ",icount);
     console.log("o is ",ocount);
     console.log("u is ",ucount);
}
vowell("my name: harshal Chunilal Tamboli"+
    "College name : imrd college shadaha"+
    "address: at post ranala tel and dis nandurbar");