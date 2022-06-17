export const compose = (event) => {
    let key = event?.key
    let notes = document.getElementsByClassName('note')

    if (key === 'Backspace') {
        if (notes.length > 0) Array.from(notes).pop().remove()
    } else if (key === 'Escape') {
        if (notes.length > 0) {
            Array.from(document.getElementsByClassName('note')).forEach(el => {
                el.remove()
            })
        }
    }
}