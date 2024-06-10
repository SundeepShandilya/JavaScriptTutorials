//Arrays
// const myArray=[0,1,2,3,4]
// console.log(myArray)

// const myArr= new Array(1,2,3,4,5)
// console.log(myArray)
// console.log(typeof myArray)

//Methods Of Array
// myArray.push(6);//Add Element into Array
// console.log(myArray)

// myArray.pop();//Removes the last value from Array
// myArray.unshift(9)//Add values at first index after shifting other elements
// myArray.shift()//Removes the unshifted values

// console.log(myArray.includes(9))//Check if value is there or not...Returns Boolean

// console.log(myArray.indexOf(7))//Gives Index of value

// myArray.join()//Its Binds and Changes result to string

// console.log(myArray)

// //Slice and Splice
// console.log("A ",myArray)

// const myn1=myArray.slice(1,4)//This Function includes first value(say 1) and ignores last(say 4).It doesn't change the original Array by any chance like splice.
// console.log("B ", myn1)
// console.log("C ",myArray)


// //Splice
// const myn2=myArray.splice(1,4)//This Function includes first and last value(say 1 and 4).It changes the original Array unlike slice.
// console.log("D ", myn2)
// console.log("E ",myArray)


//Arrays_02
const marvel_heroes=["Iron Man", "Doctor Strange" , "Thor"];
const dc_Heroes=["Super Man","Flash","Bat Man"];
const new_Heroes=marvel_heroes.concat(dc_Heroes);
console.log(new_Heroes)

//Spread Operator
const Heroes=[...marvel_heroes,...dc_Heroes,...new_Heroes]
console.log(Heroes)

Array.from()//Conversion into Array
Array.of()//Conversion into Array
Array.flat(Infinity)//Removes subarray in array