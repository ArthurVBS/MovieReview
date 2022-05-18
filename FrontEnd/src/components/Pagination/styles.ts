import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 24px 16px 16px 16px;
`

export const Span = styled.span`
  letter-spacing: 1px;
`

export const Button = styled.button`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 1.5sem;
  border: 1px solid ${props => props.theme.color.primary};
  border-radius: 4px;

  &:disabled{
    color: #888;
    border: 1px solid #888;
  }
`
