function Portfolio() {
  return (
    <section className="section portfolio-section" id="portfolio">

      <div className="section-heading">
        <div className="eyebrow">
          Alcuni concept
        </div>

        <h2>
          Progetti che
          <span> parlano da soli.</span>
        </h2>

        <p>
          Una selezione di concept creati per mostrare
          come un'attività può presentarsi online con
          un'immagine moderna, chiara e professionale.
        </p>
      </div>


      <div className="projects-grid">


        {/* PROJECT 01 */}

        <article className="project-card">

          <div className="project-image restaurant">

            <div className="project-browser">

              <div className="project-browser-top">
                <span></span>
                <span></span>
                <span></span>

                <small>
                  lacucina.it
                </small>
              </div>


              <div className="restaurant-site">

                <div className="restaurant-nav">
                  <strong>
                    LA CUCINA
                  </strong>

                  <span>
                    MENU
                  </span>
                </div>


                <div className="restaurant-hero">

                  <small>
                    CUCINA ITALIANA
                  </small>

                  <h3>
                    Il gusto
                    <br />
                    di casa.
                  </h3>

                  <button>
                    Scopri il menu
                  </button>

                </div>

              </div>

            </div>

            <span className="project-tag">
              Concept
            </span>

          </div>


          <div className="project-info">

            <span>
              Ristorante · Hospitality
            </span>

            <h3>
              La Cucina
            </h3>

            <p>
              Un'identità elegante e calda pensata
              per raccontare un'esperienza gastronomica.
            </p>

          </div>

        </article>



        {/* PROJECT 02 */}

        <article className="project-card">

          <div className="project-image mechanic">

            <div className="project-browser">

              <div className="project-browser-top">
                <span></span>
                <span></span>
                <span></span>

                <small>
                  torque-auto.it
                </small>
              </div>


              <div className="mechanic-site">

                <div className="mechanic-nav">
                  <strong>
                    TORQUE
                  </strong>

                  <span>
                    PRENOTA
                  </span>
                </div>


                <div className="mechanic-hero">

                  <small>
                    OFFICINA AUTOMOTIVE
                  </small>

                  <h3>
                    Precisione.
                    <br />
                    Senza compromessi.
                  </h3>

                  <button>
                    Prenota un intervento
                  </button>

                </div>


                <div className="mechanic-stats">
                  <span>
                    15+ anni
                  </span>

                  <span>
                    4.9 ★
                  </span>

                  <span>
                    500+ clienti
                  </span>
                </div>

              </div>

            </div>

            <span className="project-tag">
              Concept
            </span>

          </div>


          <div className="project-info">

            <span>
              Automotive · Servizi
            </span>

            <h3>
              Torque Automotive
            </h3>

            <p>
              Un'interfaccia decisa e moderna pensata
              per comunicare affidabilità e competenza.
            </p>

          </div>

        </article>



        {/* PROJECT 03 */}

        <article className="project-card">

          <div className="project-image professional">

            <div className="project-browser">

              <div className="project-browser-top">
                <span></span>
                <span></span>
                <span></span>

                <small>
                  studioforma.it
                </small>
              </div>


              <div className="professional-site">

                <div className="professional-nav">

                  <strong>
                    FORMA
                  </strong>

                  <span>
                    STUDIO
                  </span>

                </div>


                <div className="professional-hero">

                  <small>
                    STUDIO PROFESSIONALE
                  </small>

                  <h3>
                    Idee chiare.
                    <br />
                    Risultati concreti.
                  </h3>

                  <button>
                    Conosci lo studio
                  </button>

                </div>


                <div className="professional-line"></div>

              </div>

            </div>

            <span className="project-tag">
              Concept
            </span>

          </div>


          <div className="project-info">

            <span>
              Professionisti · Consulting
            </span>

            <h3>
              Studio Forma
            </h3>

            <p>
              Un design essenziale e autorevole per
              comunicare professionalità e fiducia.
            </p>

          </div>

        </article>

      </div>

    </section>
  )
}

export default Portfolio