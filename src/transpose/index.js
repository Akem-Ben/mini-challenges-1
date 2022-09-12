/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
let arr=[];
  //Matrices are arrays, so our function will be designed to treat them as such.
  //loop/iterate through the matrix and loop further through each sub-array in the matrix to be able to rearrange the rows and columns.
        for(let i=0;i<array.length;i++){
            arr.push([])
 //This loop iterates through the nested arrays and then switches between elements in the matrix
            for(let j=0;j<array.length;j++){
                arr[i].push(array[j][i])
            }
        }
        return arr
}
module.exports = transpose;
