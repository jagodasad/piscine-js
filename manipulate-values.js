function filterValues(berry, func) {
    const res = {}
    Object.keys(berry).forEach(key => {
        if(func(berry[key])) res[key] = berry[key]
    })
    return res
}

function mapValues(berry, func) {
    const res = {}
    Object.keys(berry).forEach(key => {
        res[key] = func(berry[key])
    })
    return res
}

function reduceValues(berry, func, res = 0) {
    return Object.keys(berry).reduce((prev, val) => prev + berry[val], res)
}