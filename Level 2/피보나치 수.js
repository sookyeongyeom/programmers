function solution(n) {
	if (n === 0) return 0;
	if (n === 1) return 1;
	// 피보나치는 수가 기하급수적으로 커지므로 BigInt형을 사용해준다!
	let before2 = 0n;
	let before1 = 1n;
	let current;
	for (let i = 0; i < n - 1; i++) {
		current = before2 + before1;
		before2 = before1;
		before1 = current;
	}
	// BigInt는 BigInt끼리만 연산가능!
	return current % 1234567n;
}

console.log(solution(10));

// function solution(n) {
// 	return fibo(n) % 1234567;
// }

// function fibo(n) {
// 	if (n === 0) return 0;
// 	if (n === 1) return 1;
// 	return fibo(n - 2) + fibo(n - 1);
// }

/*
흠
피보나치 알고리즘을 구현해야되고
들어온 n만큼 연산해서 n번째 수를 구한 후
F(n) %= 1234567 리턴해주면 끗
*/
