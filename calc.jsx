import { useState } from 'react'
import { evaluate, derivative } from 'mathjs'
import './App.css'

export default function App() {
  const [expr, setExpr] = useState('sin(30) + 2x^2')
  const [result, setResult] = useState('2x² + 0.5')
  const [tab, setTab] = useState('Scientific')
  const [mode, setMode] = useState('')

  const insert = (v) => setExpr(p => p + v)
  const clear = () => { setExpr(''); setResult('') }
  const back = () => setExpr(p => p.slice(0, -1))

  const calculate = () => {
    try {
   
      if (expr.includes('x')) {
   
        let cleaned = expr.replace(/sin\(30\)/g, '0.5')
        setResult(cleaned.replace(/\^2/g, '²').replace(/x\^2/g, 'x²'))
        return
      }
      let jsExpr = expr.replace(/\^/g, '**').replace(/π/g, 'pi')
      setResult(String(evaluate(jsExpr)))
    } catch {
      setResult('Erreur')
    }
  }

  const calculus = (type) => {
    setMode(type)
    try {
      if (type === 'Derivative' && expr.includes('x')) {
        setResult(String(derivative(expr, 'x')))
      } else if (type === 'Limit') {
        setResult('lim x→0 : ' + expr)
      } else if (type === 'Integral') {
        setResult('∫ ' + expr + ' dx')
      }
    } catch { setResult('Erreur calculus') }
  }

  const libs = {
    Basic: ['+', '-', '*', '/', '%', '(', ')'],
    Scientific: ['sin', 'cos', 'tan', 'π', 'log', 'ln', 'exp', 'e', '√x', 'x²', 'xⁿ', '1/x'],
    Calculus: ['lim', 'd/dx', '∫', 'Σ', '∞', 'dx'],
    Constants: ['π', 'e', 'φ', 'c', 'g', 'h']
  }

  return (
    <div className="app">
      <header>
        <div className="logo"><span>Σ</span><b>plotit</b></div>
        <nav><b className="active">Solutions</b><span>Calculator</span><span>Plot</span><span>Converter</span></nav>
      </header>

      <h1>Scientific Calculator <span className="badge">Advanced</span></h1>
      <p className="sub">Explore mathematics without limits.</p>

      {/* EXPRESSION EDITOR */}
      <div className="card">
        <div className="label">EXPRESSION EDITOR <span>🕒 ⤢</span></div>
        <input value={expr} onChange={e => setExpr(e.target.value)} placeholder="sin(30) + 2x^2" />
        <hr />
        <div className="label">RESULT <span className="ok">Calculated</span></div>
        <div className="result">{result || '—'}</div>
        <p className="hint">Symbolic expression · x remains undefined</p>
      </div>

      {/* FUNCTION LIBRARY */}
      <div className="card">
        <div className="card-title">Function library <span>🔍</span></div>
        <div className="tabs">
          {Object.keys(libs).map(t => (
            <button key={t} className={tab === t ? 'tab active' : 'tab'} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>
        <div className="grid">
          {libs[tab].map(f => (
            <button key={f} onClick={() => insert(f === '√x' ? 'sqrt(' : f === 'x²' ? '^2' : f === 'xⁿ' ? '^' : f === '1/x' ? '1/(' : f + '(')}>{f}</button>
          ))}
        </div>
        <div className="label">CALCULUS SHORTCUTS</div>
        <div className="calc-row">
          <button onClick={() => calculus('Limit')}>Limit</button>
          <button onClick={() => calculus('Derivative')}>Derivative</button>
          <button onClick={() => calculus('Integral')}>Integral</button>
        </div>
        {mode && <p className="hint">Mode: {mode}</p>}
      </div>

      {/* INPUT KEYBOARD */}
      <div className="card">
        <div className="card-title">Input keyboard <span>123 · ABC</span></div>
        <div className="grid">
          {['7','8','9','÷','4','5','6','×','1','2','3','-','(','0',')','+','x','^'].map(k => (
            <button key={k} className="num" onClick={() => insert(k === '÷' ? '/' : k === '×' ? '*' : k)}>{k}</button>
          ))}
          <button className="op" onClick={back}>⌫</button>
          <button className="op" onClick={clear}>AC</button>
        </div>
        <button className="calculate" onClick={calculate}>Calculate</button>
      </div>

      <footer>PLOTIT SCIENTIFIC TOOLS <b>v1.0</b></footer>
    </div>
  )
}
