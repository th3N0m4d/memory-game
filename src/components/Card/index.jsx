import React from 'React'
import PropTypes from 'prop-types'
import * as R from 'ramda'

import {
  FlipBox,
  FlipBoxBack,
  FlipBoxFront,
  FlipBoxInner,
  QuestionText,
  Image
} from './Atoms'
import { QUESTION_MARK } from '@/consts'

const propTypes = {
  onClick: PropTypes.func,
  flipped: PropTypes.bool,
  imageUrl: PropTypes.string
}

const Card = ({
  flipped,
  imageUrl,
  onClick
}) => (
  <FlipBox onClick={() => R.not(flipped) && onClick()}>
    <FlipBoxInner flipped={flipped}>
      <FlipBoxFront>
        <QuestionText>
          {QUESTION_MARK}
        </QuestionText>
      </FlipBoxFront>
      <FlipBoxBack>
        <Image src={imageUrl} className='img-fluid' alt='Image to guess' />
      </FlipBoxBack>
    </FlipBoxInner>
  </FlipBox>
)

Card.propTypes = propTypes

export default Card
