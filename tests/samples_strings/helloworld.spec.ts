import { sayHelloWorld } from '../../src/samples_strings/sayhelloworld'

describe('Hello world library', () => {
  test('Check the output of the greet function', () => {
    expect(sayHelloWorld()).toBe('Hello World!')
  })
})
