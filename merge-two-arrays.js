function mergeArrays(a, b) {
    let result = []
    let l = Math.min(a.length ,b.length)
    for(let i = 0; i < l; i++){
        result.push(a[i], b[i]);
    }
    result.push(...a.slice(l), ...b.slice(l))

    return result

}
console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']))
// console.log(mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]))
// console.log(mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']))


// const interleave = ([ x, ...xs ], ys = []) =>
//     x === undefined ? ys : [ x, ...interleave (ys, xs) ]
//     return interleave