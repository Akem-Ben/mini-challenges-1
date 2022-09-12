/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {}
// create an object to store the valid match   
let validObj = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
//Make sure the input string is a string of brackets and nothing else
//Also check to see that both opening and closing brackets are equal in number, otherwise print invalid
for(let i = 0; i<str.length; i++){
let a = str[i];
//let validityAll = [")", "]", "}", "(", "[", "{"];
let validityOpen = ["(", "[", "{"];
let validityClose = [")", "]", "}"];
let open = [];
let close = [];
if (a.includes(validityOpen)){
open.pop(a)
}else if (a.includes(validityClose)){
close.pop(a)
}
if (!(open.length === close.length)){
return "invalid"
} else {continue;}
}

// create a stack data structure with array
//A stack is a basic linear data structure, in which the insertion and deletion of items happens at one end called top of the stack. It follows the order of LIFO (last in first out) or FILO (first in last out), the last element added to the stack will be the first element removed from the stack. In javascript, there is no built-in stack data structure in JavaScript, we use array data structures to work around it.
let stack = []
// loop through each character of the given string 
for(let char of str){
//if character is in the validObj object, push the character into the stack
if(validObj[char]){
    stack.push(char)
    
// when stack is not empty and the topmost item of the stack key in the validObj is equal to the character
}else if(stack.length > 0 && validObj[stack[stack.length-1]] === char){

// remove the last element     
  stack.pop()
}else{
 
//if the character is not found in the validObj return invalid
    return "invalid"
}
}

//when stack is empty, it means all matching brackets are found 
return "valid"
module.exports = isValid;
