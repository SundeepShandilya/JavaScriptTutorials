const name="Sundeep";
const repoCount=60
console.log(name + repoCount);
//This is not at all a good way of using string in Projects.


//We will use STring Interpolation

console.log(`My name is ${name} and I have ${repoCount} repo Count `);

const gameName = new String("Sundeep")
console.log(gameName.__proto__)

console.log(gameName[0])
console.log(gameName.toUpperCase);

console.log(gameName.charAt(6))
console.log(gameName.indexOf('e'))


console.log(gameName.substring(0,5));
console.log(gameName.slice(0,5));



let str="   happpy   ";
console.log(str.trim())

console.log(str.replace("p","-"));

console.log(str.includes('pp'));