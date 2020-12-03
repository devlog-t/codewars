var fizzBuzzCustom = function(stringOne, stringTwo, numOne, numTwo) {
    let arr = []

    let strOne = stringOne ? stringOne : "Fizz"; // = stringOne || 'Fizz'
    let strTwo = stringTwo ? stringTwo : "Buzz"; // = stringTwo || 'Buzz'

    let denominatorOne = numOne ? numOne : 3; // = numOne || 3
    let denominatorTwo = numTwo ? numTwo : 5; // = numTwo || 5

    for(let number = 1; number <= 100; number++){
        if(number%denominatorOne === 0 && number%denominatorTwo === 0){
            arr.push(strOne + strTwo)
        } else if (number%denominatorOne === 0){
            arr.push(strOne)
        } else if (number%denominatorTwo === 0){
            arr.push(strTwo)
        } else {
            arr.push(number)
        }
    }
    

    return arr

};

// console.log(fizzBuzzCustom())
// console.log(fizzBuzzCustom("Hey"))
// console.log(fizzBuzzCustom("Hey", "Plop"))
console.log(fizzBuzzCustom("Hey", "Plop", 5))
// console.log(fizzBuzzCustom("What's", " up?", 42, 135))

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

const fizzBuzzCustom = (stringOne='Fizz', stringTwo='Buzz', numOne=3, numTwo=5) => {  
    return [...Array(101).keys()].map(i => {
      i = i + 1
      const fizz = !(i % numOne) ? stringOne : ''
      const buzz = !(i % numTwo) ? stringTwo : ''
      
      return (fizz + buzz) ? fizz + buzz : i 
    });
  };