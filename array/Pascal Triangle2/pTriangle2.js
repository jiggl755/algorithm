/**
 * @param {number} numRows
 * @return {number[][]}
 */
var getRow = function(rowIndex) {
	let res = [];
	let temp = [1,1];
    if(rowIndex==0){
    	return [1];
    }else if(rowIndex==1){
    	return [1,1]
    }else{
    	for(let i = 2; i<rowIndex+1; i++){
    		const arr = [];
			arr[0] = 1;
			arr[i] = 1;
			for (let j = 1; j<i; j++) {
				arr[j] = temp[j]+temp[j-1];
			}
			
			temp = arr;
			if(i == rowIndex) res = temp;
		}
		return res;
    }
};

module.exports = getRow;