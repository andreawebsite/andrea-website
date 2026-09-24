function Services() {
  return (
    <section className="section services-section" id="servizi">
      
      <div className="section-heading">
        <div className="eyebrow">
          Cosa posso fare per te
        </div>

        <h2>
          Un sito pensato
          <span> per il tuo business.</span>
        </h2>

        <p>
          Dalla prima idea alla pubblicazione online,
          costruisco esperienze digitali moderne,
          semplici da usare e progettate per valorizzare
          la tua attività.
        </p>
      </div>

      <div className="services-grid">

        <article className="service-card">
          <div className="service-top">
            <span className="service-number">01</span>

            <span className="service-icon">
              ↗
            </span>
          </div>

          <div className="service-content">
            <h3>
              Siti web
            </h3>

            <p>
              Un sito professionale che presenta
              la tua attività nel modo giusto e
              trasmette fiducia fin dal primo clic.
            </p>
          </div>

          <span className="service-link">
            Scopri il servizio →
          </span>
        </article>


        <article className="service-card">
          <div className="service-top">
            <span className="service-number">02</span>

            <span className="service-icon">
              ◇
            </span>
          </div>

          <div className="service-content">
            <h3>
              Landing page
            </h3>

            <p>
              Una pagina progettata intorno a un
              obiettivo preciso: presentare un'offerta,
              un servizio o portare nuovi contatti.
            </p>
          </div>

          <span className="service-link">
            Scopri il servizio →
          </span>
        </article>


        <article className="service-card">
          <div className="service-top">
            <span className="service-number">03</span>

            <span className="service-icon">
              ↻
            </span>
          </div>

          <div className="service-content">
            <h3>
              Restyling
            </h3>

            <p>
              Hai già un sito ma non ti rappresenta?
              Possiamo ripensarlo con un design
              più moderno, chiaro e professionale.
            </p>
          </div>

          <span className="service-link">
            Scopri il servizio →
          </span>
        </article>

      </div>
    </section>
  )
}

export default Services