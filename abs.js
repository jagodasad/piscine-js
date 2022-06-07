function isPositive(a) {
    return a > 0
}

function abs(a) {
    if (a < 0) {
        return a * -1
    }
    if (a == 0) {
        return 0
    }
    return a
}

// console.log(abs(456))