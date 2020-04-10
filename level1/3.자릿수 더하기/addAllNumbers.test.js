const solution = require("./addAllNumbers");

test('123', () => {
        expect(solution(123)).toBe(6);
    });
test('45678', () => {
        expect(solution(45678)).toBe(30);
    });