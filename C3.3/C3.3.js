/*
1. 
Написать, функцию, которая 
принимает в качестве аргумента объект
 и выводит в консоль все ключи и 
 значения только собственных свойств. Данная функция не должна возвращать значение.

*/

function c33_1(input_object) {
    for (let key in input_object) {
        if (input_object.hasOwnProperty(key)) {
            console.log(`c33_1(): key ${key}: input_object: ${input_object[key]}`)
        }
    }
}

/*
2. 
Написать функцию, которая принимает в качестве аргументов 
строку и объект, а затем проверяет, 
есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/
function c33_2(key_name, input_object) {
    if (key_name in input_object) {
        return true
    } else {
        return false
    }
}

/*
3. 
Написать функцию, которая создает пустой объект, но без прототипа.
*/
function c33_3() {
    return Object.create(null)
}

const test_object = {
    'key_1': 'value_2',
    'key_2': 'value_2'
}
const test_key = 'key_1'
const test_key_2 = 'key_3'

c33_1(test_object)

console.log(`c33_2(): is ${test_key} in test_object? - ${c33_2(test_key, test_object)}`)
console.log(`c33_2(): is ${test_key_2} in test_object? - ${c33_2(test_key_2, test_object)}`)

console.log(`c33_3(): ${JSON.stringify(c33_3())}`)
