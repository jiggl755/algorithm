function sloution(n){
	let answer = [];
	answer= (n.toString()).split("");
	answer.reverse();
	answer.forEach(function(item,index,array){
		array[index] = Number(item);
	})
    return answer;
}


module.exports = sloution;