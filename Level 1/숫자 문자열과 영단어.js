function solution(s) {
	return +s
		.replaceAll(/zero/g, '0')
		.replaceAll(/one/g, '1')
		.replaceAll(/two/g, '2')
		.replaceAll(/three/g, '3')
		.replaceAll(/four/g, '4')
		.replaceAll(/five/g, '5')
		.replaceAll(/six/g, '6')
		.replaceAll(/seven/g, '7')
		.replaceAll(/eight/g, '8')
		.replaceAll(/nine/g, '9');
}

console.log(solution('23four5six7'));

// function solution(s) {
// 	let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
// 	var answer = s;

// 	for (let i = 0; i < numbers.length; i++) {
// 		let arr = answer.split(numbers[i]);
// 		answer = arr.join(i);
// 	}

// 	return Number(answer);
// }
