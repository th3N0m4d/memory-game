import React from 'react'
import { Link } from 'react-router-dom'
import * as R from 'ramda'

import routes from '@/routes'
import { difficultyLevel } from '@/consts'

export const DifficultyLevel = ({ label, rows, cols }) => (
  <div className='card'>
    <div className='card-body'>
      <h5 className='card-title'>{R.toUpper(label)}</h5>
      <p className='card-text'>{`Number of cards: ${rows * cols} cards`}</p>
      <Link to={`${routes.memoryGame}?difficulty=${R.toLower(label)}`} className='btn btn-light'>Play!</Link>
    </div>
  </div>
)

const HomePage = () => (
  <div className='container'>
    <div className='row'>
      <div className='col'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item active' aria-current='page'><Link to={routes.homePage}>Home</Link></li>
          </ol>
        </nav>
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <h1>Difficulty levels</h1>
        <hr />
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <DifficultyLevel {...difficultyLevel.easy} />
      </div>
      <div className='col'>
        <DifficultyLevel {...difficultyLevel.medium} />
      </div>
      <div className='col'>
        <DifficultyLevel {...difficultyLevel.hard} />
      </div>
    </div>
  </div>
)

export default HomePage
