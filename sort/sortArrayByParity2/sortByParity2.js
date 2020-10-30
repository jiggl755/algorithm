var sortArrayByParity = function(A) {
    var oddTemp = [];
    var evenTemp = [];
    var res = [];
    var cnt = 0;
    var len = A.length

	while(A.length>0){
		var val = A.shift();
    	if(val%2==0){
    		evenTemp.push(val)
    	}else{
    		oddTemp.push(val)
    	}
    }
    while(res.length<len){
    	if(cnt%2==0&&evenTemp.length!=0){
    		res.push(evenTemp.shift())
    	}else if(cnt%2!=0&&oddTemp.length!=0){
    		res.push(oddTemp.shift())    		
    	}
    	cnt++
    	
    }
    return res;
};
sortArrayByParity([4,2,5,7])
module.exports = sortArrayByParity;