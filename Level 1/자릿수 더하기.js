function solution(n) {
    let sum = String(n)
        .split('')
        .map((v) => Number(v))
        .reduce((a, b) => (a += b));

    return sum;
}

console.log(solution(123));
