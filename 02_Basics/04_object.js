// const tinderuser = new object(); singleton object
tinderUser = {} //non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sanju";
// console.log(tinderUser);

const user = {
    id : "123abc",
    fullName : {
        firstName : "sanju",
        lastName : "parmar"
    }
}

// console.log(user);

const obj1 = {a:'1',b:'2'};
const obj2 = {c:'1',d:'2'};
// const obj3 = Object.assign({},obj1,obj2); // it will merge the two object and return new object
// console.log(obj3);

const obj3 = {...obj1,...obj2}; // spread operator 
// console.log(obj3); // { a: '1', b: '2', c: '1', d: '2' }

const dbuser = [
    {
        id : "123abc",
        email : "sanju@example.com"
    },
    {
        id : "123abc",
        email : "sanju@example.com"
    },{
        id : "123abc",
        email : "sanju@example.com"
    },{
        id : "123abc",
        email : "sanju@example.com"
    },
]
// dbuser[1].email; // aceessing email of second user
// console.log(Object.keys(tinderUser)); // [ 'id', 'name' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'sanju' ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'sanju' ] ]


// desctructuring of object
const course = {
    courseName : "js in hindi",
    price : "999",
    instructor : "hitesh"
}

const {courseName : name} = course;
console.log(name);

// const navbar = ({company}) => { here we use destructuring so we don't need to write props.company

// }

// export default navbar;

// +++++ JSON +++++

{
    "courseName ": "js in hindi", 
    "price" : "999",
    "instructor" : "hitesh"
}

// this is called JSON (JavaScript Object Notation) and it is used to exchange data between server and client. It is a string format and it is not a javascript object. We can convert JSON to javascript object using JSON.parse() method and we can convert javascript object to JSON using JSON.stringify() method.



