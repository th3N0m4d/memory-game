import React from 'react'
import { render } from 'react-dom'
import Board from './components/Board'

import './styles.css'
import { levels } from './consts'

render(
  <Board level={levels.easy} />,
  document.getElementById('app')
)
