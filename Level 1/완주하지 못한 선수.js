function solution(participant, completion) {
    const map = new Map();

    for (let i = 0; i < participant.length; i++) {
        let p = participant[i];
        let c = completion[i];

        map.set(p, (map.get(p) || 0) + 1);
        map.set(c, (map.get(c) || 0) - 1);
    }

    for (let [k, v] of map) if (v > 0) return k;
}

console.log(
    solution(
        ['marina', 'josipa', 'nikola', 'filipa', 'filipa'],
        ['josipa', 'filipa', 'marina', 'nikola']
    )
);

// function solution(participant, completion) {
//     participant.sort();
//     completion.sort();
//     for (let i = 0; i < participant.length; i++) {
//         if (participant[i] !== completion[i]) {
//             return participant[i];
//         }
//     }
// }
