// const { TestWatcher } = require('@jest/core')
const {returnTwo, greeting, add} = require('./functions.js')

test('test returntwo to get 2', () => {
    expect(returnTwo()).toEqual(2)
})


test('test for greeting',() => {
    expect(greeting('James')).toEqual('Hello, James.')
})
test('Another test for greeting',() => {
    expect(greeting('Jill')).toEqual('Hello, Jill.')
})


test('test for add',() => {
    expect(add(1,2)).toEqual(3)
})
test('test for add again', () => {
    expect(add(5,9)).toEqual(14)
})