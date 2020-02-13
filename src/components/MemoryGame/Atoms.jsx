import styled from 'styled-components'

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
    grid-template-rows: repeat(${({ rows }) => rows}, 130px);
    row-gap: 4px;
    column-gap: 4px;
`
