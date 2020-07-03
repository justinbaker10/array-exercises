// 3) Capitalize each of an array of names

var names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

var capitalizeThis = names.map(function(name) {
    return name.toUpperCase()
})

console.log(capitalizeThis)