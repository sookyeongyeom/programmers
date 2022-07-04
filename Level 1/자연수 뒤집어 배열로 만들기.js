function solution(n) {
    let arr = String(n)
        .split('')
        .map((v) => Number(v));
    arr.reverse();

    return arr;
}

console.log(solution(12345));
