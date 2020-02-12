import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter as Router } from 'react-router-dom'

import App from '@/components/App'
import HomePage from '@/components/HomePage'
import BoardPage from '@/components/BoardPage'
import routes from '@/routes'

describe('App', () => {
  it('should render', () => {
    const wrapper = shallow(
      <Router>
        <App />
      </Router>
    )

    expect(wrapper.exists()).toBeTruthy()
  })

  it.each`
    route                 | componentName      | component
    ${routes.homePage}    | ${'HomePage'}      | ${HomePage}
    ${routes.memoryGame}  | ${'BoardPage'}     | ${BoardPage}
  
  `('should render $componentName for route "$route"',
    ({ route, component: Component }) => {
      const wrapper = mount(
        <Router initialEntries={[route]}>
          <App />
        </Router>
      )

      const childPage = wrapper.find(Component)

      expect(childPage.exists()).toBeTruthy()
    })
})
