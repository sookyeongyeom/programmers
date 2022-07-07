function solution(new_id) {
    const answer = new_id
        .toLowerCase()
        .replace(/[^\w-.]/g, '') // \w: 밑줄, 숫자, 영문
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/g, '') // OR
        .replace(/^$/g, 'a') // 빈 문자열
        .slice(0, 15)
        .replace(/\.$/g, '');
    return answer.padEnd(3, answer[answer.length - 1]); // 뒷쪽으로 확장
}

console.log(solution('abcdefghijklmn.p'));
