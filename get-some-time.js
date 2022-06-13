function firstDayWeek(week, year) {
    let firstMonday = new Date(year)
    while (firstMonday.getDay() !== 1) {
        firstMonday.setDate(firstMonday.getDate() + 1)
    }

    if (firstMonday.getDate() !== 1) week--
    const x = new Date(firstMonday.getTime() + ((week - 1) * 7 * 24 * 60 * 60 * 1000))
    return formatDate(x)

}

function formatDate(y) {
    return y.toISOString().slice(0, 10).split('-')
}