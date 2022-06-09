function reverse(x) {
    if (typeof x === "string") {
        let result = ""
        for (let i = x.length - 1; i >= 0; i--) {
            result += x[i]
        }
        return result
    }
    if (Array.isArray(x)) {
        let result = []
        for (let i = x.length - 1; i >= 0; i--) {
            result.push(x[i])
        }
        return result
    }
}