// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

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

var comeOnIn = people.map(function(x) {
    if(x.age > 18) {
        return x.name + ' can go to the Matrix!'
    }
    else {
        return x.name + ' cannot go to the Matrix...'
    }
})

console.log(comeOnIn)