function isValid(date){
    if(isNaN(date)|| date == 0){
        return false
    }else{
        return true
    }
}

function isAfter(date1, date2) {
    if (!isValid(date1)) return false
    if (!isValid(date2)) return false

    return date1 > date2
}

function isBefore(date1, date2) {
    if (!isValid(date1)) return false
    if (!isValid(date2)) return false

    return date1 < date2
}

function isFuture(date) {
    if (!isValid(date)) return false

    return date > Date.now()
}

function isPast(date) {
    if (!isValid(date)) return false

    return date < Date.now()
}

console.log(isValid(''))