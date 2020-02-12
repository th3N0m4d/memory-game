import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import * as R from 'ramda'

import Card from '@/components/Card'
import { GridContainer } from './Atoms'
import { renderImageUrl } from '@/utilities'

const propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  cols: PropTypes.number,
  locked: PropTypes.bool,
  onCardSelected: PropTypes.func,
  rows: PropTypes.number,
  selectedCards: PropTypes.object
}

const defaultProps = {
  cards: [],
  cols: 0,
  locked: false,
  matchedCards: [],
  rows: 0,
  selectedCards: {}
}

const Board = ({
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
            key={shortid.generate()}
            flipped={selectedCards[location] === id || matchedCards[id]}
            onClick={() => !locked && onCardSelected(card)}
            imageUrl={renderImageUrl(card)}
          />
        )
      })
    }
  </GridContainer>
)

Board.propTypes = propTypes
Board.defaultProps = defaultProps

export default Board
