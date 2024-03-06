// for (var i = "g"; i != 'ggggg';i = (()=>{ return i+"g"})()) {
//     console.log(i);
// }

let num = 1;
// num = num+1
num++;
++num;
// console.log(num);

let numA = 1;
// numA = numA-1
numA--; 
--numA;
// console.log(numA);

const doubleNum = (num)=>{
  return num/2;
}
// for (let i = -4; i <5; i++) {
//     console.log(i); //0,1,2,3
// }
// for (let i = 2; i <5; i=i+2) {
//     // console.log(i); 
// }

// for (let i = 10; i == 5; i--) {
//     console.log(i); //1,2,4
//   }

// for (let i = 100; i >5; i=doubleNum(i)) {
//   console.log(i); //1,2,4
// }
// const myArray = Array(4).keys();
// const myArray1 = [undefined, undefined, undefined].keys();

// const array = [1,2,3];
// const array2 = [2,3,4]
// console.log([...myArray])

const result = [
  40,34,"theodore","seyi", "precious", "Mog"
]



for (let i = 0; i <result.length; i++) {
  // console.log(result[i]); //1,2,4
}
const result2 = [
  40,34,"theodore","seyi", "precious", "Mog"
]
// function loop(item){
//   console.log(item);
// }
result2.forEach(function(item){
  // console.log(item);
  // console.log(item+"---- "+result2);
})
for (const value of result2) {  // element assignment
    console.log(value);
}



