class Emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const emp = new Emp("Aman", "25 years");
const mmp = new Emp("Harshal","21");
console.log(emp.name); // Aman
console.log(emp.age);  // 25 years
console.log(mmp.name);
console.log(mmp.age);