let marks=[78,56,89,91,47,56];
let sum=0;
let max=marks[0];
let small=marks[0];

for(let store of marks){
    sum += store;
    console.log(store);
    // console.log(sum);
    
    if(store>max){
       max =store
    }
    if(store<small){
        small=store
    }
}

console.log("total marks");
console.log(sum);
console.log("Average Marks ");
let avg= sum/marks.length;
console.log(avg);


console.log("maximum no in marks");
console.log(max);


console.log("smallest  no in marks");
console.log(small);


