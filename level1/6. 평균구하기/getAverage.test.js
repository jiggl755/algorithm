const solution = require("./getAverage");

test('1,2,3,4', () => {
        expect(solution([1,2,3,4])).toEqual(2.5);
    });
test('5', () => {
        expect(solution([5,5])).toEqual(5);
    });