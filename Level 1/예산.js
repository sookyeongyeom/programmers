function solution(d, budget, max = 0) {
    d.sort((a, b) => a - b).forEach((v) => {
        if ((budget -= v) < 0) return;
        max++;
    });

    return max;
}

console.log(solution([2, 2, 3, 3], 10));
