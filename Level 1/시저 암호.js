function solution(s, n) {
    return s
        .split('')
        .map((v) => caesar(v, n))
        .join('');
}

function caesar(v, n) {
    if (v === ' ') return ' ';
    // 대문자 (65~90)
    if (v <= 'Z') {
        if (v.charCodeAt(0) + n > 'Z'.charCodeAt(0))
            return String.fromCharCode(v.charCodeAt(0) + n - 26);
        else return String.fromCharCode(v.charCodeAt(0) + n);
    }
    // 소문자 (97~122)
    else {
        if (v.charCodeAt(0) + n > 'z'.charCodeAt(0))
            return String.fromCharCode(v.charCodeAt(0) + n - 26);
        else return String.fromCharCode(v.charCodeAt(0) + n);
    }
}

console.log(solution('a B Z', 4));

// solution("P", 15) result "E"
