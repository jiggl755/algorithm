/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {
    //단순행렬만만든거
    let res = [] 
    for(let i = 0; i<R;i++){
        for(let j = 0; j<C;j++){
            res = [...res , [i,j]]
        }
    }
    console.log(res)


    //정렬을안한 그냥 행렬 결과 (미완)
/*    const maxX = R-1;
    const maxY = C-1;
    let res2 = []
    let x = r0;
    let y = c0;

    for(i = 0; i<R; i++){
        for(j=0; j<C; j++){
            res2 = [...res2,[Math.abs(x),Math.abs(y)]]
            if(i!=0&&maxY>r0){
                y++
            }else{
                y--
            }    
        }
        if(i!=0&&maxX>r0){
            x++
        }else{
            x--
        }
    }
    console.log(res2)
    return res2;
*/



   /* let maxX = R-1;
    let maxY = C-1;
    console.log(maxY)
    let res = []
    let x = r0;
    let y = c0;
    let tempY = c0;
    let tempX = r0;
    let is = true;

    for(i = 0; i<R; i++){

        for(j=0; j<C; j++){
            is = is?false:true;
            res = [...res,[Math.abs(x),Math.abs(y)]]
            if(is){
                tempX = tempX-1
            }else{
                tempY = tempY-1
            }
            x= tempX;
            y = tempY;

            if(i!=0&&maxY>r0){
                y++

            } 
        }
        if(i!=0&&maxX>r0){
            x++
        }
        maxX = maxX-1;
    }
    console.log(res)
    return res;*/
    
};
allCellsDistOrder(2,3,1,2)
module.exports = allCellsDistOrder;