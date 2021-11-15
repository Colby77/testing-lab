// const { TestWatcher } = require('@jest/core')
const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions.js')

test('test returntwo to get 2', () => {
    expect(returnTwo()).toEqual(2)
})


test('test for greeting',() => {
    expect(greeting('James')).toEqual('Hello, James.')
})
test('Another test for greeting',() => {
    expect(greeting('Jill')).toEqual('Hello, Jill.')
})

describe('math functions', () => {
    test('test for add',() => {
        expect(add(1,2)).toEqual(3)
    })
    test('test for add again', () => {
        expect(add(5,9)).toEqual(14)
    })
    test('multiply test1', () => {
        expect(multiply(3,2)).toEqual(6);
    })
    test('multiply test2', () => {
        expect(multiply(5,2)).toEqual(10)
    })
    test('divide test1', () => {
        expect(divide(10,5)).toEqual(2)
    })
    test('divide test2', () => {
        expect(divide(8,2)).toEqual(4)
    })
    test('subract test1', () => {
        expect(subtract(100,10)).toEqual(90)
    })
    test('subtract test2', () => {
        expect(subtract(43,1)).toEqual(42)
    })
})
