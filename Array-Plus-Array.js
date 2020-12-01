function arrayPlusArray(arr1, arr2) {
    // let test = arr1.concat(arr2)
    return(arr1.concat(arr2).reduce((a, b) => a + b, 0)); //something went wrong
  }

  arrayPlusArray([1, 2, 3], [4, 5, 6])