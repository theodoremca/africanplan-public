
let firstName: string | number = "Theodore";
firstName = 30;
let isMale: boolean = false;
let user: Object = {
    name: "theodore",
    age: 25,
};

let gender :  "male" | "female" = "male";

gender = "male";

user = "theodore";



function getAge(yob:number) {
    return 2024-yob;
    // return 2024-yob
}

const getFullname = (firstName:string, lastName:string)=>{
    return firstName + " " + lastName;
}

const getDetails = (fullname:string, age:number)=>{

    return ` My name is ${fullname}, i am  ${age} Old`
}

const details = getDetails(getFullname("Theodore","HDS"), getAge(1882))

console.log(details);

interface User {
    name: string;
    age: number;
    isMale?: boolean;
    gender: "male" | "female";
}

type Person = {
    name: string;
    age: number;
    isMale?: boolean;
    gender: "male" | "female";
}

const introductionUser = (user: User) => {
    return `my name ${user.name} i  am ${user.age} years old, am also ${user.gender}(${user.isMale})`
}
const introduction = introductionUser(
    {
    name:"Theodore",
    age: 50,
    gender: "male"
   }
    );
console.log(introduction);











