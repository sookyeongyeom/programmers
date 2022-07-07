function solution(numbers) {
    let sum = (9 * 10) / 2;
    numbers.forEach((v) => (sum -= v));
    return sum;
}

console.log(solution([5, 8, 4, 0, 6, 7, 9]));
