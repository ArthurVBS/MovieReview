import { Container, StyledLink, Logo, Nav } from './styles'

const Navbar: React.FC = () => {
  return (
    <Container>
      <Nav className='container'>
        <Logo>Movie Review</Logo>
        <StyledLink href="https://github.com/ArthurVBS" target='_blank'><i className="fab fa-github"></i> /ArthurVBS</StyledLink>
      </Nav>
    </Container>
  )
}

export default Navbar
