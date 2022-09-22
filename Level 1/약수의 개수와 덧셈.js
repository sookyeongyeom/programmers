function solution(left, right) {
	let answer = 0;
	for (let i = left; i < right + 1; i++) {
		let divisor = [];
		for (let j = 1; j < i + 1; j++) if (i % j === 0) divisor.push(j);
		answer += divisor.length % 2 === 0 ? i : -i;
	}
	return answer;
}

console.log(solution(24, 27));

// 제곱근이 정수면 약수의 갯수는 홀수다
// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }
