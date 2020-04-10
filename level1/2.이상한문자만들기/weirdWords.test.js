const solution = require("./weirdWords");

test('hello new world', () => {
        expect(solution('hello new world')).toBe('HeLlO NeW WoRlD');
    });
test('wanna go home', () => {
        expect(solution('wanna go home')).toBe('WaNnA Go HoMe');
    });
