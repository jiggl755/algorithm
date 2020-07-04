const solution = require("./HarshadNumber");

test('10', () => {
        expect(solution(10)).toBe(true);
    });
test('12', () => {
        expect(solution(12)).toBe(true);
    });
test('11', () => {
        expect(solution(11)).toBe(false);
    });
test('13', () => {
        expect(solution(13)).toBe(false);
    });
