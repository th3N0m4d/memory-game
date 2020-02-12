import React from 'react'
import { shallow } from 'enzyme'
import Card from '@/components/Card'
import { FlipBoxInner, Image } from '@/components/Card/Atoms'

describe('Card', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Card />
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should trigger onClick callback', () => {
    const onClickSpy = jest.fn()
    const wrapper = shallow(
      <Card onClick={onClickSpy} />
    )

    wrapper.simulate('click')

    expect(onClickSpy).toHaveBeenCalled()
  })

  it('should flip the card', () => {
    const wrapper = shallow(
      <Card flipped />
    )

    const innerBox = wrapper.find(FlipBoxInner)
    const flipped = innerBox.prop('flipped')

    expect(flipped).toBeTruthy()
  })

  it('should pass src to Image component', () => {
    const imageUrl = 'path/to/image.png'
    const wrapper = shallow(
      <Card imageUrl={imageUrl} />
    )

    const image = wrapper.find(Image)
    const expectedImageUrl = image.prop('src')

    expect(expectedImageUrl).toBe(imageUrl)
  })

  it('should not trigger onClick when card is flipped', () => {
    const onClickSpy = jest.fn()
    const imageUrl = 'path/to/image.png'
    const wrapper = shallow(
      <Card imageUrl={imageUrl} flipped onClick={onClickSpy} />
    )

    wrapper.simulate('click')

    expect(onClickSpy).not.toHaveBeenCalled()
  })
})
