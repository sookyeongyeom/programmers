function solution(arr1, arr2) {
    // arr1 내부를 순회하면서 arr2의 값 더해주기
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            arr1[i][j] += arr2[i][j];
        }
    }

    return arr1;
}

console.log(
    solution(
        [
            [1, 2],
            [2, 3],
        ],
        [
            [3, 4],
            [5, 6],
        ]
    )
);
