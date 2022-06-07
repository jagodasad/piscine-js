function multiply(a,b) {
    if(a == 1) {
        return b
    } else if(a > 1) {
        return b + multiply(a-1, b)
    }
}

function divide(a,b) {
    let count = false
    let y = false
    if(a < 0 && b < 0) {
        a = -a
        b = -b
    }
    if(a < 0) {
        a = -a
        y = true
    }
    if(b < 0) {
        b = -b
        y = true
    }
    let result = a 
    while (result > b) {
        result -= b
        count++
    }
    if (y) {
        count = -count
    }
    return count
}

const modulo = (a,b) => {
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


// console.log(modulo(7,2))