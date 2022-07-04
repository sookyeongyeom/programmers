function solution(n) {
    return '수박'.repeat(n / 2 + 1).slice(0, n);
}

console.log(solution(3));
