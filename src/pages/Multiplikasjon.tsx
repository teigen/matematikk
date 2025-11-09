import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Multiplikasjon() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')
  const [score, setScore] = useState(0)

  const generateQuestion = () => {
    setNum1(Math.floor(Math.random() * 11))
    setNum2(Math.floor(Math.random() * 11))
    setAnswer('')
    setMessage('')
  }

  useEffect(() => {
    generateQuestion()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const userAnswer = parseInt(answer)
    const correctAnswer = num1 * num2

    if (userAnswer === correctAnswer) {
      setMessage('✓ Correct!')
      setScore(score + 1)
      setTimeout(generateQuestion, 1500)
    } else {
      setMessage('✗ Wrong! Try again.')
      setAnswer('')
    }
  }

  return (
    <main className="container">
      <nav>
        <ul>
          <li><strong>Matematikk</strong></li>
        </ul>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/multiplikasjon">Multiplikasjon</Link></li>
          <li><Link to="/divisjon">Divisjon</Link></li>
        </ul>
      </nav>

      <section>
        <article>
          <header>
            <h2>Multiplication Practice</h2>
          </header>
          <p>Score: <strong>{score}</strong></p>
          <form onSubmit={handleSubmit}>
            <p style={{ fontSize: '2rem', margin: '1rem 0' }}>
              <strong>{num1} × {num2} = ?</strong>
            </p>
            <input
              type="number"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Your answer"
              autoFocus
              required
            />
            <button type="submit">Check Answer</button>
            <button type="button" onClick={generateQuestion} className="secondary">
              Skip Question
            </button>
          </form>
          {message && (
            <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
              <strong>{message}</strong>
            </p>
          )}
        </article>
      </section>
    </main>
  )
}

export default Multiplikasjon
