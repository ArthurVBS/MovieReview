import styled from 'styled-components'

export const Container = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  max-width: 480px;
  min-height: 100%;
  margin: 8px auto;
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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px;
`

export const Form = styled.form`
  width: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  gap: 12px;

  div{
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
`

export const Label = styled.label`
  font-size: .9em;
  color: #888;
`

export const Input = styled.input`
  text-align: center;
  border: 1px solid #888;
  border-radius: 8px;
  height: 32px;
`

export const Select = styled.select`
  text-align: center;
  border: 1px solid #888;
  border-radius: 8px;
  height: 32px;
`
