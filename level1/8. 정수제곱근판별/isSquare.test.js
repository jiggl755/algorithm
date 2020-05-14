const solution = require("./isSquare");

test('121', () => {
        expect(solution(121)).toEqual(144);
    });
test('3', () => {
        expect(solution(3)).toEqual(-1);
    });
test('4', () => {
        expect(solution(4)).toEqual(9);
    });