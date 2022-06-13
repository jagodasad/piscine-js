function getWeekDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

// function isFriday(date) {
//     let friday = getWeekDay(date)
//     if(friday = 'Friday') {
//         return true
//     } else {
//         return false
//     }
// }
const isFriday = (date) => date.getDay() == 5

function isWeekend(date) {
    let friday = getWeekDay(date)
    if(friday === 'Saturday' || friday === 'Sunday') {
        return true
    } else {
        return false
    }
}

function isLeapYear(date){
    var result; 
    date = parseInt(document.getElementById("isYear").value);
    if (years/400){
      result = true
    }
    else if(years/100){
      result = false
    }
    else if(years/4){
      result= true
    }
    else{
      result= false
    }
    return result
 }

function isLastDayOfMonth(date) {
    let month = date.getMonth()
    date.setHours(30)
    let getMonth = date.getMonth()
    if(month != getMonth) {
        return true
    } else {
        return false
    }
}