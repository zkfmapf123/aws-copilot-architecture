import { inspectFunc } from './fp'

test('inspectFunc unit test', () => {
  const props = {
    num: 10,
    vars: '10',
  }

  const isOver10 = (p: typeof props): boolean => {
    return p.num > 10
  }

  const isMatchString = (p: typeof props): boolean => {
    return p.vars === ''
  }

  const errMsg = inspectFunc<typeof props>(props, [
    {
      func: isOver10,
      errorMessage: 'must be over the 10-1',
    },
    {
      func: isMatchString,
      errorMessage: 'must be over the 10-2',
    },
  ])

  const props2 = {
    num: 11,
    vars: '',
  }

  const errMsg2 = inspectFunc<typeof props2>(props2, [
    {
      func: isOver10,
      errorMessage: 'must be over the 10-1',
    },
    {
      func: isMatchString,
      errorMessage: 'must be over the 10-2',
    },
  ])
  expect(errMsg2.length).toBe(0)
})
