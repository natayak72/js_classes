/**
 * Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными.
Соблюдать best practices.
Использовать синтаксис ES6.
 */

class Device {
    constructor(name, power) {
        this.name = name
        this.power = power
        this.switched_on = false
    }
    switch_on() {
        console.log(`Turned on ${this.name}!`)
        this.switched_on = true
    }
    switch_off() {
        console.log(`Turned off ${this.name}...`)
        this.switched_on = false
    }
}


class Kettle extends Device {
    constructor(name, power, color, type) {
        super(name, power)
        this.color = color
        this.type = type
    }
}


class TV extends Device {
    constructor(name, power, diagonal, mark) {
        super(name, power)
        this.diagonal = diagonal
        this.mark = mark
    }
}


function claculatePowerConsumption(devices) {
    power_consumption = 0
    for (let device of devices) {
        device.switched_on ? power_consumption += device.power : null 
    }
    return power_consumption
}

let devices = []

const kettle_1 = new Kettle('Чайник 1', 10, 'Черный', 'Электрический')
kettle_1.switch_on()
devices.push(kettle_1)


const kettle_2 = new Kettle('Чайник 2', 3, 'Белый', 'Газовый')
devices.push(kettle_2)

const tv_1 = new TV('Старый телевизор', 10, '15', 'Ракета')
devices.push(tv_1)


const tv_2 = new TV('Новй телевизор', 15, '40', 'LG')
tv_2.switch_on()
devices.push(tv_2)


console.log(`Суммарная потребляемая мощность включённых приборов: ${claculatePowerConsumption(devices)}`)
