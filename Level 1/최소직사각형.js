function solution(sizes, maxW = 0, maxH = 0) {
    sizes.forEach((v) => {
        v.sort((a, b) => a - b);
        maxW = maxW > v[0] ? maxW : v[0];
        maxH = maxH > v[1] ? maxH : v[1];
    });
    return maxW * maxH;
}

console.log(
    solution([
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40],
    ])
);
