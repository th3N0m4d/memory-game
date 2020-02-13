import React from 'react'
import {
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

import logoImg from '@/public/brand-icon.png'
import MemoryGamePage from '@/components/MemoryGamePage'
import HomePage from '@/components/HomePage'
import { difficultyLevel } from '@/consts'
import routes from '@/routes'

const useQuery = () => new URLSearchParams(useLocation().search)

const App = () => {
  const query = useQuery()

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to={routes.homePage}>
          <img src={logoImg} width='50' alt='Logo' />
        </Link>
      </nav>
      <br />
      <Switch>
        <Route path={routes.memoryGame}>
          <MemoryGamePage difficulty={difficultyLevel[query.get('difficulty')]} />
        </Route>
        <Route path={routes.homePage}>
          <HomePage />
        </Route>
      </Switch>

    </>
  )
}

export default App
