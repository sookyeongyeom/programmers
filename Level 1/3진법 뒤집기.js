function solution(n) {
    const rev = n.toString(3).split('').reverse().join('');
    return parseInt(rev, 3);
}

console.log(solution(125));
