const slice = (x, y,z) => {
    let res = []

    if (z === undefined) {
        z = x.length
    } else if (z < 0) {
        z = x.length + z
    }

    if (y < 0) {
        y = x.length + y
    } 

    for (let i = y; i < z;i++) {
        res.push(x[i])
    }

    return typeof x === 'string' ? res.join('') : res 
}