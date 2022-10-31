import { greet } from '../../src'

describe('Greet library', () => {
  test('Check the output of the greet function', () => {
    expect(greet('Reconstruct')).toBe('Hello Reconstruct')
  })
})
