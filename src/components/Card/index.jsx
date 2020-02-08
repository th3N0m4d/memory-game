import React from 'React'
import PropTypes from 'prop-types'
import {
  FlipBox,
  FlipBoxBack,
  FlipBoxFront,
  FlipBoxInner,
  QuestionText,
  Image
} from './Atoms'

const QUESTION_MARK = '?'

const propTypes = {
  onClick: PropTypes.func,
  flipped: PropTypes.bool
}

const Card = ({
  flipped,
  imageUrl,
  onClick
}) => (
  <FlipBox onClick={onClick}>
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
