const solution = require("./matrixCellsinDistanceOrder");


test('1,2,0,0', ()  => {
	expect(solution(1,2,0,0)).toEqual(1,2,0,0);
});

test('2,2,0,1', ()  => {
	expect(solution(2,2,0,1)).toEqual([[0,1],[0,0],[1,1],[1,0]]);
});

test('2,3,1,2', ()  => {
	expect(solution(2,3,1,2)).toEqual([[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]);
});