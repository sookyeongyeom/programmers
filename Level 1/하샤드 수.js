function solution(x) {
    let str = x + "";
    let arr = x.split("");
    let sum = x.reduce((acc, cur) => {
        return (acc += Number(cur));
    }, 0);
    let answer = !(x % sum) ? true : false;
    return answer;
}

console.log(solution(10));
