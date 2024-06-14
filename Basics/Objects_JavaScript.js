//SingleTon


//Object Literals
const mySym = Symbol("Key1");//Sysmbol cannot be used directly in Java Script Object

const jsObject={
    name:"Sundeep",
    "full name": "Sundeep Shandilya",
    [mySym]:"myKey1",//Symbols can only be defined in this way in Javascript
    age:20,
    location:"Jamshedpur",
    email:"abc@bgy.com",
    status:true
};
console.log(jsObject.email);
console.log(jsObject["full name"]);
console.log(jsObject[mySym]);//Objects can only be accessed in this way from Objects

jsObject.email="sm@gmail.com";//Way of Changing Object

Object.freeze(jsObject);//Object cannot be change after this

console.log(jsObject);

jsObject.greetings= function(){
    console.log("Hello User")
}

console.log(jsObject.greetings);
console.log(jsObject.greetings());

jsObject.greetings2 = function(){
    console.log(`Hello User,${this["full name"]}`);//String Interpolation
}
console.log(jsObject.greetings2());

