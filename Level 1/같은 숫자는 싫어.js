function solution(arr, prev = -1, ans = []) {
    arr.forEach((e) => {
        if (prev != e) {
            ans.push(e);
            prev = e;
        }
    });
    return ans;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
