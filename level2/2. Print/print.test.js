const solution = require("./print");

test('2132', () => {
        expect(solution([2, 1, 3, 2],2)).toEqual(1);
    });
test('5', () => {
        expect(solution([1, 1, 9, 1, 1, 1],0)).toEqual(5);
    });