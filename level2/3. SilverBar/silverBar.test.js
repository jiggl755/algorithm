const solution = require("./silverBar");

test('1', () => {
        expect(solution('()(((()())(())()))(())')).toBe(17);
    });