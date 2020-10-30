/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A.sort(function(a, b){ return a-b; });
    A.reverse();
    var res = 0;
    for(var i = 0; i<A.length-2 ; i++){
        if(A[i]<A[i+1]+A[i+2]){
            console.log(A[i]+' '+A[i+1]+' '+A[i+2])
            res =  A[i]+A[i+1]+A[i+2]
            return res;
        }
    }
    return res;
};


console.log(largestPerimeter([1,2,2,4,18,8]))
module.exports = largestPerimeter;