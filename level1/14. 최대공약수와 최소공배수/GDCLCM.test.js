const solution = require("./GDCLCM");


test('3,12', () => {
        expect(solution(3,12)).toEqual([3,12]);
    });
test('2,5', () => {
        expect(solution(2,5)).toEqual([1,10]);
    });