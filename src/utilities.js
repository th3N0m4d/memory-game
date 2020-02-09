import * as R from 'ramda'

const MAX_ALLOWED_ID = 53

export const generateUniqueIds = size => {
  const randomIds = []

  while (randomIds.length < size) {
    const newId = Math.round(Math.random() * MAX_ALLOWED_ID)

    if (!R.includes(newId, randomIds)) {
      randomIds.push(newId)
    }
  }

  return randomIds
}

export const doubleArray = array => {
  return [...array, ...array]
}

/**
 * @description Array shuffling function based on the Fisher-Yates algorithm
 * @param {array} Array
 * @return {array}
 */
export const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array
}

/** @description Creates an array with random values for the given parameter
 * @param {number} numberOfCards
 * @return {array}
 */
export const generateCards = R.pipe(
  R.divide(R.__, 2),
  generateUniqueIds,
  doubleArray,
  shuffle
)

const MAX_FLIPPED_CARDS = 2
/** @description Checks whether an object has the minimum keys to lock the board
 * @param {object} selectedCards
 * @return {boolean}
 */
export const isLocked = R.pipe(
  R.keys,
  R.length,
  R.equals(MAX_FLIPPED_CARDS)
)
