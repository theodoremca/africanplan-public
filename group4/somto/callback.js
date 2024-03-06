const students = ["kosi","somto","Theresa","koach","David"]

function mycallbackfn(item,idx,initialarray){
    console.log(item,idx,initialarray) 
     //this is to print out the name,index_number and the initial_arrays. you can also pass the itrm
}
students.forEach(mycallbackfn)

students.forEach((value,index,array)=>{  //using arrw function to get the same result.getting the value,index and array
console.log(value)
console.log(index)
console.log(array)
})

// const students2 = ["kosi","somto","Theresa","koach","David"]
// function calbackfn(item,index,array){
//     return newvalue
// }
// const newvalue = students2.map(calbackfn)
// const newvalue1 = students2.map((item,index,myArray)=>{
// }
// )

// let claraArray = ['somto','silas','clara']



