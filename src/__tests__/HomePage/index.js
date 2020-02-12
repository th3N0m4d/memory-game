import React from 'react'
import { shallow } from 'enzyme'

import HomePage, { DifficultyLevel } from '@/components/HomePage'
import { difficultyLevel } from '@/consts'

describe('HomePage', () => {
  it('should render', () => {
    const wrapper = shallow(
      <HomePage />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('DifficultyLevel', () => {
    it('should render all difficulty levels', () => {
      const EXPECTED_COMPONENTS = 3
      const wrapper = shallow(
        <HomePage />
      )

      const children = wrapper.find(DifficultyLevel)

      expect(children).toHaveLength(EXPECTED_COMPONENTS)
    })

    it.each`
        difficultyLevel                  | position | expectedProps
        ${difficultyLevel.easy.label}    | ${0}     | ${difficultyLevel.easy}
        ${difficultyLevel.medium.label}  | ${1}     | ${difficultyLevel.medium}
        ${difficultyLevel.hard.label}    | ${2}     | ${difficultyLevel.hard}
      
      `('should pass down $expectedProps to component when type is "$difficultyLevel"',
      ({ position, expectedProps }) => {
        const wrapper = shallow(
          <HomePage />
        )

        const child = wrapper.find(DifficultyLevel).at(position)

        expect(child.props()).toEqual(expectedProps)
      })
  })
})
