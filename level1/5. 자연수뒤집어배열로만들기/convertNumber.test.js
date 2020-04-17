const solution = require("./convertNumber");

test('12', () => {
        expect(solution(12)).toEqual([2,1]);
    });
test('2005', () => {
        expect(solution(2005)).toEqual([5,0,0,2]);
    });