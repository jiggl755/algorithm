/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var r = 0;
	   for(var i=1; i<prices.length; i++) 
		  if(prices[i] > prices[i-1]) 
			  r += prices[i] - prices[i-1];
	   return r;
};

module.exports = maxProfit;