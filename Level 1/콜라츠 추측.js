function solution(num) {
    if (num === 1) return 0;

    let cnt = 0;
    while (true) {
        if (num === 1) break;
        if (!(num % 2)) num = num / 2;
        else num = num * 3 + 1;
        cnt++;
    }

    return cnt < 500 ? cnt : -1;
}
