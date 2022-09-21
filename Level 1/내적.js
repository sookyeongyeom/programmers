function solution(a, b) {
	// reduce()의 acc는 *반환*된 값을 지님!
	return a.reduce((acc, cur, idx) => (acc += a[idx] * b[idx]), 0);
}

console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
