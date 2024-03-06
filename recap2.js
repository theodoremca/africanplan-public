
const hdsStudents = ["Ezekiel", "Theresa", "Cosy", "Koach"];

function myCallbackfn(item, index, myArray) {
    console.log(item);
}

hdsStudents.forEach(myCallbackfn);

hdsStudents.forEach(function (value, index, array) {
    console.log(value);
    console.log(index);
    console.log(array);
});

hdsStudents.forEach((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
});
console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");  // new line
const APStudents = ["Ezekiel", "Theresa", "Cosy", "Koach"];
function APSCallbackfn(item, index, myArray) {
    if (index == 0) {
        return item.toLowerCase();
    }
    if (index == myArray.length - 1) {
        return item.toUpperCase();
    }
    return { value: item };
}
const newValue = APStudents.map(APSCallbackfn)
const newValue1 = APStudents.map(function (item, index, myArray) {
    if (index == 0) {
        return item.toLowerCase();
    }
    if (index == myArray.length - 1) {
        return item.toUpperCase();
    }
    return { value: item };
})

const newValue2 = APStudents.map((item, index, myArray) => {
    if (index == 0) {
        return item.toLowerCase();
    }
    if (index == myArray.length - 1) {
        return item.toUpperCase();
    }
    return { value: item };
})
console.log(newValue);


const claraArray = [
    "silas", "victor", "clara"
];

const resultclara = claraArray.map((name, idx) => {
    const performance = name + "-" + idx
    return {
        name,
        status: "active",
        performance
    }
}
);

const resultclara2 = claraArray.map((name) => ({ name, status: "active" }));


const oArray = [
    {
        name: "theodore", // 0 -- sileasIndex -1   
        score: 20,
    },
    {
        name: "silas",  // 1 -- claraIndex -1   theodoreIndex + 1
        score: 40,
    },
    {
        name: "clara", // 2 -- victorIndex -1 silasIndex + 1
        score: 60,
    },
    {
        name: "victor", // claraIndex + 1
        score: 80,
    }
];

const resultclara3 = oArray.map((item, idx, students) => {
    let performance = 0;
    const itemBelow = students[idx + 1];
    if (itemBelow) {
        performance = (item.score / itemBelow.score) * 100;
    }
    return {
        name: item.name,
        performance
    }
}
);
// students[idx + 1]?.score ?? 0
// returnValueWhenDefined??returnValueWhenUndefined
const resultclara4 = oArray.map((item, idx, students) => {
    const performance = (item.score / ((students[idx + 1]?.score) ?? 0)) * 100;
    return {
        name: item.name,
        performance
    }
}
);
console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
console.log(resultclara4);
console.log((100 / 0) * 100);



let claraArray4 = ["silas", "victor", "clara"]
let newArray1 = []


claraArray4.forEach((name) => {
    // condition ? doTrue : doFalse
    name == "silas" ?
        newArray1.unshift({
            name,
            status: "active",
        })
        :
        newArray1.push({
            name,
            status: "inactive",
        })
});


















