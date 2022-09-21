function solution(a, b) {
	const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const prevMonthDays = Array(a - 1)
		.fill(0)
		.reduce((acc, cur, idx) => (acc += month[idx]), 0);
	const accMonthDays = prevMonthDays + b;
	const whichDay = accMonthDays % 7;
	return ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'][whichDay];
}

console.log(solution(5, 24));

// Date 객체 사용해도 됨
