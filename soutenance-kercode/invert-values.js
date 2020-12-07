function invert(array) {
    let inverse = []

    for(let i = 0; i < array.length; i++){
        if(Math.sign(array[i]) < 0 || Math.sign(array[i]) > 0){
            inverse.push(array[i]*(-1))
        } else {
            inverse.push(array[i])
        } 
    }

    return inverse;
 }

 console.log(invert([1,2,3,4,5]))
 console.log(invert([1,-2,3,-4,5]))
 console.log(invert([]))
 console.log(invert([0]))

 //// SOLUTIONS ////
function invert(array) {
   return array.map( x => x === 0 ? x : -x); 
}

//.map permet d'effectuer une fonction sur chaque élément
// -x permet de renvoyer l'élément courant - (-x) = +