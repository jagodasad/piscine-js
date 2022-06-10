function ionOut(str) {
    const iO = new RegExp("\\w+t(?=ion)","g")
    return str.match(iO) || []
}