const solution = require("./pTriangle");


test('5', () => {
  expect(solution(5)).toStrictEqual([
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
  ]);
});