function solution(nums) {
	// 일단 종류=>개수 형태로 맵을 만들고
	// 키의 개수가 n/2보다 크면 n/2가 답이고,
	// 그것보다 작으면 키의 개수가 답이겠네
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
		else map.set(nums[i], 1);
	}

	let answer;
	if (map.size >= nums.length / 2) answer = nums.length / 2;
	else answer = map.size;

	return answer;
}

console.log(solution([10, 20, 30, 10]));

/*
[10,20,30,10]
{
10:4,
20:1,
30:1
}
2개를 고르면 되니까
키 개수가 2개 이상이면 2이고
키 개수가 2개보다 작으면 1인거네
예를 들어
[10,10,20,20,20,20]
{
10:2,
20:4
}
이면 2인거지
*/

// function solution(nums) {
//   const max = nums.length / 2;
//   const arr = [...new Set(nums)];

//   return arr.length > max ? max : arr.length
// }

/*
ㅎㅎ...
해시를 이용해서 푼게 맞긴 한데
Set()을 이용하면 엄청 간단하네
카테고리에 갇히지말자 :3...
*/
