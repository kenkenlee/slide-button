basic.forever(function () {
    basic.showNumber(pins.map(
    sensors.slideRheostat(AnalogPin.P2),
    0,
    1023,
    0,
    100
    ))
})
