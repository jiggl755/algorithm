/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(let i = 0; i<numbers.length-1 ; i++){
        let num1 = numbers[i];
        for(let j = i+1; j <numbers.length; j++){

            if(num1+numbers[j]==target){
                return [i+1,j+1]
            }
        }
    }
};

module.exports = twoSum;