function interpolation(object) {
    let step = 0
    let interval = setInterval(() => {
        let d = object.start = step * (object.end - object.start) / object.step
        let t = (step + 1) * object.duration / object.step
        object.callback([d, t])
        step++
        if (step === object.step) clearInterval(interval)
    }, object.duration / object.step);
}