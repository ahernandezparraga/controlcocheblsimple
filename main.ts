bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    orden = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    if (orden == "Adelante") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        Velocidad = Velocidad + IncrementoVelocidad
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Velocidad)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Velocidad)
    } else if (orden == "Atras") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        Velocidad = Velocidad - IncrementoVelocidad
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Velocidad)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Velocidad)
    } else if (orden == "Derecha") {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Velocidad)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Velocidad / 2)
    } else if (orden == "Izquierda") {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, Velocidad / 2)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, Velocidad)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
let orden = ""
let IncrementoVelocidad = 0
let Velocidad = 0
basic.showIcon(IconNames.SmallSquare)
Velocidad = 0
IncrementoVelocidad = 10
basic.forever(function () {
	
})
