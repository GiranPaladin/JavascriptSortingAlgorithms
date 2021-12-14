// function stringSearch(str1, str2){
//     let count = 0;
//     let arr1 = str1.split('')
//     let arr2 = str2.split('')

//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(i === j){
//                 count += 1
//             } else {
//                 break
//             }
//         }
//     }
//     return count
// }

//search for occurence of string
function naiveSearch(long, short) {
    var count = 0;
    for(var i = 0; i < long.length; i++){
       for(var j = 0; j <short.length; j++){
            if(short[j] !== long[i+j]) break;
          if(j === short.length -1) count++;
       }
    }
    return count
}
naiveSearch('lorie loled', 'brr')