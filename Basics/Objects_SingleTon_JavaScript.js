//SingleTon
//Object.create
// const User= new Object(); //SingleTon Objects

const User2 = {}; //Non-SingleTon Objects


// console.log(User);//Same Output
// console.log(User2);//Same Output

User2.email="sush22ec@gmail.com";
User2.location="Bangalore";

// console.log(User2)

const User={
    UserFullName:{
        firstName:"Sundeep",
        lastName:"Shandilya"

    },
    Age:20,
    Location:"Bangalore"
}
console.log(User.UserFullName.firstName);

const obj3={...User,...User2};

console.log(obj3);
