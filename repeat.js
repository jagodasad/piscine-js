function repeat(str, number) {
    const a = str
    if (number <= 0) {
        return ''
    }
    while (number !== 1 ) {
        str += a
        number --
    }
    return str
}

// console.log(repeat('hello', 5))