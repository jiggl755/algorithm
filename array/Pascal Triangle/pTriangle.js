/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
const res = [];
let temp = [];

	for(let i = 0; i<numRows; i++){
		const arr = [];

		if(i==0){
			arr[0]=1;
		}else if(i==1){
			arr[0]=1;
			arr[1]=1;
		}else{
			arr[0] = 1;
			arr[i] = 1;
			for (let j = 1; j<i; j++) {
				arr[j] = temp[j]+temp[j-1];
			}
		}
		temp = arr;
		res.push(temp)
	}
	return res;
};
module.exports = generate;