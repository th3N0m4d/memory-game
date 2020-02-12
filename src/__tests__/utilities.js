import * as R from 'ramda'

import {
  doubleArray,
  generateUniqueIds,
  isLocked,
  renderImageUrl,
  formatImageUrl
} from '@/utilities'

import { IMAGES_ADDRESS } from '@/consts'

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
      const EXPECTED_LENGTH = 12
      const IDS_TO_GENERATE = 6
      const uniqueIds = generateUniqueIds(IDS_TO_GENERATE)
      const result = doubleArray(uniqueIds)

      expect(result).toHaveLength(EXPECTED_LENGTH)
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

  describe('renderImageUrl', () => {
    it('should render image url given a card object', () => {
      const expectedResult = `${IMAGES_ADDRESS}/image001.png`
      const result = renderImageUrl({ 0: 1 })

      expect(result).toEqual(expectedResult)
    })
  })

  describe('formatImageUrl', () => {
    it('should render the image url given an image id', () => {
      const expectedResult = `${IMAGES_ADDRESS}/image001.png`
      const result = formatImageUrl('1')

      expect(result).toEqual(expectedResult)
    })
  })
})
