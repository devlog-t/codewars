function multiTable(number) {
    let table = "";
    for(let i = 1; i < 11; i++){
      if(i === 10){
        table += i + " * " + number + " = " + (i * number)
  } else {
    table += i + " * " + number + " = " + (i * number) + "\n"
  }
      
    }
    return table
  }

  // \n en trop sur dernier élément
  console.log(multiTable(4))

  const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
  }