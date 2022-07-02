function solution(phone_number) {
    let mask_length = phone_number.length - 4;
    let mask = "*".repeat(mask_length);
    let answer = `${mask}${phone_number.slice(-4)}`;

    return answer;
}

console.log(solution("01054610645"));
