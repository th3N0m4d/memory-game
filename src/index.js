import React from 'react'
import { render } from 'react-dom'

import './styles.css'
import BoardPage from '@/components/BoardPage'
import { difficultyLevel } from '@/consts'

render(
  <BoardPage difficulty={difficultyLevel.medium} />,
  document.getElementById('app')
)
