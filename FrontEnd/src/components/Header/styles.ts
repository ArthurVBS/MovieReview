import styled from 'styled-components'

export const Container = styled.header`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.main.primary};
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px;
`

export const Logo = styled.h3`
  font-weight: 700;
  margin: 0;
`

export const StyledLink = styled.a`
  font-size: 1.1em;
  letter-spacing: 1px;
  transition: all .3s;

  &:hover{
    transform: translateY(-4px);
  }
`
