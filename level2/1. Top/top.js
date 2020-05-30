function solution(heights) {
	const answer = heights.map((item,idx)=>{
		if(idx===0) return 0;
		for(let i=idx;i>=0;i--){
			if(heights[i]>item){
				return i+1;
			}
		}
		return 0;
	});

	return answer;
/*
 	let stack = [];
    let answer = [];

  
    for(let i = 0 ; i < heights.length ; i++){
        while(stack.length > 0 && heights[stack[stack.length - 1]] <= heights[i]){
            stack.pop();
        }
        
        if(stack.length > 0){
            answer.push(stack[stack.length - 1] + 1);
        } else {
            answer.push(0);
        }
        
        stack.push(i);
    }
    
    return answer;
*/

}

solution([6,9,5,7,4])
module.exports = solution;