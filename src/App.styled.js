import styled from 'styled-components'
import bgTopRigh from './assets/img/bg-right.svg'
import bgTopLeft from './assets/img/bg-left.svg'

export const StyledApp = styled.div`
  max-width: 100%;
  background: url(${bgTopRigh}) right, url(${bgTopLeft}) left;
  background-repeat: no-repeat;
  background-position: 116% 25%, -10% 60%;

  // background-size: cover;
`
