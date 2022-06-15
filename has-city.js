function hasCity(country, arr) {
    return function(city) {
        if (arr.indexOf(city) === -1 ){
            return "is not a city from"
        } else {
            return "is a city from"
        }
    }
}