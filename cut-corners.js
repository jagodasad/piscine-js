const modulo = (a, b) => {
    let s1 = 1;
    let s2 = 1;
    if (b < 0) {
        b = -b;
        // s1 = -1;
    }
    if (a < 0) {
        a = -a;
        s2 = -1;
    }
    while (a >= b) {
        a -= b;
    }
    if (s1 < 0 && s2 < 0) {
        return a;
    }
    if (s1 < 0 || s2 < 0) {
        return -a;
    }
    return a;
};

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

