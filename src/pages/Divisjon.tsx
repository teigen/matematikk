import { useState, useEffect } from "react";

function Divisjon() {
  const [dividend, setDividend] = useState(0);
  const [divisor, setDivisor] = useState(1);
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  const generateQuestion = () => {
    // Generate divisor first (1-10, avoiding 0)
    const newDivisor = Math.floor(Math.random() * 10) + 1;
    // Generate quotient (0-10)
    const quotient = Math.floor(Math.random() * 11);
    // Calculate dividend to ensure whole number result
    const newDividend = newDivisor * quotient;

    setDivisor(newDivisor);
    setDividend(newDividend);
    setAnswer("");
    setMessage("");
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userAnswer = parseInt(answer);
    const correctAnswer = dividend / divisor;

    if (userAnswer === correctAnswer) {
      setMessage("✓ Riktig!");
      setScore(score + 1);
      setTimeout(generateQuestion, 1500);
    } else {
      setMessage("✗ Feil! Prøv igjen.");
      setAnswer("");
    }
  };

  return (
    <section>
      <article>
        <header>
          <h2>Divisjon</h2>
        </header>
        <p>
          Score: <strong>{score}</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <p style={{ fontSize: "2rem", margin: "1rem 0" }}>
            <strong>
              {dividend} / {divisor} = ?
            </strong>
          </p>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Svar"
            autoFocus
            required
          />
          <button type="submit">Sjekk svar</button>
          {/* <button
            type="button"
            onClick={generateQuestion}
            className="secondary"
          >
            Neste regnestykke
          </button> */}
        </form>
        {message && (
          <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
            <strong>{message}</strong>
          </p>
        )}
      </article>
    </section>
  );
}

export default Divisjon;
