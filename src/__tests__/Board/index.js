import React from 'react'
import { shallow } from 'enzyme'
import * as R from 'ramda'

import Board from '@/components/Board'
import Card from '@/components/Card'
import { generateCards } from '@/utilities'
import { GridContainer } from '@/components/Board/Atoms'

describe('Board', () => {
  const NUMBER_OF_CARDS = 12
  const defaultParams = {
    rows: 3,
    cols: 4,
    cards: generateCards(NUMBER_OF_CARDS)
  }
  it('should render', () => {
    const wrapper = shallow(
      <Board />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should parameterize GridContainer with rows', () => {
    const rows = 7
    const wrapper = shallow(
      <Board rows={rows} />
    )

    const gridContainer = wrapper.find(GridContainer)

    expect(gridContainer.prop('rows')).toEqual(rows)
  })

  it('should parameterize GridContainer with cols', () => {
    const cols = 7
    const wrapper = shallow(
      <Board cols={cols} />
    )

    const gridContainer = wrapper.find(GridContainer)

    expect(gridContainer.prop('cols')).toEqual(cols)
  })

  it('should render GridContainer with 12 cards', () => {
    const wrapper = shallow(
      <Board {...defaultParams} />
    )

    const cardsRendered = R.length(wrapper.find(Card))

    expect(cardsRendered).toBe(NUMBER_OF_CARDS)
  })

  it('should trigger onCardSelected with parameters', () => {
    const onCardSelectedSpy = jest.fn()
    const [
      expectedParams
    ] = defaultParams.cards
    const wrapper = shallow(
      <Board {...defaultParams} onCardSelected={onCardSelectedSpy} />
    )

    const firstCard = wrapper.find(Card).first()

    firstCard.simulate('click')

    expect(onCardSelectedSpy).toHaveBeenCalledWith(expectedParams)
  })

  it('should not trigger onCardSelected when board is locked', () => {
    const onCardSelectedSpy = jest.fn()
    const wrapper = shallow(
      <Board
        {...defaultParams}
        onCardSelected={onCardSelectedSpy}
        locked
      />
    )

    const firstCard = wrapper.find(Card).first()

    firstCard.simulate('click')

    expect(onCardSelectedSpy).not.toHaveBeenCalled()
  })
})
