const user={
    userName: "Sundeep",
    price: 999,
    message: function() {
        console.log(`${this.userName},Welcome to the Kingdom` )

    }
}

user.message();

// this function will not work with Function. It Generally Works with Objects Only.
const chai = () => {
    userName:"Sundeep",
    console.log(this)
}

chai()

const add= (num1,num2) => (num1+num2);  //Implicit Function 

console.log(add(5,7));

//Global Pollution Sometimes Creates a Problem in a Function, So to remove those Pollution from the function, we use iffe

(function chai2(){    // Thid is the Name IIFE
    console.log(`GoodMorning GokulDham`);
})();  // SemiColon(;) is must with Iffe Function for Execution


((name) => {   //This is the Unnamed IIFE
    console.log(`This is the Exam ${name}`)
})('Sundeep')


