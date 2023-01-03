/*
Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.

Определить иерархию электроприборов. 
Включить некоторые в розетку. 
Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.

*/

/*
План:

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
Вывести в консоль и посмотреть результаты работы, гордиться собой :)

*/

/*
Общие требования:

Имена функций, свойств и методов должны быть информативными
Соблюдать best practices:
использование camelCase нотации для переменных и методов, 
PascalCase — для названий функций-конструкторов и классов;
информативные имена;
четкая связь между классом и его экземплярами 
(класс описывает множество, а экземпляр конкретную реализацию);
использование синтаксиса ES6 (кроме функции-конструкторов) и т.д.

*/

function Device(name, power) {
    this.name = name
    this.power = power
    this.switched_on = false
}

Device.prototype.switch_on = function() {
    console.log(`Turned on ${this.name}!`)
    this.switched_on = true
}

Device.prototype.switch_off = function() {
    console.log(`Turned off ${this.name}...`)
    this.switched_on = false
}

function claculatePowerConsumption(devices) {
    power_consumption = 0
    for (let device of devices) {
        device.switched_on ? power_consumption += device.power : null 
    }
    return power_consumption
}


function Kettle(name, power, color, type) {
        this.name = name
        this.power = power
        this.color = color
        this.type = type
}

Kettle.prototype = new Device()

function TV(name, power, diagonal, mark) {
    this.name = name
    this.power = power
    this.diagonal = diagonal
    this.mark = mark
}

TV.prototype = new Device()

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
