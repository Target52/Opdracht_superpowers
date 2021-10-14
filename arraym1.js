const superheroes = [
    {
        "name": "Batman",
        "publisher": "DC Comics",
        "alter_ego": "Bruce Wayne",
        "first_appearance": "Detective Comics #27",
        "weight": "210"
    },
    {
        "name": "Superman",
        "publisher": "DC Comics",
        "alter_ego": "Kal-El",
        "first_appearance": "Action Comics #1",
        "weight": "220"
    },
    {
        "name": "Flash",
        "publisher": "DC Comics",
        "alter_ego": "Jay Garrick",
        "first_appearance": "Flash Comics #1",
        "weight": "195"
    },
    {
        "name": "Green Lantern",
        "publisher": "DC Comics",
        "alter_ego": "Alan Scott",
        "first_appearance": "All-American Comics #16",
        "weight": "186"
    },
    {
        "name": "Green Arrow",
        "publisher": "DC Comics",
        "alter_ego": "Oliver Queen",
        "first_appearance": "All-American Comics #16",
        "weight": "195"
    },
    {
        "name": "Wonder Woman",
        "publisher": "DC Comics",
        "alter_ego": "Princess Diana",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "165"
    },
    {
        "name": "Blue Beetle",
        "publisher": "DC Comics",
        "alter_ego": "Dan Garret",
        "first_appearance": "Mystery Men Comics #1",
        "weight": "145"
    },
    {
        "name": "Spider Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Peter Parker",
        "first_appearance": "Amazing Fantasy #15",
        "weight": "167"
    },
    {
        "name": "Captain America",
        "publisher": "Marvel Comics",
        "alter_ego": "Steve Rogers",
        "first_appearance": "Captain America Comics #1",
        "weight": "220"
    },
    {
        "name": "Iron Man",
        "publisher": "Marvel Comics",
        "alter_ego": "Tony Stark",
        "first_appearance": "Tales of Suspense #39",
        "weight": "250"
    },
    {
        "name": "Thor",
        "publisher": "Marvel Comics",
        "alter_ego": "Thor Odinson",
        "first_appearance": "Journey into Myster #83",
        "weight": "200"
    },
    {
        "name": "Hulk",
        "publisher": "Marvel Comics",
        "alter_ego": "Bruce Banner",
        "first_appearance": "The Incredible Hulk #1",
        "weight": "1400"
    },
    {
        "name": "Wolverine",
        "publisher": "Marvel Comics",
        "alter_ego": "James Howlett",
        "first_appearance": "The Incredible Hulk #180",
        "weight": "200"
    },
    {
        "name": "Daredevil",
        "publisher": "Marvel Comics",
        "alter_ego": "Matthew Michael Murdock",
        "first_appearance": "Daredevil #1",
        "weight": "200"
    },
    {
        "name": "Silver Surfer",
        "publisher": "Marvel Comics",
        "alter_ego": "Norrin Radd",
        "first_appearance": "The Fantastic Four #48",
        "weight": "unknown"
    }
]

//1
const fName = superheroes.map((item) => item.name)
console.log(fName)

//2
const fLicht = superheroes.filter((item) => item.weight < 190)
console.log(fLicht)

//3
const fNameLicht = superheroes.filter((item) => item.weight < 190).map((item) => item.name)
console.log(fNameLicht)

//4
const fApp = superheroes.map((item) => item.first_appearance)
console.log(fApp)

//5
const fDCC = superheroes.filter((item) => item.publisher == "DC Comics")
console.log(fDCC)

const fMC = superheroes.filter((item) => item.publisher == "Marvel Comics")
//console.log(fMC)

//6
const fWeightDCC = superheroes.filter((item) => item.publisher == "DC Comics").reduce((cTotal, item) => Number(item.weight) + cTotal, 0)
console.log(fWeightDCC)

//7
const fWeightMC = superheroes.filter((item) => item.publisher == "Marvel Comics").filter((item) => item.weight != "unknown").reduce((cTotal, item) => Number(item.weight) + cTotal, 0)
console.log(fWeightMC)

const fWeightMC2 = superheroes.filter((item) => item.publisher == "Marvel Comics" && item.weight != "unknown").reduce((cTotal, item) => Number(item.weight) + cTotal, 0)
console.log(fWeightMC2)

//8
const maxWeight = superheroes.filter((item) => item.weight != "unknown").reduce((cTotal, item) => {
    if (cTotal < Number(item.weight)) {
        return Number(item.weight)
    } else {
        return cTotal
    }
}, 0)

console.log(maxWeight)