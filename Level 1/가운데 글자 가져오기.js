function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 ? 1 : 2);
}

console.log(solution('sookyeong!'));

// function solution(s, len = s.length) {
//     return len % 2 ? s[parseInt(len / 2)] : s[len / 2 - 1] + s[len / 2];
// }
