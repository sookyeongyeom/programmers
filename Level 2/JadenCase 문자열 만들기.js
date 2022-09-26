function solution(s) {
	const answer = s.split('');
	// 첫 글자는 무조건 어퍼케이스
	// 공백위치 찾아서 다음 알파벳을 어퍼케이스로
	let isAfterWhite = true;
	answer.map((v, i) => {
		if (isAfterWhite) answer[i] = v.toUpperCase();
		else answer[i] = v.toLowerCase();
		if (v === ' ') isAfterWhite = true;
		else isAfterWhite = false;
	});
	return answer.join('');
}

console.log(solution('for the last week'));

// ㅋㅋ 공백 기준으로 자르고 공백으로 조인하면 간단~
// function solution(s) {
//     return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
// }
