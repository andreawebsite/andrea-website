import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        <a
          href="#"
          className="logo"
          onClick={closeMenu}
        >
          Andrea<span>Website</span>
        </a>


        <div className="nav-links">

          <a href="#servizi">
            Servizi
          </a>

          <a href="#portfolio">
            Portfolio
          </a>

          <a href="#processo">
            Processo
          </a>

          <a href="#contatti">
            Contatti
          </a>

        </div>


        <a
          href="#contatti"
          className="nav-cta"
        >
          Parliamone
        </a>


        <button
          className={`mobile-menu-button ${
            menuOpen ? 'open' : ''
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={
            menuOpen
              ? 'Chiudi menu'
              : 'Apri menu'
          }
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>

        </button>

      </nav>


      <div
        className={`mobile-menu ${
          menuOpen ? 'open' : ''
        }`}
      >

        <a
          href="#servizi"
          onClick={closeMenu}
        >
          Servizi
        </a>

        <a
          href="#portfolio"
          onClick={closeMenu}
        >
          Portfolio
        </a>

        <a
          href="#processo"
          onClick={closeMenu}
        >
          Processo
        </a>

        <a
          href="#contatti"
          onClick={closeMenu}
        >
          Contatti
        </a>

        <a
          href="#contatti"
          className="mobile-menu-cta"
          onClick={closeMenu}
        >
          Parliamone ↗
        </a>

      </div>

    </header>
  )
}

export default Navbar