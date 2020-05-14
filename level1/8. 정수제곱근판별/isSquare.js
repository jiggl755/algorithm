function solution(num) {
  	let x = Math.sqrt(num);
	let answer = Number.isInteger(x)?Math.pow(x+1, 2):-1
	return answer;   
}

module.exports = solution;