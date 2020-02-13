import React from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import Card from '@/components/Card'
import { GridContainer } from './Atoms'
import { renderImageUrl } from '@/utilities'

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  cols: PropTypes.number,
  locked: PropTypes.bool,
  matchedCards: PropTypes.object,
  onCardSelected: PropTypes.func,
  rows: PropTypes.number,
  selectedCards: PropTypes.object
}

const defaultProps = {
  cards: [],
  cols: 0,
  locked: false,
  matchedCards: {},
  rows: 0,
  selectedCards: {}
}

const MemoryGame = ({
  cards,
  cols,
  locked,
  matchedCards,
  onCardSelected,
  rows,
  selectedCards
}) => (
  <GridContainer rows={rows} cols={cols}>
    {
      cards.map(card => {
        const location = R.head(R.keys(card))
        const id = R.head(R.values(card))

        return (
          <Card
            key={location}
            flipped={selectedCards[location] === id || matchedCards[id]}
            onClick={() => !locked && onCardSelected(card)}
            imageUrl={renderImageUrl(card)}
          />
        )
      })
    }
  </GridContainer>
)

MemoryGame.propTypes = propTypes
MemoryGame.defaultProps = defaultProps

export default MemoryGame
