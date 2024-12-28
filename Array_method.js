// push method :- add last element

// let names=["harshal","Awais","Wasim","Jayesh","Chetan","Ritesh"];
// //names.push("Nayan","Darshan","Ganesh","Rakesh");
// console.log(names);

// pop method:- remove last element


// let names=["harshal","Awais","Wasim","Jayesh","Chetan","Ritesh"];
// names.pop();
// console.log(names);


//shift :- remove first element

// let names=["harshal","Awais","Wasim","Jayesh","Chetan","Ritesh"];
// names.shift();
// console.log(names);


// unshift :- add first element

// let names=["harshal","Awais","Wasim","Jayesh","Chetan","Ritesh"];
// names.unshift("Bhavesh");
// console.log(names);



// // slice: provide a slice 

// let names = ["harshal", "Awais", "Wasim", "Jayesh", "Chetan"];

// let slicedArray = names.slice(1, 4);
// console.log(slicedArray); // ["Awais", "Wasim", "Jayesh"]
// console.log(names); // ["harshal", "Awais", "Wasim", "Jayesh", "Chetan"] (original array unchanged)


// splice():- change orignal Array (add,remove,replace)

// syntax splice(startindex,delcount,newElm...)

let arr=[1,2,3,4,5,6,7,8,9,10,11,];

// add new element
arr.splice(2,0,101,102);
console.log(arr);

//delate

arr.splice(4,2);
console.log(arr);

//replace


arr.splice(4,1,103);
console.log(arr);
