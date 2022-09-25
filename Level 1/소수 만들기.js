function solution(nums) {
	let answer = 0;

	for (let i = 0; i < nums.length; i++)
		for (let j = i + 1; j < nums.length; j++)
			for (let k = j + 1; k < nums.length; k++) {
				const num = nums[i] + nums[j] + nums[k];
				if (isPrime(num)) ++answer;
			}

	return answer;
}

function isPrime(num) {
	for (let i = 2; i * i <= num; i++) if (!(num % i)) return false;
	return true;
}

console.log(solution([1, 2, 7, 6, 4]));

/*
짝수짝수홀수
홀수홀수홀수
*/
