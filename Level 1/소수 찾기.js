function solution(n) {
	const answer = [2];
	for (let i = 2; i <= n; i++) {
		// 짝수 없앰
		if (i % 2 === 0) continue;
		if (isPrime(i)) answer.push(i);
	}
	return answer.length;
}

// sqrt(n) = 약수의 중간값까지만 판별
function isPrime(n) {
	for (let i = 2; i * i <= n; i++) if (!(n % i)) return false;
	return true;
}

console.log(solution(10));

/*
시간 개선
짝수는 애초에 제외하고 시작하면 어떨까?
*/

/*
1부터 n사이의 소수의 개수 반환
소수는 1과 자신으로만 나누어지는 수
1은 소수가 아님
*/

// const answer = [2];
// const odd = [...Array(n).keys()].map((v) => ++v).filter((v) => v !== 1 && v % 2 !== 0);

// for (num of odd) {
// 	let isDiv = true;
// 	for (i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			isDiv = false;
// 			break;
// 		}
// 	}
// 	if (isDiv) answer.push(num);
// }

// return answer.length;

// let answer = [];
// for (let i = 2; i <= n; i++) {
// 	let divisor = 0;
// 	for (let j = 1; j <= i; j++) {
// 		if (i % j === 0) ++divisor;
// 		if (divisor > 2) break;
// 	}
// 	if (divisor === 2) answer.push(i);
// }
// return answer.length;
