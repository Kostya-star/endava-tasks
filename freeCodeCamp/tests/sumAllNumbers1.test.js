// import sumAll from '../summAllNumbers1'
const sumAll = require('../summAllNumbers1')

test('sum all numbers from array', () => {
    expect(sumAll([1, 4])).toBe(10)
    expect(sumAll([4, 1])).toBe(10)
    expect(sumAll([5, 10])).toBe(45)
    expect(sumAll([10, 5])).toBe(45)
})