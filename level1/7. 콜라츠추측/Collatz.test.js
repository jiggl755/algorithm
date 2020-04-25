const solution = require("./Collatz");

test('6', () => {
        expect(solution(6)).toEqual(8);
    });
test('16', () => {
        expect(solution(16)).toEqual(4);
    });
test('626331', () => {
        expect(solution(626331)).toEqual(-1);
    });