function solution(arr) {
    let answer = arr.reduce((acc, cur) => {
        return (acc += cur);
    });
    answer /= arr.length;

    return answer;
}

console.log(solution([1, 2, 3]));
