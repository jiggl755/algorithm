function solution(str){
    const strArr = str.split(' ');
    let result = '';
    strArr.forEach(function(element){
        for(let i = 0; i<element.length; i++){
            result += (i%2)==0?element[i].toUpperCase():element[i].toLowerCase();
        }
        result += " "
    });
    result = result.slice(0,-1);     
    return result;
}


module.exports = solution;