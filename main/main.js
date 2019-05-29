//2公里内
function getBase(parkTime) {
    return 6 +  0.25 * parkTime
}
//2到8公里
function getOver2Less8(distance) {
    if (distance < 2) return 0
    else if (distance <= 8) return  0.8 * (distance - 2)
    else return 0.8 * (8 - 2)
}
//超过8公里
function getOver8(distance) {
    if (distance <= 8) return 0
    return 0.8 * (1 + 0.5) * (distance - 8)
}

module.exports = function main(inputs) {
    //取整
    return Math.round(
        getBase(inputs.parkTime) +
        getOver2Less8(inputs.distance) +
        getOver8(inputs.distance)
    )

}

