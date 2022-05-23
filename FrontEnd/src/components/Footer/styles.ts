import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  align-items: center;
  gap: 8px 32px;
  background-color: ${props => props.theme.color.primary};
  padding: 8px;
`

export const Text = styled.p`
  color: ${props => props.theme.main.primary};
  opacity: .7;
  font-size: .9em;
  margin: 0;
  transition: all .3s;

  &:hover{
    opacity: 1;
  }
`

export const StyledLink = styled.a`
  color: ${props => props.theme.color.secondary};
  transition: all .3s;

  &:hover{
    color: ${props => props.theme.main.primary};
  }
`

export const Button = styled.button`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.main.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: .7;
  font-size: 1.2em;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  transition: all .3s;

  &:hover{
    background-color: ${props => props.theme.color.secondary};
    color: ${props => props.theme.color.primary};
    opacity: 1;
  }
`
