import { multiply } from '../../src/samples_math/multiply'

describe('Multiply library', () => {
  test('Test 0 * 0 equal 0', () => {
    expect(multiply(0,0)).toBe(0)
  })

  test('Test 5 * 0 equal 0', () => {
    expect(multiply(5,0)).toBe(0)
  })

  test('Test 5 * 3 equal 15', () => {
    expect(multiply(5,3)).toBe(15)
  })

  test('Test 0 * 5 equal 0', () => {
    expect(multiply(0,5)).toBe(0)
  })

  test('Test -1 * 5 equal -5', () => {
    expect(multiply(-1,5)).toBe(-5)
  })
})
