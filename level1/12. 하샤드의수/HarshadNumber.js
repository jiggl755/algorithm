function solution(x){
	let answer = true;
	if(x<=10) return true;
	const sum = (String(x).split("")).reduce((a,b)=>Number(a)+Number(b))
	answer = x%sum==0?true:false
	return answer;
}

module.exports = solution;