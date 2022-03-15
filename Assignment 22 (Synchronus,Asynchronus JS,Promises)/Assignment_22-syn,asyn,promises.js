// //Implementing Real World Promises 
console.log("Implementing real world promises") 
setTimeout(() => {
    console.log("1st promise - 'I will meet you tomorrow'")
}, 1000);

let iAmFree = true;

let meetTomorrow = new Promise((fulfilled,rejected)=>{

    if(iAmFree==true){
        setTimeout(() => {
            fulfilled("We will meet at our regular meeting place")
        }, 3000);
    }

    else{
        setTimeout(() => {
            rejected("I am little buzy we ll catch up some other time")
        }, 3000);
    }
})

meetTomorrow
.then((message)=>{console.log("Message is :",message)})
.catch((error)=>{console.log("Error is :",error)})

setTimeout(() => {
    console.log("---------------------------------------------------------")
}, 3000);

setTimeout(() => {
    console.log("2nd promise - 'I will pay you back in one month'")
}, 5000);

let iDontHaveMoney=true;

let returnMoney = new Promise((fulfilled,rejected)=>{

    if(iDontHaveMoney==false){
        setTimeout(() => {
            fulfilled("Should i pay through ol or can i give it through cash")
        }, 8000);
    }

    else{
        setTimeout(() => {
            rejected("I need some more time plz!!...")
        }, 8000);
    }
})

returnMoney
.then((message)=>{console.log("Message is : ",message)})
.catch((error)=>{console.log("Error is :",error)})

setTimeout(() => {
    console.log("---------------------------------------------------------")
}, 8000);

setTimeout(() => {
    console.log("3rd promise - 'I will marry you'")
}, 10000);

let letsMarry=true;

let loveMarriage = new Promise((fulfilled,rejected)=>{

    if(letsMarry==true){
        setTimeout(() => {
            fulfilled("We ll make a destination marriage")
        }, 13000);
    }
    else{
        setTimeout(() => {
            rejected("Lets breakup")
        }, 13000);
    }
})

loveMarriage
.then((message)=>{console.log("Message is : ",message)})
.catch((error)=>{console.log("Error is : ",error)})

setTimeout(() => {
    console.log("---------------------------------------------------------")
}, 13000);

setTimeout(() => {
    console.log("Implementing Timer Functions")
}, 14000);

setTimeout(() => {
    console.log("1st Timer Function ex. is Metro train in HYD.")
}, 15000);

setTimeout(() => {
    console.log("Welcome to red line")
    setTimeout(() => {
        console.log("we r strtng frm lb nagar")
    }, 1000);

}, 16000);

setTimeout(() => {
    console.log("next station victoria memorial")
}, 20000);

setTimeout(() => {
    console.log("we have reached 2nd station ie.victoria memorial")
    setTimeout(() => {
        console.log("if any one wants to change to blue line plz step down here")
    }, 1000);

}, 24000);

setTimeout(() => {
    console.log("next station dilshuknagar")
}, 28000);

setTimeout(() => {
    console.log("we have reached 3rd station i.e dilshuknagar")
    setTimeout(() => {
        console.log("if any one wants to change to green line plz step down here")
    }, 1000);

}, 31000);

setTimeout(() => {
    console.log("---------------------------------------------------------")
}, 33000);

setTimeout(() => {
    console.log("2nd Timer Function wx. is Restaurant Waiter")
}, 34000);

setTimeout(() => {
    console.log("customer - 1 ordered Giant Non-Veg Pizza")
}, 35000);

setTimeout(() => {
    console.log("customer - 1 received Giant Non-Veg Pizza")
}, 45000);

setTimeout(() => {
    console.log("customer - 2 ordered Milk Shake")
}, 36000);

setTimeout(() => {
    console.log("customer - 2 received Milk Shake")
}, 39000);

setTimeout(() => {
    console.log("customer - 3 ordered Desert")
}, 37000);

setTimeout(() => {
    console.log("customer - 3 received Desert")
}, 42000);