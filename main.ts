input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(input.temperature())
})
input.onSound(DetectedSound.Loud, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 3; index++) {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hallo!!!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
