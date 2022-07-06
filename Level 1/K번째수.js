function solution(array, commands) {
    return commands.map((command) => {
        const [start, end, idx] = command;
        const newArr = array
            .filter((v, i) => i >= start - 1 && i <= end - 1)
            .sort((a, b) => a - b);
        return newArr[idx - 1];
    });
}

console.log(
    solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3],
        ]
    )
);

// function solution(array, commands, ans = [], temp = [], idx = 0) {
//     for (let i = 0; i < commands.length; i++) {
//         // 자르기
//         temp.push(...array.slice(commands[i][0] - 1, commands[i][1]));
//         // 정렬
//         temp.sort((a, b) => a - b);
//         // ans
//         ans.push(temp[commands[i][2] - 1]);
//         // 초기화
//         temp = [];
//     }
//     return ans;
// }
