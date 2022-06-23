function interpolation(object) {
    let step = 0
    let interval = setInterval(() => {
        let x = object.start = step * (object.end - object.start) / object.step
        let y = (step + 1) * object.duration / object.step
        object.callback([x, y])
        step++
        if (step === object.step) clearInterval(interval)
    }, object.duration / object.step);
}