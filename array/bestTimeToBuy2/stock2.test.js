const solution = require("./stock2");


test('[7,1,5,3,6,4]', ()  => {
	expect(solution([7,1,5,3,6,4]).toEqual(7);
});

test('[1,2,3,4,5]', ()  => {
	expect(solution([1,2,3,4,5])).toEqual(4);
});

test('[7,6,4,3,1]', ()  => {
	expect(solution([7,6,4,3,1])).toEqual(0);
});