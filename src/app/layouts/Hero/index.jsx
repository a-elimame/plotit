import { react } from 'react';


function Hero() {




  return (


    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Les maths prennent vie.</h1>
          <p>
            Tracez des fonctions, explorez des équations et donnez vie aux concepts mathématiques abstraits grâce à des outils interactifs simples, conçus pour les étudiants.
          </p>
          <div className="hero-button-section">

            <button>Tracer votre première fonction →</button>
            <span>Tracé de fonctions · Résolution d’équations · Outils mathématiques</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-right-window">
            <div className="window-header">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


export default Hero
