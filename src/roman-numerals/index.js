/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
//declare two variables that will be involved in the conversion
let total = 0;
// let ind = 0;
// Put all numerals in the same case to checkmate errors that may arise should the wrong case be inputted by the user
 let input = roman.toLowerCase()
//Create an object that contains the basic numerals to be used for the conversion and their corresponding decimal values
let convert = {
 i:1,
 v: 5,
 x: 10,
 l:50,
 c:100,
 d:500,
 m:1000

}
//create a loop that will loop through the supplied roman numelras
for(let i = 0; i<input.length; i++){
//if the numerals have more than one digit, the code will check if the next digit is greater than the previous one. If it is, it will deduct the decimal value of the former digit from the decimal value of the next digit. 
 let former = input[i]
 let next = input[i + 1]
 if(convert[former] < convert[next]){
     total += convert[next] - convert[former]
      i += 1
 }else{
     total += convert[former]
 }
}
return total
}

module.exports = romanToDecimal;
