1.이해
====
i번째요소가 i일에 주식이 가격인 배열이있을때
최대의 수익이날수있는 일자를 구하라

2.계획
===
(idx,max)형식의 object를 만든다(maxDiff)
그리고 prices 돌면서 구매일이 i일때 가장 최대의 수익이 나는 일자를 계산한다
(배열을 스캔해서 최대값과 idx를 저장해서 끝까지 스캔)
그리고 지금 maxDiff.max보다 크면 덮어쓰고 아니면 스킵한다.
다 돌면 끝

3.실행
====


4.회고
====
Runtime: 244 ms, faster than 21.41% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 39.6 MB, less than 5.31% of JavaScript online submissions for Best Time to Buy and Sell Stock.