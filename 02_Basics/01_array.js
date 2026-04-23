let myArr = [1,2,3,"sanju"];

const myArr2 = new Array(1,2,3,4);

// when we copy array it makes shallow copy of it .
// shallow copy - copy whose properties share the same refernces
// deep copy - copy whose properties do not share the same refrences

myArr.push(6);
myArr.pop();
myArr.unshift(88); // add in the first and shift all others
myArr.includes(3) ; // true
myArr.indexOf(2); // 1

const newArr = myArr.join('-'); // it will join all the element of array and make a string with the help of separator which is - in this case
console.log(newArr); // [1,2,3,"sanju"]
console.log(typeof newArr); //string

let arr = [1,2,3,4,5];
console.log(arr);
const arr1 = arr.slice(1,3);
console.log(arr1);
console.log("B",arr);

const arr2 = arr.splice(1,3);
console.log(arr2);
console.log("c",arr);

// so the difference is : slice give the value b/w range(boundries not included) and don't change the array , splice give the value b/w range and include the boundari of right and make change those in original array 



