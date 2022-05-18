import { BoxMessage, Container, Message, Title } from './styles'

type Props = {
  title: String
  message: String
}

const Modal = ({ title, message }: Props) => {
  return (
    <Container>
      <BoxMessage>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </BoxMessage>
    </Container>
  )
}

export default Modal
