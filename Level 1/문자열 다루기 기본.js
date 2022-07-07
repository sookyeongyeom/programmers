function solution(s) {
    return /^\d{4}$|^\d{6}$/g.test(s);
}

console.log(solution('a234b3'));

// function solution(s) {
//     if (!(s.length == 4 || s.length == 6)) return false;
//     s = s.replace(/\d/g, '');
//     return s.length ? false : true;
// }
