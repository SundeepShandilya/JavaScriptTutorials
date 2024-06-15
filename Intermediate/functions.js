function Greetings(){
    console.log("H");
    console.log("E");
    console.log("Y");
}
Greetings()

// function addTwoNumbers(num1 , num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1, num2){
    let result=num1+num2;
    return result;

}
function loginUserName(userName){
    return `${userName} logged In.`
}
console.log(loginUserName("Sundeep"))

// const n=addTwoNumbers(7,9)
function calculatePrice(val1,val2,...num){
    return num
}
console.log(calculatePrice(200,400,500,700,9000));

const User={
    user :"Sundeep",
    prices : 199
}

function handleObject(anyObject){
    console.log(`My name is ${anyObject.user} and price is ${anyObject.prices}`)
}

handleObject(User)