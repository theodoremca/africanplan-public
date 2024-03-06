let num = 7; 
console.log(num);
num = 10;
console.log(num);
const num1 = 17;
console.log(num1);
const num1Name = 'Six';
console.log(num1Name);
const num1Array = ['Seven',7];
console.log(num1Array);
const idx  = 0;
console.log(num1Array[idx]);
console.log(num1Array[1]);
num1Array[1] = 'Eight';
console.log(num1Array);
num1Array[3] = 'nine';
console.log(num1Array);
const num1ArrayVar = [num1Name,num];
const num1Object = {
    num:30,
    num1name : 'Six',
    num1Array : ['Seven',7],
    numSquare : function () { 
        return (this.num)**2
    }
};
num1Object.num= 40;
const key = 'num1name'
console.log(`${key}-m-${num1Object.num}`);
console.log(key+'-m'+num1Object.num);


console.log(num1Object[key]);
// console.log(num1Object[`${key}m`]);



// num1 = 10;
console.log(num1Object.numSquare());


// let text = "1"
// for (let i = 0; i < 5; i++) {
//     text+='-'+ i
//     console.log(text);
// }

let buildHtml = ""
const letters = new Set(["a","b","c"]);

letters.forEach(function(item){
    buildHtml = buildHtml + item + "<br/>"
})
console.log(buildHtml);


