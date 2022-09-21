function solution(survey, choices) {
	let scores = new Map([
		['R', 0],
		['T', 0],
		['C', 0],
		['F', 0],
		['J', 0],
		['M', 0],
		['A', 0],
		['N', 0],
	]);
	survey.map((v, i) => {
		if (choices[i] < 4) scores.set(v[0], scores.get(v[0]) + (4 - choices[i]));
		else if (choices[i] > 4) scores.set(v[1], scores.get(v[1]) + (choices[i] - 4));
	});

	let personality = ['RT', 'CF', 'JM', 'AN'];
	let answer = '';
	personality.map((v, i) => {
		const token = scores.get(v[0]) >= scores.get(v[1]) ? v[0] : v[1];
		answer += token;
	});

	return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));

/*
이거야말로 해시로 접근하는게 좋지 않을까?
AN, 5가 들어오면 N 1점이니까 N:1 이렇게 맵핑해주고
CF, 3이 들어오면 C 1점이니까 C:1 이렇게 맵핑
그럼 맵핑 결과가 8개가 생기잖아
그 결과를 RT, CF, JM, AN으로 뽑아내주고
둘 중 점수가 높은걸로 선택해주면 될 듯
점수가 같으면 사전순이니까 그건 미리 결정해주자 (뽑아낼 때 사전순으로 뽑아내기)

점수 매기는 방법은
1,2,3이면 앞에꺼, 4는 패스, 5,6,7이면 뒤에꺼
*/

// function solution(survey, choices) {
//     const MBTI = {};
//     const types = ["RT","CF","JM","AN"];

//     types.forEach((type) =>
//         type.split('').forEach((char) => MBTI[char] = 0)
//     )

//     choices.forEach((choice, index) => {
//         const [disagree, agree] = survey[index];

//         MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
//     });

//     return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
// }
