/*function solution(priorities, location) {
    let answer = 0;

    while(priorities.length>0){
        var num = priorities.shift();
        //num이 제일크지않을때
        if(priorities.some(item => item > num)){
        	location = location==0? priorities.length+1 : --location
        	priorities.push(num);  	
        }else if(priorities.some(item => item === num)){
        	priorities.pop();
        	if(location==0){
        		priorities = [];
        	}else{
        		--location
        	}
        	answer++;
        }else{
        	answer++;
        	if(location==0){
        		priorities = [];
        	}else{
        		--location;
        	}
        }

    }
    return answer;
}*/

function solution(priorities, location) {
    let answer = 0;
    let tasks = priorities.map((v,i)=>({ 
        lo : i === location,    
        val: v                  
    }));
    /*
        기존의 배열형태에서 현재 위치하고있는 인덱스정보를 같이 갖고있는 객체로 저장
        location은 현재 대기목록의 위치 여기 예제에서는 배열의 3번째 값.
     [ 
        { lo: false, val: 2 },
        { lo: false, val: 1 },
        { lo: true, val: 3 },
        { lo: false, val: 2 } 
     ]
    */
    while(true){
        let cur = tasks.splice(0,1)[0];         //현재 처리하고자 하는 일을 빼낸다. splice 메서드는 원본 배열의 값을 바꿈.
        if(tasks.some(t=>t.val > cur.val)){       //현재 처리하고자 하는 일보다 더 높은 우선순위의 일이 있는지 비교
            tasks.push(cur);                    //더 높은 우선순위가 존재할 때, 현재 하고자 하는 일은 맨 뒤로 밀어둠.
        }
        else {                                  //현재 하고자 하는 일이 가장 높은 우선순위일 때
            answer++;                           //answer 값에 +1을 한다.(인쇄순서를 카운트)
            if(cur.lo) return answer;           //그 일이 문제에서 현재 위치로 주어진 부분일 때 answer 값을 리턴.
        }
    }
}

module.exports = solution;