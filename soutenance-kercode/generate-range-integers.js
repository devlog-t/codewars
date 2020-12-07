// function generateRange(min, max, step){

//     let arr = [min]

//     for(let i = 0; (arr[i]+step) <= max; i++){
        
//         arr.push(arr[i] + step)
//     }
    
//     return arr
// }



///SOLUTIONS///

function generateRange(min, max, step){
    let arr = [];
    for (let i=min; i<=max; i += step) {
      arr.push(i);
    }
    return arr;
}

//Tableau vide
// boucle i = min tant que i < au max alors ajouter à i la valeur de step, i est incrémenter avant le push
// push i

console.log(generateRange(2, 10, 2))
console.log(generateRange(1, 10, 4))
console.log(generateRange(1, 10, 5))