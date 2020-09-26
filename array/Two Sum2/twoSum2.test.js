const solution = require("./twoSum2");


test(' [2,7,11,15],9', ()  => {
	expect(solution( [2,7,11,15],9)).toEqual([1,2]);
});

test('[2,3,4],6', ()  => {
	expect(solution([2,3,4],6)).toEqual([1,3]);
});

test('[-1,0],-1', ()  => {
	expect(solution([-1,0],-1)).toEqual([1,2]);
});