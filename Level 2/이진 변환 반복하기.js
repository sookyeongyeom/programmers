function solution(s) {
	let parseCnt = 0;
	let zerosCnt = 0;
	while (s !== '1') {
		const { zeros, x } = parse(s);
		s = x;
		zerosCnt += zeros;
		++parseCnt;
	}
	return [parseCnt, zerosCnt];
}

function parse(x) {
	const zeros = x.match(/0/g) ? x.match(/0/g).length : 0;
	x = x.replace(/0/g, '').length.toString(2);
	return { zeros, x };
}

console.log(solution('110010101001'));

/*
0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다.
s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.
*/

// (s.match(/0/g)||[]).length 이거 지렷당
// 매치 결과가 없으면 null이 반환되므로 length 연산이 안되는 것을 방지한 것
// 매치 결과 없으면 빈배열
// function solution(s) {
//     var answer = [0,0];
//     while(s.length > 1) {
//         answer[0]++;
//         answer[1] += (s.match(/0/g)||[]).length;
//         s = s.replace(/0/g, '').length.toString(2);
//     }
//     return answer;
// }
