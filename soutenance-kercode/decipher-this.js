function decipherThis(str) {
    
    let arr = str.split(' ')
    let result = []

    for(let i = 0; i < arr.length; i++){

        //Récupérer les lettres uniquement
        let matchLetter = arr[i].match(/[a-z]/g)
        
        // Chiffre seul = null
        if(matchLetter){
            let a = matchLetter[0]
            let b = matchLetter[matchLetter.length - 1]
            matchLetter[0] = b
            matchLetter[matchLetter.length - 1] = a
        } else {
            matchLetter = [""]
        }

        // Récupérer les chiffres et les convertir en lettre
        let matchNum = arr[i].match(/(\d+)/)
        let translate = String.fromCharCode(parseInt(matchNum[0], 0))

        matchLetter.unshift(translate)
        // console.log(translate)
        result.push(matchLetter.join(''))
        
        //join with space    
    }

    return result.join(' ')
    
}; 

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))