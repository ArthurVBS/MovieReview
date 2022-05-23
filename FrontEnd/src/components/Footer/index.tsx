import { Button, Container, StyledLink, Text } from './styles'

const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
      <Text>Made with ♡ and React by <StyledLink href="https://github.com/ArthurVBS/MovieReview" target='_blank'>Arthur V.B.S.</StyledLink></Text>

      <Button onClick={() => handleClick()}><i className="fas fa-angle-up"></i></Button>

    </Container>
  )
}

export default Footer
