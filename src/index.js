import React from 'react'
import { render } from 'react-dom'

import './styles.css'
import BoardPage from '@/components/BoardPage'
import { difficultyLevel } from '@/consts'

import logoImg from './public/brand-icon.png'

// TODO: The App component will be created in the next stories
render(
  <>
    <nav class='navbar navbar-expand-lg navbar-light bg-light'>
      <a class='navbar-brand' href='#'>
        <img src={logoImg} width='50' alt='Logo' />
      </a>
      <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon' />
      </button>
      <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
        <div class='navbar-nav'>
          <a class='nav-item nav-link active' href='#'>Home <span class='sr-only'>(current)</span></a>
        </div>
      </div>
    </nav>
    <br />
    <BoardPage difficulty={difficultyLevel.medium} />
  </>,
  document.getElementById('app')
)
