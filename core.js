const tests = []
const beforeAlls = []
const beforeEachs = []
const afterEachs = []
const afterAlls = []

export const beforeAll = (callback) => {
  beforeAlls.push(callback)
}

export const beforeEach = (callback) => {
  beforeEachs.push(callback)
}

export const it = (name, callback) => {
  tests.push({name, callback})
}

export const test = it

export const expect = (received) => {
  return {
    toBe(expected) {
      if (expected === received) {
        console.log('pass') 
      }
      else {
        console.error(new Error('fail\nexpected: ' + expected + '\nreceived: ' + received))
      }
    }
  }
}

export const afterEach = (callback) => {
  afterEachs.push(callback)
}

export const describ = (name, callback) => {
  callback()
}

export const afterAll = (callback) => {
  afterAlls.push(callback)
}

export const run = () => {

  for (const beforeAllCallback of beforeAlls) {
    beforeAllCallback()
  }
  
  for (const test of tests) {
    for (const beforeEachCallback of beforeEachs) {
      beforeEachCallback()
    }
    test.callback()
    for (const afterEachCallback of afterEachs) {
      afterEachCallback()
    }
  }

  for (const afterAllCallback of afterAlls) {
    afterAllCallback()
  }
}
