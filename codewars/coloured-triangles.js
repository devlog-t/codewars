function triangle(row) {
    let cut = row.split('') //récupérer chaque lettre
    let nextStep = []
    for(let i = 0; i < cut.length; i++){
        // console.log(cut[i])
        if(cut[i] === cut[i+1]){
            nextStep.push(cut[i])

        }
    }
    console.log(nextStep)
    
}

triangle('GB')
// triangle('RRR')
// triangle('RGBG')
// triangle('RBRGBRB')
// triangle('RBRGBRBGGRRRBGBBBGG')
// triangle('B')