const multiply = (a, b) => {
    if (b == 0 || a == 0) {
        return 0
    }

    const trs = a;
    if (b < 0) {
        while (b !== 1) {
            a -= trs
            b++
        }
    } else {
        while (b !== 1) {
            a += trs
            b--
        }
    }



    return a
}

const divide = (a, b) => {
    let result = 0
    let isNegative = false

    if (a < 0 && b < 0) {
        a = multiply(a, -1)
        b = multiply(b, -1)

    } else if (a < 0) {
        isNegative = true
        a = multiply(a, -1)
    } else if (b < 0) {
        isNegative = true
        b = multiply(b, -1)
    }

    while (a > 0) {
        a -= b
        if (a < 0) {
            break
        }

        result++
    }

    return isNegative ? result == 0 ? 0 : multiply(result, -1) : result
}

const modulo = (a, b) => {
    let isNegative = false

    if (a < 0 && b < 0) {
        isNegative = true
        a = multiply(a, -1)
        b = multiply(b, -1)

    } else if (a < 0) {
        isNegative = true
        a = multiply(a, -1)

    } else if (b < 0) {
        b = multiply(b, -1)

    } else {
        if (a < b) {
            return a
        }
    }

    while (a !== 1) {
        a -= b
        if (a < b) {

            return isNegative ? a == 0 ? 0 : multiply(a, -1) : a
        }
    }

    return isNegative ? a == 0 ? 0 : multiply(a, -1) : a

}