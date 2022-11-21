input.onButtonPressed(Button.A, function () {
	
})
basic.showNumber(pins.digitalReadPin(DigitalPin.P2))
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.pause(2000)
})
