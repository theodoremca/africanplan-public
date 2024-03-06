// ------USING MAP-------
 let claraArray = [ "silas", "victor", "clara"]

 let newarray = claraArray.map( (name) => {
     if (name == "clara"){
       return {
           name,
           status : "active",
        }
     }
          return {
         name,
         status : "inactive",
     }
 });

 console.log(newarray);

    // -------USING FOREACH-------
 let claraArray1 = [ "silas", "victor", "clara"]
 let newArray1 = []


 claraArray1.forEach((name) => {
     if (name == "silas"){
         newArray1.unshift({
             name,
             status : "active",
         })
     } else{ 
         newArray1.push({
             name,
             status : "inactive",
     })}
 });
 console.log(newArray1);
    //  ------ APPROACH TWO: FOREACH------- 
 claraArray.forEach((name) => {
     if (name == "silas"){
         newArray1.unshift({
             name,
             status : "active",
         })
     } else{ 
         newArray1.push({
             name,
             status : "inactive",
     })}
 });
 console.log(newArray1);

//  ------ APPROACH TWO: FOREACH------- 
let newArray2 = []

let claraArray3 = [ "silas", "victor", "clara"]

claraArray3.forEach((name) => {
    if (name == "silas"){
        newArray2.unshift({
            name,
            status : "active",
        })
        return
    }  
    newArray2.push({
        name,
        status : "inactive",
    })
});
console.log(newArray2);