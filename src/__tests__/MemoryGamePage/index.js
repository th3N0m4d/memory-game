import React from 'react'
import { shallow } from 'enzyme'

import MemoryGamePage from '@/components/MemoryGamePage'
import Board from '@/components/Board'
import { generateCards } from '@/utilities'

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

    const boardProps = wrapper.find(Board).props()

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

    const board = wrapper.find(Board)
    const onCardSelectedFn = board.prop('onCardSelected')

    onCardSelectedFn({ id: 0, position: 0 })
    onCardSelectedFn({ id: 1, position: 1 })

    expect(wrapper.state('locked')).toBeTruthy()
  })

  it('should not lock board when same card is selected more than once', () => {
    const wrapper = shallow(
      <MemoryGamePage />
    )

    const board = wrapper.find(Board)
    const onCardSelectedFn = board.prop('onCardSelected')

    onCardSelectedFn({ 0: 1 })
    onCardSelectedFn({ 0: 1 })

    expect(wrapper.state('locked')).toBeFalsy()
  })
})
