let rules = {R: ['BG', 'GB', 'RR'], B: ['RG', 'GR', 'BB'], G: ['BR', 'RB', 'GG']}

// console.log(rules.R.includes('GB'))

function triangle(row) {
  let arr = row.split('')

  while(arr.length != 1){
  arr = arr.map((element, index, basic_arr) => 
    {
      if(basic_arr[index + 1] != undefined){
        for (const key in rules) {
           if(rules[key].includes(element + basic_arr[index + 1])) return key
        }
      }
    }
  )
  arr.splice(-1)
  }
  
  return arr.join()
}

triangle('B') //B

triangle('GB')
// triangle('RRR')
// triangle('RGBG')
// triangle('RBRGBRB')
// triangle('RBRGBRBGGRRRBGBBBGG')
// triangle('B')


console.log(triangle('GB'))
console.log(triangle('RRR'))
// console.log(triangle('RGBG'))
console.log(triangle('RBRGBRB'))
// console.log(triangle('RBRGBRBGGRRRBGBBBGG'))
// console.log(triangle('B'))
>>>>>>> 56942374bc4066536836adb39c1fbe40b2bc7af9
