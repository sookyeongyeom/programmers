function solution(arr, divisor) {
    const ans = arr.filter((v) => !(v % divisor)).sort((a, b) => a - b);
    return ans.length ? ans : [-1];
}

console.log(solution([9, 7, 10], 5));
