function decipherThis(str) {
    // let letter = {
    //     97: 'a',
    //     98: 'b',
    //     99: 'c',
    //     100: 'd',
    //     101: 'e',
    //     102: 'f',
    //     103: 'g',
    //     104: 'h',
    //     105: 'i',
    //     106: 'j',
    //     107: 'k',
    //     108: 'l',
    //     109: 'm',
    //     110: 'n',
    //     111: 'o',
    //     112: 'p',
    //     113: 'q',
    //     114: 'r',
    //     115: 's',
    //     116: 't',
    //     117: 'u',
    //     118: 'v',
    //     119: 'w',
    //     120: 'x',
    //     121: 'y',
    //     122: 'z',
    // }


    let arr = str.split(' ')

    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i])
        let match = arr[i].match(/(\d+)/)
        console.log(arr[i].charCodeAt(match[0]))
    }
    
    //Récupérer valeur de match et la replace avec chart code
    //Intervertir index 1 et dernier index avec variable transitoire
    

    return arr
    
}; 

console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'))