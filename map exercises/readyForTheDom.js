// 6) Make an array of the names in h1s, and the ages in h2s

var people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

var convertedForDom = people.map(function(x) {
    return '<h1>' + x.name + '<h2>' + x.age
})

console.log(convertedForDom)