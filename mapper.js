function map(arr,func){
    let x = []
    let y = 0
    while(y < arr.length){
        let  ina = 0
        ina = func(arr[y],y,arr)
        x.push(ina)
        y++
    }
    return x
}
function flatMap(arr, fun){
    let x = []
    let mapres = map(arr,fun)
    for (let map of mapres) {
        if (Array.isArray(map)) {
            for (let m of map) {
                x.push(m)
            }
        } else {
            x.push(map)
        }
    }
    return x
}  