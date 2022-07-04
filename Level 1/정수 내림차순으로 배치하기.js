function solution(n) {
    let arr = String(n).split('');
    arr.sort((a, b) => (a < b ? 1 : -1));

    return Number(arr.join(''));
}

console.log(solution(118372));
