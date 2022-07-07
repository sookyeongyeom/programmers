function solution(price, money, count) {
    const cost = Array(count)
        .fill(price)
        .map((v, i) => v * (i + 1))
        .reduce((a, b) => (a += b));
    return money - cost < 0 ? Math.abs(money - cost) : 0;
}

console.log(solution(3, 20, 4));
