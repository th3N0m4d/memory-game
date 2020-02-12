import React from 'react'
import { shallow } from 'enzyme'
import { GridContainer } from '@/components/Board/Atoms'

describe('Board Atoms', () => {
  it('should render', () => {
    const wrapper = shallow(
      <GridContainer />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should update the grid\'s rows dimensions', () => {
    const rows = 3

    const wrapper = shallow(
      <GridContainer rows={rows} />
    )

    expect(wrapper).toHaveStyleRule('grid-template-rows', 'repeat(3,100px)')
  })

  it('should update the grid\'s columns dimensions', () => {
    const cols = 4

    const wrapper = shallow(
      <GridContainer cols={cols} />
    )

    expect(wrapper).toHaveStyleRule('grid-template-columns', 'repeat(4,1fr)')
  })
})
