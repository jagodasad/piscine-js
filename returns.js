function id (id) {
    return id
}

function getLength(i) {
    let x = (typeof i == 'string') ? i.length : (typeof i == 'object') ? i.length : 0;
    return x
}