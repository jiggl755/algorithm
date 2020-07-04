function solution(n){
	const arr = ((String(n).split("")).sort()).reverse();
	let answer = Number(arr.join('' ));
	return answer;
}
module.exports = solution;