//Implementing all possible DOM manipulation operations
console.log("DOM Manipulation Operations :")

//Accessing elements from DOM
let h1 = document.getElementById("head1")
// console.log(h1)
let para = document.querySelector(".para1")
// console.log(para)

//---------------------------------------------------------------------------------------------------------------------------

//Assigning Dynamic Content
h1.textContent="DOM"
para.textContent="This is the para that is dynamically given through JS"

//---------------------------------------------------------------------------------------------------------------------------

//Event Handling
//By clicking on button an event is occured we add event listener
let btn1 = document.querySelector(".btn1")
// console.log(btn)
//Now adding event listner
btn1.addEventListener('click',()=>{
    console.log("Button is clicked")
})

btn1.addEventListener('click',()=>{
    //changing content
    h1.textContent = 'Event Handling'
    para.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga laudantium ipsa ipsum.'
    //changing style
    h1.style.backgroundColor = 'black'
    h1.style.color = 'white'
    para.style.backgroundColor = 'pink'
})

//---------------------------------------------------------------------------------------------------------------------------

//Reading Values from Inputs
let input = document.querySelector("#name")
// console.log(input)
let btn2 = document.querySelector(".btn2")
let display = document.querySelector(".display")
btn2.addEventListener("click",()=>{
    console.log(input.value)
    display.textContent = input.value
})

//---------------------------------------------------------------------------------------------------------------------------

let content = document.querySelector(".content")
//Creating Elements
let arr = [10,20,30,50,45]

for(let v of arr){

    //Create a New Element
    let h3 = document.createElement("h3")
    //Provide Content to that element 
    h3.textContent = v;
    //style
    h3.style.color = "violet"
    //Add to DOM
    content.appendChild(h3)
}

//---------------------------------------------------------------------------------------------------------------------------

//Remove an element
// para.remove()

//---------------------------------------------------------------------------------------------------------------------------

//creating a simple calculator
let input1 = document.querySelector("#first")
// console.log(input1)
let input2 = document.querySelector("#second")
// console.log(input2)

//Add Btn
let addbtn = document.querySelector("#add")
let result = document.querySelector(".result")
addbtn.addEventListener('click',()=>{
    let s1 = input1.value;
    let s2 = input2.value;
    let sum = (+s1) + (+s2) ;
    result.textContent = sum;
    console.log("Sum is : ",sum)
})

//Sub Btn
let subbtn = document.querySelector("#sub")
subbtn.addEventListener('click',()=>{
    let s1 = input1.value;
    let s2 = input2.value;
    let sub = (+s1) - (+s2) ;
    result.textContent = sub;
    // console.log("Diff is : ",sub)
})

//Mul Btn
let mulbtn = document.querySelector("#mul")
mulbtn.addEventListener('click',()=>{
    let s1 = input1.value;
    let s2 = input2.value;
    let mul = (+s1) * (+s2) ;
    result.textContent = mul;
    // console.log("Mul is : ",mul)
})

//Div Btn
let divbtn = document.querySelector("#div")
divbtn.addEventListener('click',()=>{
    let s1 = input1.value;
    let s2 = input2.value;
    let div = (+s1) / (+s2) ;
    result.textContent = div;
    // console.log("Div is : ",div)
})