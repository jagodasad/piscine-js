function filterKeys(berry, func) {
    const res = {}
    Object.keys(berry).forEach(key => {
        if (func(key)) res[key] = berry[key]
    })
    return res
}

function mapKeys(berry, func) {
    const res = {}
    Object.keys(berry).forEach(key => {
        res[func(key)] = berry[key]
    })
    return res
}

function reduceKeys(berry, ...args) {
    return Object.keys(berry).reduce(...args)
}