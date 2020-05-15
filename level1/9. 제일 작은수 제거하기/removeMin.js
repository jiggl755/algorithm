function solution(arr) {
  	let answer = [];

  	if(arr.length>1){
  		/*answer = arr.sort().reverse();
  		answer.pop();*/
  		let min = Math.min.apply(null,arr)
		answer = arr.filter(function(item,index,arr){
			if(item!=min) return item
		})
  	}else{
  		answer.push(-1)
  	}
  	
  	return answer;
}

module.exports = solution;