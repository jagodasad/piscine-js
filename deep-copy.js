function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) return obj

    let copy = {}
    if (Array.isArray(obj)) copy = []

    for (const key in obj) {
        copy[key] = deepCopy(obj[key])

    if (Object.isFrozen(obj[key]))
    Object.freeze(copy[key])
    }
    return copy
}