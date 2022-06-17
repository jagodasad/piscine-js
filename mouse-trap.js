

let lastCircle
export const createCircle = (e) => {
    if (!e) return
    isBoxed = false

    let div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.top = `${e.y - 25}px`
    div.style.left = `${e.x - 25}px`

    div.style.background = 'white'
    div.classList.add('circle')
    lastCircle = div

    document.body.append(div)
    moveCircle(e)
}

let isBoxed = false
export const moveCircle = (e) => {
    if (lastCircle) {
        if (!isBoxed && box.left < e.x && e.x < box.right && box.top < e.y && e.y < box.bottom) {
            isBoxed = true
            lastCircle.style.background = `var(--purple)`
        }
        let x = e.x
        let y = e.y

        if (isBoxed) {
            if (y < box.top) y = box.top
            else if (y > box.bottom) y = box.bottom

            if (x < box.left) x = box.left
            else if (x > box.right) x = box.right
        }

        lastCircle.style.top = `${y - 25}px`
        lastCircle.style.left = `${x - 25}px`
    }
}