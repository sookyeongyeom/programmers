function solution(s) {
	return +s
		.replace(/zero/g, '0')
		.replace(/one/g, '1')
		.replace(/two/g, '2')
		.replace(/three/g, '3')
		.replace(/four/g, '4')
		.replace(/five/g, '5')
		.replace(/six/g, '6')
		.replace(/seven/g, '7')
		.replace(/eight/g, '8')
		.replace(/nine/g, '9');
}

console.log(solution('23four5six7six'));

// function solution(s) {
// 	let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// 	var answer = s;

// 	for (let i = 0; i < numbers.length; i++) {
// 		let arr = answer.split(numbers[i]);
// 		answer = arr.join(i);
// 	}

// 	return Number(answer);
// }
