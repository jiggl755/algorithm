function sloution(n){
	let answer =0;
	n = n.toString();
    for(let i =0; i<n.length;i++){
    	answer += Number(n[i]);
    }

    return Number(answer);
}

module.exports = sloution;