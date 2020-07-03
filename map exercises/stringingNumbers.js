// 2) Take an array of numbers and make them strings

var numbers = [1, 52, 24, 938, 356]

var numberString = ""

var stringThis = numbers.map(function(num) {
    numberString += num
})

console.log(numberString)