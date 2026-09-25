function Contact() {
  return (
    <section className="contact-section" id="contatti">

      <div className="contact-content">

        <div className="eyebrow">
          Hai un progetto?
        </div>

        <h2>
          Parliamo di
          <span> qualcosa di nuovo.</span>
        </h2>

        <p>
          Raccontami la tua attività, la tua idea o
          semplicemente quello che vorresti migliorare.
          Partiamo da una conversazione.
        </p>

        <div className="contact-actions">

          <a
            href="mailto:info@example.com"
            className="button button-primary"
          >
            Scrivimi
            <span className="button-arrow">↗︎</span>
          </a>

          <span className="contact-email">
            info@example.com
          </span>

        </div>

        <div className="contact-note">
          Rispondo personalmente a ogni richiesta.
        </div>

      </div>

      <div className="contact-decoration">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </section>
  )
}

export default Contact