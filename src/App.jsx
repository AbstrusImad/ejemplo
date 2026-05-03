import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="hero-img" alt="Hero" />
          <div className="logos">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </div>
        <div className="card">
          <h1>Vite + React</h1>
          <button className="counter" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="docs">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="footer">
          Click on the Vite and React logos to learn more
        </p>
      </section>
    </>
  )
}

export default App
