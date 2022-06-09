function split(str, sep) {
    let arr = []
    for (let i = 0; i < str.length - sep.length+1; i++) {
        if (str.slice(i,i+sep.length) == sep) {
            arr.push(str.slice(0, i))
            str = str.slice(i + sep.length)
            i = 0
        }
    }
    arr.push(str)
    return arr
}

function join(arr, sep) {
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if (sep.length == 0) {
            res += arr[i]
        } else {
            res += arr[i] + sep
        }
    }

    res = res.slice(0, res.length - sep.length)
    return res
}