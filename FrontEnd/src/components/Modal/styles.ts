import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.main.primary};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100%);
  height: calc(100%);
  padding: 16px;
`

export const BoxMessage = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  outline: 2px solid white;
  outline-offset: 3px;
  margin: 16px;
`

export const Title = styled.h1`
  text-align: center;
  letter-spacing: 1px;
`

export const Message = styled.h3`
  color: ${props => props.theme.color.primary};
  font-style: italic;
  text-align: center;
  line-height: 1.5em;
  margin: 0;
`
