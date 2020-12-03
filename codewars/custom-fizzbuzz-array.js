var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
    let arr = []

    let strOne = stringOne ? stringOne : "Fizz";
    let strTwo = stringTwo ? stringTwo : "Buzz";

    let minRange = numOne >= 0 ? numOne : 1;
    let maxRange = numTwo ? numTwo : 100;

    for(let number = minRange; number <= maxRange; number++){
        if(number%3 === 0 && number%5 === 0){
            arr.push(strOne + strTwo)
        } else if (number%3 === 0){
            arr.push(strOne)
        } else if (number%5 === 0){
            arr.push(strTwo)
        } else {
            arr.push(number)
        }
    }
    

    return arr

};

console.log(fizzBuzzCustom())
console.log(fizzBuzzCustom("Hey"))
console.log(fizzBuzzCustom("Hey", "Plop"))
console.log(fizzBuzzCustom("Hey", "Plop", 5))
console.log(fizzBuzzCustom("Hey", "Plop", 42, 135))

//fizzbuzz 1 - 100 (/5 or /3 or /3 and /5)
// 1st et 2nd argument = fizz and buzz by default
// 3rd and 4th argument = 3 and 5 by default
// function return with default argument classic fizzbuzz
// and custom return with argument (up to 4)

// console.log(fizzBuzzCustom()[15]                   
// console.log(fizzBuzzCustom()[44]                       
// console.log(fizzBuzzCustom('Hey', 'There')[25]         
// console.log(fizzBuzzCustom('Hey', 'There')[11]         
// console.log(fizzBuzzCustom("What's ", "up?", 3, 7)[80] 