input.onButtonPressed(Button.A, function () {
    if (Interruttore == 0) {
        Interruttore = 1
    } else {
        Interruttore = 0
    }
    if (Interruttore == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
let Interruttore = 0
Interruttore = 0
