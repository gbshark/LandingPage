import './Header.css';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkdin.png';
import pessoaImg from '../img/pessoa.png';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <span className="logo">Portfólio</span>
        <div className="nav-links">
          <a href="#sobre">SOBRE MIM</a>
          <a href="#contato">CONTATO</a>
        </div>
      </nav>

      <div className="hero-container">
        <div className="hero-text">
          <p>Olá! Seja bem-vindo(a) ao meu portfólio.</p>
          <h1>Meu nome é <span className="highlight">Fulano</span> e eu sou um desenvolvedor web</h1>
          <div className="social-links">
            {/* Adicione seus links aqui */}
            <a href="https://github.com/SEU_USUARIO" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/SEU_USUARIO" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
          </div>
          <a href="#sobre" className="btn-cta">Conheça mais sobre mim</a>
        </div>
        <div className="hero-image">
          <img src={pessoaImg} alt="Desenvolvedor" />
        </div>
      </div>
    </header>
  );
}

export default Header;