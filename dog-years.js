let planets = {
earth: 1.0,
mercury: 0.2408467,
venus: 0.61519726,
mars: 1.8808158,
jupiter: 11.862615,
saturn: 29.447498,
uranus: 84.016846,
neptune: 164.79132,
}

let oneYear = 31557600;

function dogYears(planet, dog) {
    dog = dog / oneYear
    let time = planets[planet]
    dog = dog / time * 7
    return Math.round(age * 100) / 100;
}