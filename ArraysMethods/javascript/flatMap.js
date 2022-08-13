const pairs = [
    [2, 4],
    [8, 2],
    [4, 9]
];

const result = pairs.flatMap(function (pair){
    return [
        pair[0] + pair[1]
    ]
});

console.log(result);