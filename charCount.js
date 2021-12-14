// function charCount(str) {
//     //make object to return at the end
//     var result  = {}
//     //loop over string, for each character...
//     for(var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase()
//         if(/[a-z0-9]/.test(char)) {
//               //if the char is a number/letter AND is a key in object, add one to count
//         if(result[char] > 0){
//             result[char]++;
//         //if the char is a number/letter AND not in object add it to object and set value to 1
//         }else {
//             result[char] = 1;
//         }
//         }
      
//     }
//     //if character is something else (space, period, etc)...dont do anything
//     //return object at the end
//     return result

// }

function charCount(str) {
    var result = {};
    for ( var char of str) {
        char = char.toLowerCase()
         if(isAlphaNumeric(char)) {

        result[char] = ++result[char] || 1;
                result[char] = 1;
     }      

     }

    return result

    }
function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if(
        !(code > 47 && code < 58) && //numeric (0-9)
        !(code  > 64 && code  < 91) && //upper case alphabets (A-Z)
        !(code > 96 && code < 123) // lower case alphabets (a-z)

    )
{
        return false
    }
    return true
}