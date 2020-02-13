import React from 'react'
import { shallow } from 'enzyme'

import MemoryGamePage from '@/components/MemoryGamePage'
import MemoryGame from '@/components/MemoryGame'
import { generateCards } from '@/utilities'
import {
  TIME_BEFORE_HIDDING_CARDS
} from '@/consts'

describe('MemoryGamePage', () => {
  it('should render', () => {
    const wrapper = shallow(
      <MemoryGamePage />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should pass parameters to Board component for default difficulty level', () => {
    const NUMBER_OF_CARDS = 12
    const expectedProps = {
      cards: generateCards(NUMBER_OF_CARDS),
      cols: 4,
      locked: false,
      onCardSelected: jest.fn(),
      rows: 3
    }
    const wrapper = shallow(
      <MemoryGamePage />
    )

    const boardProps = wrapper.find(MemoryGame).props()

    expect(boardProps.rows).toEqual(expectedProps.rows)
    expect(boardProps.cols).toEqual(expectedProps.cols)
    expect(boardProps.onCardSelected).toBeInstanceOf(Function)
    expect(boardProps.locked).toEqual(expectedProps.locked)
    expect(boardProps.cards).toHaveLength(NUMBER_OF_CARDS)
  })

  it('should lock board after selecting two cards', () => {
    const wrapper = shallow(
      <MemoryGamePage />
    )

    const board = wrapper.find(MemoryGame)

    flipCards(board)

    const isLocked = wrapper.find(MemoryGame).prop('locked')

    expect(isLocked).toBeTruthy()
  })

  it('should not lock board when same card is selected more than once', () => {
    const wrapper = shallow(
      <MemoryGamePage />
    )

    const board = wrapper.find(MemoryGame)
    const onCardSelectedFn = board.prop('onCardSelected')

    onCardSelectedFn({ 0: 1 })
    onCardSelectedFn({ 0: 1 })

    const isLocked = wrapper.find(MemoryGame).prop('locked')

    expect(isLocked).toBeFalsy()
  })

  it('should reset properties of MemoryGame component when game is finished', (done) => {
    const mockDifficultyLevel = {
      rows: 1,
      cols: 2,
      label: 'Foo'
    }
    const wrapper = shallow(
      <MemoryGamePage difficulty={mockDifficultyLevel} />
    )

    const board = wrapper.find(MemoryGame)

    flipCards(board)

    setTimeout(() => {
      const boardProps = wrapper.find(MemoryGame).props()

      expect(boardProps.locked).toBeFalsy()
      expect(boardProps.matchedCards).toEqual({})
      expect(boardProps.selectedCards).toEqual({})
      done()
    }, TIME_BEFORE_HIDDING_CARDS)
  })

  const flipCards = board => {
    const [firstCard, secondCard] = board.prop('cards')
    const onCardSelectedFn = board.prop('onCardSelected')

    onCardSelectedFn(firstCard)
    onCardSelectedFn(secondCard)
  }
})
