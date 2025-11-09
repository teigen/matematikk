import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container">
      <nav>
        <ul>
          <li><strong>Matematikk</strong></li>
        </ul>
        <ul>
          <li><a href="https://vite.dev" target="_blank">Vite</a></li>
          <li><a href="https://react.dev" target="_blank">React</a></li>
          <li><a href="https://picocss.com" target="_blank">Pico CSS</a></li>
        </ul>
      </nav>

      <section>
        <hgroup>
          <h1>Welcome to Matematikk</h1>
          <p>A Vite + React + TypeScript application with Pico CSS</p>
        </hgroup>
        
        <article>
          <header>
            <h2>Counter Example</h2>
          </header>
          <p>Current count: <strong>{count}</strong></p>
          <button onClick={() => setCount((count) => count + 1)}>
            Increment
          </button>
          <button onClick={() => setCount(0)} className="secondary">
            Reset
          </button>
        </article>

        <article>
          <header>
            <h2>Technology Stack</h2>
          </header>
          <ul>
            <li><strong>Vite</strong> - Fast build tool and dev server</li>
            <li><strong>React</strong> - UI component library</li>
            <li><strong>TypeScript</strong> - Type-safe JavaScript</li>
            <li><strong>pnpm</strong> - Fast, disk space efficient package manager</li>
            <li><strong>Pico CSS</strong> - Minimal CSS framework for semantic HTML</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
