function isDivideBy(number, a, b) {
    return !(number%a) && !(number%b) ? true : false;
  }

console.log(isDivideBy(-12, 2, -6))
console.log(isDivideBy(-12, 2, -5))
console.log(isDivideBy(45, 1, 6))
console.log(isDivideBy(45, 5, 15))
console.log(isDivideBy(4, 1, 4))
console.log(isDivideBy(15, -5, 3))

/// SOLUTIONS ///

const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;
// stocker dans une constante ? pourquoi plutôt que function ?
// Si reste === 0 = True donc true && true return true