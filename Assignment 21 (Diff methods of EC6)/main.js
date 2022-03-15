//Rest Parameter
console.log('Implementing the function that recieve any no.of numbers as args and return big number among them')
function bigNumber(...a) {
    let big=a.reduce((acc,element)=>acc>element? acc:element)

    console.log('Big one is',big)}

bigNumber(10,20,30,40)

console.log("--------------------------------------------------------------------------")

//Spread syntax
console.log("Merging 2 Objects")
//Object 1
let obj1 = {
    id : 1,
    no : 1028
}

//object 2
let obj2 = {
    id : 2,
    no : 1789
}

//Merging 2 objects of same key names

let mergeObjs={...obj1,...obj2}

console.log(mergeObjs)

//Merging 2 objects of diff key names
console.log("Merging 2 Objects of diff. key names")
//Object 1
let objs1 = {
    id : 1,
    no : 1028
}

//object 2
let objs2 = {
    id1: 2,
    no1: 1789
}

//Merging 2 objects of same key names

let mergedObjs={...objs1,...objs2}

console.log(mergedObjs)

console.log("--------------------------------------------------------------------------")

console.log("Using Modues Importing and Exporting to Main ")
//Importing student class from module 1 (Method 1)
import Student from "./module1.js"

//creating objs for student class
let student1 = new Student(1,'kiran','B4')
student1.studentData()
let student2 = new Student(2,'USK','D9')
student2.studentData()


//importng employee class from module 2 (Method 2)
import {Employee} from "./module2.js"

//creating objs for employee class
let employee1 = new Employee(1091,'kishore',20000)
employee1.employeeData()
let employee2 = new Employee(1902,"hareesh",30000)
employee2.employeeData()

console.log("--------------------------------------------------------------------------")