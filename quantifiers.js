function every(arr, func) {
    let ans = true
    for(let x = 0; x < arr.length; x++) {
        ans = ans && func(arr[x], x, arr)
    }
    return ans
}

function some(arr, func) {
    let ans = false
    for(let x = 0; x < arr.length; x++) {
        ans = ans || func(arr[x], x, arr)
    }
    return ans
}

function none(arr, func) {
    return !some(arr,func)
}