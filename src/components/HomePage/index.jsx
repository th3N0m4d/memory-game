import React from 'react'
import { Link } from 'react-router-dom'

import routes from '@/routes'

const HomePage = () => (
  <div>
    <Link to={routes.memoryGame}>Go to memory game</Link>
  </div>
)

export default HomePage
