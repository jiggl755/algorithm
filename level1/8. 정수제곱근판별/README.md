1.이해
====
입력된 양수n이 어떤 양수 x 의 제곱이면 x+1의 제곱을 리턴 아니면 -1을 리턴

2.계획
===
x = Math.sqrt(n)해서 값이 딱떨어지면 x+1를 제곱해서 리턴 

3.실행
====
test('121', () => {
        expect(solution(121)).toEqual(144);
    });
test('3', () => {
        expect(solution(3)).toEqual(-1);
    });
test('4', () => {
        expect(solution(4)).toEqual(9);
    });

4.회고
====
