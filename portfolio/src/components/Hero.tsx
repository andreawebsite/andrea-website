function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">

        <div className="eyebrow">
          Siti web professionali
        </div>

        <h1>
          <span className="hero-title-main">Il tuo business</span>
          <span> merita di essere visto.</span>
        </h1>

        <p className="hero-description">
          Creo siti web moderni, veloci e professionali
          per attività e professionisti che vogliono
          presentarsi al meglio online.
        </p>

        <div className="hero-actions">
          <a href="#portfolio" className="button button-primary">
            Guarda i progetti
            <span className="button-arrow">↗︎</span>
          </a>

          <a href="#contatti" className="button button-secondary">
            Parliamone
          </a>
        </div>

        <div className="hero-note">
          <span>Design</span>
          <span>·</span>
          <span>Sviluppo</span>
          <span>·</span>
          <span>Mobile-first</span>
        </div>

      </div>

      <div className="hero-visual">

        <div className="visual-card card-main">

          <div className="browser-bar">
            <div className="browser-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span className="browser-address">
              yourbusiness.it
            </span>
          </div>

          <div className="mock-content">

            <div className="mock-label">
              IL TUO BUSINESS
            </div>

            <div className="mock-line large"></div>

            <div className="mock-line"></div>

            <div className="mock-line short"></div>

            <div className="mock-grid">
              <div className="mock-grid-card"></div>
              <div className="mock-grid-card"></div>
              <div className="mock-grid-card"></div>
            </div>

          </div>

        </div>

        <div className="floating-card">
          <span className="floating-icon">↗︎</span>

          <div>
            <strong>+ Presenza online</strong>
            <span>Un sito pensato per il tuo business</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero