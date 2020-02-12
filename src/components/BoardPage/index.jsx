import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import Board from '@/components/Board'
import {
  difficultyLevel,
  TIME_BEFORE_HIDDING_CARDS
} from '@/consts'
import { generateCards, isLocked } from '@/utilities'

class BoardPage extends Component {
    state = {
      cards: [],
      selectedCards: {},
      matchedCards: {},
      locked: false
    }

    static propTypes = {
      difficulty: PropTypes.shape({
        rows: PropTypes.number,
        cols: PropTypes.number,
        label: PropTypes.string
      })
    }

    static defaultProps = {
      difficulty: difficultyLevel.easy
    }

    componentDidMount () {
      const {
        rows,
        cols
      } = this.props.difficulty

      const cards = generateCards(cols * rows)

      this.setState({
        cards
      })
    }

    resetBoard = () => {
      this.setState({
        locked: false,
        selectedCards: {}
      })
    }

    checkSelectedCards = () => {
      const {
        selectedCards
      } = this.state

      const [
        firstCard,
        secondCard
      ] = R.values(selectedCards)

      if (firstCard === secondCard) {
        this.setState(prevState => ({
          matchedCards: {
            ...prevState.matchedCards,
            [firstCard]: true
          }
        }))
      }

      this.resetBoard()
    }

    tryLockingBoard = () => {
      const {
        selectedCards
      } = this.state

      const locked = isLocked(selectedCards)

      if (locked) {
        setTimeout(this.checkSelectedCards, TIME_BEFORE_HIDDING_CARDS)
      }

      this.setState({
        locked
      })
    }

    handleCardSelected = card => {
      this.setState(prevState => ({
        selectedCards: {
          ...prevState.selectedCards,
          ...card
        }
      }), this.tryLockingBoard)
    }

    render () {
      const {
        cols,
        rows
      } = this.props.difficulty

      const {
        cards,
        selectedCards,
        matchedCards,
        locked
      } = this.state

      return (
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb'>
                  <li className='breadcrumb-item'><a href='#'>Home</a></li>
                  <li className='breadcrumb-item active' aria-current='page'>Memory game</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <Board
                cards={cards}
                selectedCards={selectedCards}
                matchedCards={matchedCards}
                cols={cols}
                locked={locked}
                onCardSelected={this.handleCardSelected}
                rows={rows}
              />
            </div>
          </div>
        </div>
      )
    }
}

export default BoardPage
