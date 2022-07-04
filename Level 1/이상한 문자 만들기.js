function solution(s) {
    let idx = 0;
    let arr = s.split('').map((v) => {
        if (v === ' ') {
            idx = 0;
            return ' ';
        }
        if (!(idx % 2)) {
            idx++;
            return v.toUpperCase();
        } else {
            idx++;
            return v;
        }
    });

    return arr.join('');
}

console.log(solution('try hello world'));
