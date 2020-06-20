function solution(arrangement){
	let answer = 0;
	const stack = [];

	for(let i = 0; i < arrangement.length; i++){
		if(arrangement[i]=='(') {
			stack.push(arrangement[i])
		}else{
			stack.pop();
			if(arrangement[i-1]=='('){
				answer += stack.length;
			}else{
				answer +=1
			}

		}
	}
	return answer;
}
module.exports = solution;