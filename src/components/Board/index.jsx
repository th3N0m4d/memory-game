import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import Card from '../Card'
import {
  doubleArray,
  generateUniqueIds,
  shuffle
} from '../../utilities'
import { GridContainer } from './Atoms'
import { levels } from '../../consts'

const IMAGE_BASE_URL = 'https://www.helpfulgames.com/nativeGames/memory/bilder'

class Board extends Component {
    state = {
      selectedIndexes: {},
      temporarilySelectedIndexes: {},
      inProgress: false,
      cards: []
    }

  static propTypes = {
    level: PropTypes.shape({
      cols: PropTypes.number,
      rows: PropTypes.number,
      label: PropTypes.string
    })
  }

  static defaultProps = {
    level: levels.easy
  }

  componentDidMount () {
    this.initializeBoard()
  }

  initializeBoard = () => {
    const generateCards = R.pipe(
      R.divide(R.__, 2),
      generateUniqueIds,
      doubleArray,
      shuffle
    )

    const {
      cols,
      rows
    } = this.props.level

    const cards = generateCards(cols * rows)

    this.setState({
      selectedIndexes: {},
      cards
    })
  }

  checkMatch = () => {
    const {
      temporarilySelectedIndexes
    } = this.state
    const [
      cardA,
      cardB
    ] = R.values(temporarilySelectedIndexes)
    const [
      cardIndexA,
      cardIndexB
    ] = R.keys(temporarilySelectedIndexes)

    if (cardA === cardB) {
      this.setState(prevState => ({
        selectedIndexes: {
          ...prevState.selectedIndexes,
          [cardIndexA]: true,
          [cardIndexB]: true
        },
        temporarilySelectedIndexes: {},
        inProgress: false
      }))
    } else {
      this.setState({
        temporarilySelectedIndexes: {},
        inProgress: false
      })
    }
  }

  handleCardFlip = (cardIndex, cardId) => {
    const {
      temporarilySelectedIndexes,
      inProgress
    } = this.state
    const isPairSelected = R.length(R.keys(temporarilySelectedIndexes)) === 1

    if (!inProgress && isPairSelected) {
      this.setState({
        inProgress: true
      })

      setTimeout(() => {
        this.checkMatch()
      }, 1500)
    }

    if (R.length(R.keys(temporarilySelectedIndexes)) < 2) {
      this.setState(prevState => ({
        temporarilySelectedIndexes: {
          ...prevState.temporarilySelectedIndexes,
          [cardIndex]: cardId
        }
      }))
    }
  }

  handleResetBoard = () => {
    this.initializeBoard()
  }

  render () {
    const {
      cards
    } = this.state

    const {
      cols,
      rows
    } = this.props.level

    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Test your memory!</h1>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <GridContainer rows={rows} cols={cols}>
              {
                cards.map((cardId, index) => (
                  <Card
                    key={index}
                    flipped={this.state.temporarilySelectedIndexes[index] === cardId || this.state.selectedIndexes[index]}
                    onClick={() => this.handleCardFlip(index, cardId)}
                    imageUrl={`${IMAGE_BASE_URL}/image${cardId.toString().padStart(3, '0')}.png`}
                  />
                ))
              }
            </GridContainer>
          </div>
        </div>
        <br />
        <div className='row justify-content-end'>
          <div className='col'>
            <button type='button' className='btn btn-secondary btn-lg' onClick={this.handleResetBoard}>Reset board</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Board
