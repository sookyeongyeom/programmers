function solution(answers) {
    const a = '12345'
        .repeat(Math.ceil(answers.length / 5))
        .slice(0, parseInt(answers.length))
        .split('')
        .map((v) => Number(v));

    const b = '21232425'
        .repeat(Math.ceil(answers.length / 8))
        .slice(0, parseInt(answers.length))
        .split('')
        .map((v) => Number(v));

    const c = '3311224455'
        .repeat(Math.ceil(answers.length / 10))
        .slice(0, parseInt(answers.length))
        .split('')
        .map((v) => Number(v));

    const scoreA = a.filter((v, i) => answers[i] === v).length;
    const scoreB = b.filter((v, i) => answers[i] === v).length;
    const scoreC = c.filter((v, i) => answers[i] === v).length;

    const soopoja = [scoreA, scoreB, scoreC];
    const winner = [];
    soopoja.map((v, i) => {
        if (v === Math.max(...soopoja)) winner.push(i + 1);
    });

    return winner.sort((a, b) => a - b);
}

console.log(solution([1, 3, 2, 4, 2]));
