function sloution(arr){
	 let answer= arr.reduce((a, b) => a + b);
	 answer = answer/arr.length
    return answer;
}

module.exports = sloution;