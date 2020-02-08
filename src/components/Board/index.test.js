import React from 'react'
import { shallow } from 'enzyme'

import Board from '.'
import Card from '../Card'
import { levels } from '../../consts'

describe('Board', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Board />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it.each`
    cardsCount                                 | levelName             | level   
    ${levels.easy.rows * levels.easy.cols}     | ${levels.easy.label}  | ${levels.easy}  
    ${levels.medium.rows * levels.medium.cols} | ${levels.medium.label}| ${levels.medium} 
    ${levels.hard.rows * levels.hard.cols}     | ${levels.hard.label}  | ${levels.hard}
  
  `('should render board with $cardsCount cards for level $levelName',
    ({ cardsCount, levelName, level }) => {
      const wrapper = shallow(
        <Board level={level} />
      )

      const expectedCardsCount = wrapper.find(Card).length

      expect(cardsCount).toEqual(expectedCardsCount)
    })

  it('should flip card', () => {
    const wrapper = shallow(
      <Board />
    )

    let card = wrapper.find(Card).first()

    card.simulate('click')

    card = wrapper.find(Card).first()

    expect(card.prop('flipped')).toBeTruthy()
  })
})
