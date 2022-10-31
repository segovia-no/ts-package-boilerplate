import { sayHelloWorld } from '../../src'

describe('Hello world library', () => {
  test('Check the output of the greet function', () => {
    expect(sayHelloWorld()).toBe('Hello World!')
  })
})
