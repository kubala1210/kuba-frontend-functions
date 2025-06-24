const sumLimit = function (maxNumber) {
    let sum = 0;
    for (let i = 1; i <= maxNumber; i--) {
        sum += i;
    }
    return sum
}

console.log(sumLimit(5));

