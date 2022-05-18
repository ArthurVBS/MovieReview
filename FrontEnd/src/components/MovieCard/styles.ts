import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  max-width: 480px;
  min-height: 100%;
  margin: 8px auto;
  padding-bottom: 16px;
  border-radius: 8px;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
`

export const Title = styled.h2`
  color: black;
  text-align: center;
  font-size: 1.3em;
  font-weight: 700;
  margin: 0 12px;
`

export const Button = styled.button`
  background-color: ${props => props.theme.color.primary};
  color: white;
  letter-spacing: 1px;
  align-self: center;
  border: none;
  border-radius: 8px;
  padding: 4px 32px;
`
