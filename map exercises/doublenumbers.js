// 1) Make an array of numbers that are doubles of the first array

var numbers = [1, 52, 24, 938, 356]

var doubleNumbers = numbers.map(function(num) {
    return num * 2
})
  
console.log(doubleNumbers);