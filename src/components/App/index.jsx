import React from 'react'
import {
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

import logoImg from '../../public/brand-icon.png'
import BoardPage from '@/components/BoardPage'
import HomePage from '@/components/HomePage'
import { difficultyLevel } from '@/consts'

const useQuery = () => new URLSearchParams(useLocation().search)

const App = () => {
  const query = useQuery()

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          <img src={logoImg} width='50' alt='Logo' />
        </Link>
      </nav>
      <br />
      <Switch>
        <Route path='/memory-game'>
          <BoardPage difficulty={difficultyLevel[query.get('difficulty')]} />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>

    </>
  )
}

export default App
