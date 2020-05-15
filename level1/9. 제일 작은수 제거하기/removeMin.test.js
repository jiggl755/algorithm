const solution = require("./removeMin");

test('[4,3,2,1]', () => {
        expect(solution([4,3,2,1])).toEqual([4,3,2]);
    });
test('[4,3,2,5,6]', () => {
        expect(solution([4,3,2,5,6])).toEqual([4,3,5,6]);
    });
test('[10]', () => {
        expect(solution([10])).toEqual([-1]);
    });