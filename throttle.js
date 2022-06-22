function throttle(func, hold) {
    let isTh, args, saved 
    function wrapper() {
        if (isTh) {
            args = arguments
            saved = this
            return
        }
    }
}
