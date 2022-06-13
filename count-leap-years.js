const isLeapYear = (date) => date.getFullYear()%400 == 0 ? true : date.getFullYear()%100 == 0 ? false : date.getFullYear()%4 == 0 ? true : false

function countLeapYears(date){
    let count = 0
    const year = date.getFullYear();
    for (let i = year;i>4;i--){
        if(isLeapYear(i)){
            count++
        }
    }
    return count
}