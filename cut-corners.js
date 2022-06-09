function modulo(a, b) {
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

const trun = (n) => {
    let m = modulo(n, 1);
    if (m !== 0) {
        return n - m;
    } else {
        return n;
    }
};
const trunc = (n) => {
    if (n > 0xfffffffff) {
        n -= 0xfffffffff;
        return trun(n) + 0xfffffffff;
    } else {
        return trun(n);
    }
};

function round(num) {
    if (num > 0) {
        if (num - trunc(num) >= 0.5) return ceil(num)
        return floor(num)
    }
    if (trunc(num) - num >= 0.5) return floor(num)
    return ceil(num)
}

function ceil(num) {
    if(num > 0 && num !== trunc(num)) return trunc(num) + 1
    else return trunc(num)
}

function floor(num) {
    if (num > 0 || num === trunc(num)) return trunc(num)
    else return trunc(num) -1
}




