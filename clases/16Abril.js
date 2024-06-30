let data = [
    {
        name: "Israel",
        lastname: "Salinas",
        expertise: "Front-end",
        age: 34
    },
    {
        name: "Naomi",
        lastname: "Lopez",
        expertise: "Back-end",
        age: 27
    },
    {
        name: "Charles",
        lastname: "Silva",
        expertise: "Back-end",
        age: 25
    },
    {
        name: "Leonardo",
        lastname: "Santiago",
        expertise: "Marketing",
        age: 40
    }
];

const firstFunction = (dataArray) =>{
    let result = 0
    dataArray.forEach((person) => {
        let {age} = person;
        result += age;
    });
    return result;
};

let test = firstFunction(data);
console.log(test);
console.log("----------------------------------------------------");

const secondFunction = (dataArray, limit) =>{
    let result = dataArray.filter((person) => person.age > limit);
    return result;
};

let test2 = secondFunction(data, 30);
console.log(test2);
console.log("----------------------------------------------------");

const thirdFunction = (dataArray) =>{
    let result = dataArray.map((person) => {
        let value = `${person.name} ${person.lastname}`;
        value = value.toUpperCase();
        return value;
    });

    return result;
};

let test3 = thirdFunction(data);
console.log(test3);
console.log("----------------------------------------------------");

const fourthFunction = (dataArray) =>{
    let result = dataArray.reduce((acc, current) => {
        return acc[current.expertise]
        ?{
            ...acc,
            [current.expertise]: [...acc[current.expertise], current],
        }
        : {...acc, [current.expertise]: [current]};
    }, {});
    return result;
}

let test4 = fourthFunction(data);
console.log(test4);
console.log("----------------------------------------------------");