
import {
  Calculator,
  ChartSpline,
  Ruler,
  BotMessageSquare,
} from "lucide-react";



function Cards() {

  return (
    <div className="tools-cards">
      <article className="tool-card calculator-card">
        <Calculator className="tool-icon" size={40} strokeWidth={2.4} />
        <h2>Calculateur<br />Scientifique</h2>
        <p>Calculer des expressions</p>
      </article>

      <article className="tool-card graphs-card">
        <ChartSpline className="tool-icon" size={40} strokeWidth={2.4} />
        <h2>Graphes<br />Fonctions</h2>
        <p>Visualiser des fonctions</p>
      </article>

      <article className="tool-card converter-card">
        <Ruler className="tool-icon" size={40} strokeWidth={2.4} />
        <h2>Convertisseur<br />Unités</h2>
        <p>Convertir des unités</p>
      </article>

      <article className="tool-card solver-card">
        <BotMessageSquare className="tool-icon" size={40} strokeWidth={2.4} />
        <h2>Solveur<br />Mathématique</h2>
        <p>Résoudre des exercices</p>
      </article>
    </div>
  )
}


export default Cards
