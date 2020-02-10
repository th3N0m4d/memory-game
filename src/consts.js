/**
 * @description Difficulty level of the board
 * @type {object}
 */
export const difficultyLevel = {
  easy: {
    rows: 3,
    cols: 4,
    label: 'Easy'
  },
  medium: {
    rows: 4,
    cols: 5,
    label: 'Medium'
  },
  hard: {
    rows: 6,
    cols: 6,
    label: 'Hard'
  }
}

/**
 * @description Default value for cards not selected and/or matched
 * @type {string}
 */
export const QUESTION_MARK = '?'

/**
 * @description Time in miliseconds before the board hides the cards
 * @type {number}
 */
export const TIME_BEFORE_HIDDING_CARDS = 1500
