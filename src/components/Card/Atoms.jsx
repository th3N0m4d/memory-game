import styled from 'styled-components'

export const FlipBox = styled.div`
    background-color: #CFDBD5;    
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    perspective: 1000px; 
`

export const FlipBoxInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform: ${({ flipped }) => flipped ? 'rotateY(180deg)' : 'none'}
`

const FlipBoxFace = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`

export const FlipBoxFront = styled(FlipBoxFace)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    cursor: pointer;
`

export const FlipBoxBack = styled(FlipBoxFace)`
    display: flex;
    background-color: transparent;
    color: white;
    transform: rotateY(180deg);
`

export const QuestionText = styled.div`
    font-size: 6rem;
    color: white;
`
export const Image = styled.img`
    margin: auto;
`
