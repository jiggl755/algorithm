const solution = require("./largestTriangle");


test('[2,1,5]', ()  => {
	expect(solution([2,1,5]).toEqual(5);
});
test('[1,2,1]', ()  => {
	expect(solution([1,2,1]).toEqual(0);
});
test('[3,2,3,4]', ()  => {
	expect(solution([3,2,3,4]).toEqual(10);
});
test(' [3,6,2,3]', ()  => {
	expect(solution([3,6,2,3]).toEqual(8);
});