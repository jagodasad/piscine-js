import { places } from "./where-do-we-go.data.js";

let location, sorted, compass
export const explore = () => {
    sorted = Array.from(places)
    sorted.sort((place1, place2) => {
        let coords1 = place1.coordinates.split(' ')[0]
        let coords2 = place2.coordinates.split(' ')[0]

        let type1 = coords1.match(/(?<=")\w*$/g)[0]
        let degs1 = Number(coords1.match(/^\w*(?=°)/g)[0])
        let mins1 = Number(coords1.match(/(?<=°)\w*(?=')/g)[0])
        let secs1 = Number(coords1.match(/(?<=').*(?=")/g)[0])

        let type2 = coords2.match(/(?<=")\w*$/g)[0]
        let degs2 = Number(coords2.match(/^\w*(?=°)/g)[0])
        let mins2 = Number(coords2.match(/(?<=°)\w*(?=')/g)[0])
        let secs2 = Number(coords2.match(/(?<=').*(?=")/g)[0])
    }
}