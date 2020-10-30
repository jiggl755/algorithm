1.이해
====
배열 속 숫자들로 최대의 삼각형의 둘레를만들어 리턴

2.계획
===
삼각형의 조건 : 가장큰변은 다른두변의합보다는작아야한다
어레이를 역정렬 후 
하나씩빼서 i, i+1, i+2 를 각각비교해서 위의조건이 성립하면 된다.


3.실행
====


4.회고
====
중간에 정렬하면서 그냥 .sort()를했더니 숫자를 문자로받아들여서 1, 18, 2 이런식드로됐음
Runtime: 120 ms, faster than 24.36% of JavaScript online submissions for Largest Perimeter Triangle.
Memory Usage: 42.6 MB, less than 12.82% of JavaScript online submissions for Largest Perimeter Triangle.