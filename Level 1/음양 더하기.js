function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === false) absolutes[i] *= -1;
        answer += absolutes[i];
    }

    return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));
