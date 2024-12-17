const calculator=(a,b,operation)=>{
    return operation(a,b);
};

// method 1

const add=calculator(3,4,function(num1,num2){
    return num1+num2;
});
console.log(add);

// method 2 
const sub =calculator(5,3,function(sub1,sub2){
    return sub1-sub2;
});

console.log(sub);
