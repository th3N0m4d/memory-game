import * as R from 'ramda'

import { generateUniqueIds, doubleArray } from './utilities'

const isArrayRandom = count => R.pipe(
  R.uniq,
  R.length,
  R.equals(count)
)

describe('utilities', () => {
  test.each([
    [6],
    [10],
    [18]
  ])('should generate %s unique random ids', (size) => {
    const result = generateUniqueIds(size)

    const isRandom = isArrayRandom(size)(result)

    expect(isRandom).toBeTruthy()
  })

  it('should double the initial array', () => {
    const result = generateUniqueIds(6)
    const doubledArray = doubleArray(result)

    expect(doubledArray).toHaveLength(12)
  })
})
