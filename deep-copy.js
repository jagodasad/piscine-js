function deepCopy(obj) {
    if (typeof obj !== 'object' || Object.keys(obj).length === 0) return obj

    let copy = {}
    if (Array.isArray(obj)) copy = []
}