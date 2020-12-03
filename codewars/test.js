function persistence(number) {
    
    if(number < 10){
        return number
    } else {
        return persistence([...number.toString()].reduce((acc, current) => acc * current));
    }
}

console.log(persistence(485));