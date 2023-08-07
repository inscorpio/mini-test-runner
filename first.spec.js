import { it, test, expect, beforeAll, beforeEach, afterEach, afterAll, describ } from "./core.js"

beforeAll(() => {
  console.log('beforeAll')
})

beforeEach(() => {
  console.log('beforeEach')
})

it('first', () => {
  console.log('first test case')
})

test('second', () => {
  console.log('second test case')

  expect(1 + 1).toBe(2)
})

afterEach(() => {
  console.log('afterEach')
})

describ('describ', () => {

  it('sub: first', () => {
    console.log('sub: first test case')
  })

  test('sub: second', () => {
    console.log('sub: second test case')

    expect(1 + 1).toBe(2)
  })
})

afterAll(() => {
  console.log('afterAll')
})

