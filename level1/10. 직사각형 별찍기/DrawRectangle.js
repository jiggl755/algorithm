function solution(a,b) {
    var star = '';
    for(var j=0;j<a;j++){
        star +='*';
    }
    for(var i=0;i<b;i++){
      console.log(star)
    }
}

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    solution(a,b);
});

module.exports = solution;