/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxDiff  = 0;

    for(let i = 0; i<prices.length-1; i++){
    	let buy = prices[i];

    	let max = 0;
    	let idx = i+1;

    	for(let j = idx ; j<prices.length; j++){
    		let temp = prices[j] 
    		if(temp>buy){
	    		max = temp>max? temp: max;
    		}
    		
    	}
console.log(buy+';;;;'+max)
    	let sub = max-buy;
    	if(sub>maxDiff){
    		maxDiff=sub;
    	}
    	console.log(buy+'일때'+maxDiff)
    }
    return maxDiff;
};
maxProfit([7,1,5,3,6,4])

module.exports = maxProfit;