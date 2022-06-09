function flat(arr, dep = 1) {
    let result = [];

    (function flatter(arr, dep) {
        arr.forEach(function(el) {
            if (Array.isArray(el) && dep > 0) flatter(el, dep -1);
            else result.push(el);
        });
    })(arr,dep);
    return result
}