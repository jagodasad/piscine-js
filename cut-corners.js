function round(a) {
    let x
    let y
    let z = false
    if (a < 0) {
        a = -a
        z = true
    }
    x = a % 1
    if (x > 0.5) {
        y = a + 1 - x
    } else {
        y = a - x
    }
    if (z) {
        y = -y
    }
    return y
}
function ceil(a) {
    let x
    let y
    x = a % 1
    if (a > 0 && x != 0) {
        return y = a + 1 - x
    } else {
        return y = a - x
    }
    return a
}
function floor(a) {
    let x
    let y
    x = a % 1
    if (a > 0 && x != 0) {
        return y = a - x
    } else if (x === 0) {
        return a
    } else {
        let x
        x = 1 + x
        return y = a - x
    }
    return a
}
function trunc(a) {
    let x
    let y
    x = a % 1
    if (a > 0 && x != 0) {
        return y = a - x
    } else {
        let x
        x = 1 + x
        return y = a - x
    }
    return a
}