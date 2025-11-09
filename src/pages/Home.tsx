import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="container">
      <nav>
        <ul>
          <li><strong>Matematikk</strong></li>
        </ul>
      </nav>

      <section>
        <hgroup>
          <h1>Matematikk Practice</h1>
          <p>Choose a practice mode to improve your math skills</p>
        </hgroup>

        <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
          <article>
            <header>
              <h2>Multiplikasjon</h2>
            </header>
            <p>Practice multiplication with random numbers between 0 and 10.</p>
            <Link to="/multiplikasjon">
              <button style={{ width: '100%' }}>Start Multiplication Practice</button>
            </Link>
          </article>

          <article>
            <header>
              <h2>Divisjon</h2>
            </header>
            <p>Practice division with random numbers between 0 and 10.</p>
            <Link to="/divisjon">
              <button style={{ width: '100%' }}>Start Division Practice</button>
            </Link>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Home
