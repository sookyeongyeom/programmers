function solution(s) {
	// 문자열은 이터러블이라 스플릿 안해줘도됨!!!
	const target = s.split('');
	let mustBeZero = 0;
	for (const v of target) {
		if (v === '(') ++mustBeZero;
		else if (mustBeZero === 0) return false;
		else --mustBeZero;
	}
	return mustBeZero === 0;
}

console.log(solution(')()('));

/*
열림갯수가 0인데 닫힘이 나오면 안됨 - 바로 false리턴
위 조건을 만족하면서 열림기호와 닫힘기호의 수가 같으면 됨
*/
