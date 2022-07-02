function solution(x, n) {
    let dist = x;
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(x);
        x += dist;
    }

    return answer;
}

console.log(solution(2, 5));
