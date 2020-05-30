const solution = require("./top");

test('69574', () => {
        expect(solution([6,9,5,7,4])).toEqual([0,0,2,2,4]);
    });
test('3993572', () => {
        expect(solution([3,9,9,3,5,7,2])).toEqual([0,0,0,3,3,3,6]);
    });
test('1536765', () => {
        expect(solution([1,5,3,6,7,6,5])).toEqual([0,0,2,0,0,5,6]);
    });