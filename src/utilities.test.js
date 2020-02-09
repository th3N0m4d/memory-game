import * as R from 'ramda'

import {
  generateUniqueIds,
  doubleArray,
  isLocked
} from './utilities'

const isArrayRandom = count => R.pipe(
  R.uniq,
  R.length,
  R.equals(count)
)

describe('utilities', () => {
  describe('generateUniqueIds', () => {
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

  describe('isLocked', () => {
    it.each`
      param                 | expectedResult | props
      ${{ }}                | ${false}       | ${0}
      ${{ a: 1 }}           | ${false}       | ${1}
      ${{ a: 1, b: 1 }}     | ${true}        | ${2}
    
    `('should return $expectedResult when object has $props properties',
      ({ param, expectedResult }) => {
        const result = isLocked(param)

        expect(result).toBe(expectedResult)
      })
  })
})
