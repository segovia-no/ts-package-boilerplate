import { sum } from '../../src/samples_math/sum'

describe('Sum library', () => {
  test('Test 0 plus 0 equal 0', () => {
    expect(sum(0,0)).toBe(0)
  })

  test('Test 5 plus 0 equal 5', () => {
    expect(sum(5,0)).toBe(5)
  })

  test('Test 5 plus 3 equal 8', () => {
    expect(sum(5,3)).toBe(8)
  })

  test('Test 0 plus 3 equal 3', () => {
    expect(sum(0,3)).toBe(3)
  })
})
