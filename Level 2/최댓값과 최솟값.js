function solution(s) {
	const nums = s.split(' ');
	return [Math.min(...nums), Math.max(...nums)].join(' ');
}

console.log(solution('1 2 3 4'));
