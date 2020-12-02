function correct(string)
{
    let letter = string.split("")
    
    for(let i = 0; i < letter.length; i++){
        switch (letter[i]) {
            case '5' : 
                letter[i] = 'S';
                break;
            case '0' :
                letter[i] = 'O';
                break;
            case '1' :
                letter[i] = 'I';
                break;
            default:
                letter[i] = letter[i]
        }
    }

    return letter.join("")
}

console.log(correct("L0ND0N"));
console.log(correct("DUBL1N"));
console.log(correct("51NGAP0RE"));
console.log(correct("BUDAPE5T"));
console.log(correct("PAR15"));


/// SOLUTIONS ///
const corrections = {
    '5': 'S',
    '0': 'O',
    '1': 'I',
  };
  
  const correct = string => (
    string.replace(/[501]/g, character => corrections[character])
  );

  //regex : rechercher dans string, correspondance trouvé (character) = valeur de la propriété (character) {Objet}