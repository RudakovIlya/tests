const square = require('./square');

describe('square', () => {
  let mockValue;
  beforeEach(() => {
    // Добавить в ДБ
  })
  beforeAll(() => {

  })
  test('Корректное значения', () => {
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeGreaterThan(5)
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })
  test('Корректное значения!!!', () => {
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeGreaterThan(5)
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })
  afterEach(() => {
   jest.clearAllMocks()
  })
  // afterAll(() => {
  // })
})