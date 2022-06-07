function sign(a) {
    if (a > 0) {
        return 1
    }
    if (a < 0) {
        return -1
    } else {
        return 0
    }
}

function sameSign(a,b) {
    let aa = ( a > 0)
    let bb = (b > 0)
    if ((a == 0) && (b != 0)) {
        return false
    }
    if ((a != 0) && (b == 0)) {
        return false
    }
    if ((a == 0) && (b == 0)) {
        return true
    }
    if ((aa && bb) || (!aa && !bb)) {
        return true
    } else {
        return false
    }
}

// console.log(sameSign(-12, -2))