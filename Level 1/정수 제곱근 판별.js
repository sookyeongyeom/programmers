function solution(n) {
    return isSqrt(n) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

function isSqrt(n) {
    return Number.isInteger(Math.sqrt(n)) ? true : false;
}

console.log(solution(121));
