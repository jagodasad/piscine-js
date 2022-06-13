function matchCron(pattern, date) {
    pattern = pattern.split(' ')
    if (pattern[0] !== '*' && date.getMinutes() !== Number(pattern[0])) return false
    if (pattern[1] !== '*' && date.getHours() !== Number(pattern[1])) return false
    if (pattern[2] !== '*' && date.getDate() !== Number(pattern[2])) return false
    if (pattern[3] !== '*' && date.getMonth() !== Number(pattern[3]) - 1) return false

    if (Number(pattern[4]) === 7) pattern[4] = 0
    if (pattern[4] !== '*' && date.getDay() !== Number(pattern[4])) return false

    return true
}