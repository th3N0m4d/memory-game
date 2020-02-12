import React from 'react'
import {
  Switch,
  Route,
  Link
} from 'react-router-dom'

import logoImg from '../../public/brand-icon.png'
import BoardPage from '@/components/BoardPage'
import HomePage from '@/components/HomePage'

const App = () => (
  <>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        <img src={logoImg} width='50' alt='Logo' />
      </Link>

      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div className='navbar-nav'>
          <Link className='nav-item nav-link active' to='/'>Home <span className='sr-only'>(current)</span></Link>
        </div>
      </div>
    </nav>
    <br />
    <Switch>
      <Route path='/memory-game'>
        <BoardPage />
      </Route>
      <Route path='/'>
        <HomePage />
      </Route>
    </Switch>

  </>
)

export default App
