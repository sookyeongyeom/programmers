function solution(n, arr1, arr2) {
	let answer = [];
	arr1.map((v, i) => {
		answer.push(arr1[i] | arr2[i]);
	});

	answer.map((v, i) => {
		const token = String(v.toString(2)).padStart(n, '0');
		answer[i] = token.replace(/1/g, '#').replace(/0/g, ' ');
	});
	return answer;
}

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);

/* 
흠
일단 받아서 2진수로 변환한걸 문자열로 변환하고
그걸 #이랑 공백으로 변환해주면 되겠네

아항 근데 두개 겹친댔지?
그럼 비트로 접근해야되네
OR 연산하면 되는거 아녀

1. 각 배열의 같은 순서 값에 대해 OR 연산
2. 2진수로 변환
3. 1을 #으로, 0을 공백으로 변환
*/
