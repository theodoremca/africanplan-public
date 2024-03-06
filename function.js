
const calFunction = (anyFunction=undefined) => {
   const result = anyFunction(27, 52)
    console.log(result);
}

function Add(am, ab) {
    return(am + ab)
}

function substract(am, ab) {
    return(am - ab)
}
calFunction(substract)

const sum = Add(27, 52)


const runFaith2 = (name, group) => {
  return`${name}, ${group}`;
//   return name + ", " +group;
};

const groupValue = runFaith2("Faith", "Group 1");

console.log(groupValue);

