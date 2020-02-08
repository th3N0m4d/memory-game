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

export const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }

  return array
}
