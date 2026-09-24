function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <div className="logo">
            Andrea<span>Website</span>
          </div>

          <p>
            Siti web professionali per attività
            e professionisti.
          </p>

        </div>


        <nav className="footer-nav">

          <span className="footer-nav-title">
            Navigazione
          </span>

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

        </nav>

      </div>


      <div className="footer-bottom">

        <span>
          © 2026 Andrea Website
        </span>

        <span>
          Design · Sviluppo · Web
        </span>

      </div>

    </footer>
  )
}

export default Footer