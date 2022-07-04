function solution(arr) {
    // 오름차순 정렬
    arr.sort((a, b) => {
        return a > b ? 1 : -1;
    });
    const min = arr[0];

    // 제일 작은 수 제거
    arr.pop(indexOf(min));

    return arr.length ? arr : [-1];
}

console.log(solution([4, 3, 2, 1]));
