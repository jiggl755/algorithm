function solution(n,m){
	var answer = [];

	let a = n>m?n:m;
	let b = n>m?m:n;
	let mod = a%b;

	while(mod > 0 ){
		a = b;
		b = mod;
		mod = a%b;
	}

	answer.push(b);
	answer.push((n*m)/gcd);

    return answer;
}

module.exports = solution;