const sentence = "Yes Mr. theodore"; // theodore Mr. Yes
const reverseStr = sentence.split(" ").reverse().join(" ") 
console.log(reverseStr); 


const word = "kosi"; //"isok";
let newWord = word.split("");
console.log(newWord);
newWord = newWord.reverse()
console.log(newWord);
newWord = newWord.join("")
console.log(newWord);


const group3Sentence = "The fat cat sat on mat";
function reserveGroup3Sentence(word){
    return word.split("").reverse().join("");
};
let reversedWord = ""; 
for (let i=group3Sentence.length-1; i>=0; i--){
    reversedWord+=group3Sentence[i];
    // reversedWord=reversedWord+group3Sentence[i];
}
console.log(reserveGroup3Sentence(group3Sentence));
console.log(reversedWord);

const group5 = "my name is firstName lastName, i am a male";
// "my name is victor asogwa, i am a male";
const name_change = group5.split(" ")
name_change[3]="victor";
name_change[4]="asogwa";
const name = name_change.join(" ");
console.log(name_change);
console.log(name);
const nameChange = group5.replace("firstName lastName","victor asogwa")
console.log(nameChange);
// "my name is victor asogwa, i am a male";

const group4 = "Choose"; // esaahc
const newWordgroup4 = group4.replace("oo","aa")
.split("").reverse().join("").toLowerCase();
console.log(newWordgroup4);
const value  = "choose a sentence";
const anyVariable = value.split(" ") 
for (let i = 0; i < anyVariable.length; i++) {
 anyVariable[i]={value:anyVariable[i]}
}

console.log(anyVariable);


const anyVariable2 = value.split(" ")
.map((value)=>({word:value}));

const anyVariable3 = value.split(" ")
.map(function(value){return {value}});
console.log(anyVariable2);
console.log(anyVariable3);

console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");  // new line


const hdsStudents = ["Ezekiel","Theresa","Cosy","Koach"];

function myCallbackfn(item,index,myArray){
 console.log(item);
}

hdsStudents.forEach(myCallbackfn);

hdsStudents.forEach(function (value,index,array){
    console.log(value);
    console.log(index);
    console.log(array);
});

hdsStudents.forEach((value,index,array)=>{
    console.log(value);
    console.log(index);
    console.log(array);
});
console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");  // new line
const APStudents = ["Ezekiel","Theresa","Cosy","Koach"];
function APSCallbackfn(item,index,myArray){
    if(index == 0){
        return item.toLowerCase();
    }
    if(index == myArray.length-1){
        return item.toUpperCase();
    }
    return {value:item};
}
const newValue = APStudents.map(APSCallbackfn)
const newValue1 = APStudents.map(function (item,index,myArray){
    if(index == 0){
        return item.toLowerCase();
    }
    if(index == myArray.length-1){
        return item.toUpperCase();
    }
    return {value:item};
})

const newValue2 = APStudents.map((item,index,myArray)=>{
    if(index == 0){
        return item.toLowerCase();
    }
    if(index == myArray.length-1){
        return item.toUpperCase();
    }
    return {value:item};
})
console.log(newValue);














