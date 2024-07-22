let koders = [
    {
        name: "Harry",
        lastName: "Potter",
    },
    {
        name: "Hermione",
        lastName: "Granger",
    },
    {
        name: "Ron",
        lastName: "Weasley",
    },
    {
        name: "Luna",
        lastName: "Lovegood",
    },
    {
        name: "Ginny",
        lastName: "Weasley",
    },
    {
        name: "Sirius",
        lastName: "Black",
    },
    {
        name: "Severus",
        lastName: "Snape",
    },
    {
        name: "Albus",
        lastName: "Dumbledore",
    },
    {
        name: "Voldemort",
        lastName: "You-Know-Who",
    }
]

const  koderList = () => {
    let ul = document.getElementById('koders-list');

    koders.forEach(koder => {
        let li = document.createElement('li');
        li.className = "list-group-item";
        li.textContent = `${koder.name} ${koder.lastName}`;
        ul.appendChild(li);
    });

    return ul;
}

koderList(koders);
console.log(koderList(koders));
