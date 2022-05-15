import './styles.css'

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="container nav-content">
        <h3>Movie Review</h3>
        <a href="https://github.com/ArthurVBS"><i className="fab fa-github"></i> /ArthurVBS</a>
      </nav>
    </header>
  )
}

export default Navbar
