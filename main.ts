input.onButtonPressed(Button.A, function () {
    radio.sendValue("led", 1)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendValue("avanza", 0)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendValue("avanza", 1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("led", 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("led", 2)
})
radio.setGroup(3)
