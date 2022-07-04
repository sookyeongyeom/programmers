function solution(arr) {
    const min = Math.min(...arr);
    const newArr = arr.filter((n) => n !== min);

    return newArr.length ? newArr : [-1];
}

console.log(solution([4, 3, 2, 1]));
