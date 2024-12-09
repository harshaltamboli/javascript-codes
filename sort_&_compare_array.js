
let sorts=[1,2,4,3,4,8,5,7,9,6];

sorts.sort();
console.log(sorts);


// reduce method 
const productprice=[100,200,300,400,500];

const totalprice=productprice.reduce((accum,cureE)  => {
return accum+cureE;
},0)

console.log(totalprice);
