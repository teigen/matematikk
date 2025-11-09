import { useState, useEffect, useRef } from "react";

type Task = { multiplicant: number; multiplier: number };
type Answer = { task: Task; userAnswer: number };
type Game = { antall: number; answers: Answer[] };

function Multiplikasjon() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [task, setTask] = useState<Task>({ multiplicant: 0, multiplier: 0 });

  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  const [invalid, setInvalid] = useState<boolean>();
  const [currentTimeout, setCurrentTimeout] = useState(0);

  const [answers, setAnswers] = useState<Answer[]>([]);

  const [genTasks, setGenTasks] = useState(10);
  const [started, setStarted] = useState<number>();
  const [ended, setEnded] = useState<number>();

  const generateTask = () => {
    const multiplicant = Math.floor(Math.random() * 10 + 1);
    const multiplier = Math.floor(Math.random() * 10 + 1);
    setTask({ multiplicant, multiplier });
  };

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    generateTask();
    focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userAnswer = parseInt(answer);
    const correctAnswer = task.multiplicant * task.multiplier;
    const isValid = userAnswer == correctAnswer;

    setAnswers([{ task, userAnswer }, ...answers]);

    clearTimeout(currentTimeout);
    setInvalid(!isValid);

    setCurrentTimeout(
      setTimeout(() => {
        setInvalid(undefined);
      }, 1500)
    );

    setAnswer("");
    focus();

    if (isValid) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore == genTasks) {
        setEnded(Date.now());
      } else {
        generateTask();
      }
    }
  };

  const renderContent = () => {
    if (started && ended) {
      return renderResult(ended - started, genTasks);
    } else if (!started) {
      return renderStart();
    } else return renderForm();
  };

  const renderResult = (elapsed: number, antall: number) => {
    const sekunder = Math.floor(elapsed / 1000);
    return (
      <div>
        <div>
          Hurra! Du klarte {antall} regnestykker på {sekunder} sekunder!
        </div>
        <button
          onClick={() => {
            setAnswers([]);
            setStarted(undefined);
            setEnded(undefined);
            setScore(0);
          }}
        >
          Prøv igjen!
        </button>
      </div>
    );
  };

  const renderStart = () => (
    <div>
      <input
        type="range"
        min={1}
        max={100}
        value={genTasks}
        onChange={(e) => setGenTasks(parseInt(e.currentTarget.value))}
      ></input>
      <button onClick={() => setStarted(Date.now())}>
        Start {genTasks} regnestykker!
      </button>
    </div>
  );

  const renderForm = () => (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "inline-flex", width: "100%" }}>
        <label
          htmlFor="answer"
          style={{ whiteSpace: "nowrap", fontSize: "2rem" }}
        >
          {task.multiplicant} * {task.multiplier} =
        </label>
        <input
          ref={inputRef}
          style={{ width: "inherit", marginLeft: "0.5em" }}
          id="answer"
          type="number"
          pattern="[0-9]*"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Svar"
          autoFocus
          required
          aria-invalid={invalid}
        />
      </div>

      <button type="submit">Svar</button>
    </form>
  );

  return (
    <section>
      <article>
        <header style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Multiplikasjon</h2> <strong>Riktige: {score}</strong>
        </header>
        {renderContent()}
        {answers.map((answer, i) => {
          const correct =
            answer.task.multiplicant * answer.task.multiplier ==
            answer.userAnswer;
          return (
            <div
              key={`answer-${i}`}
              style={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ marginRight: "0.5em" }}>
                {correct ? (
                  <strong style={{ color: "green" }}>✓</strong>
                ) : (
                  <strong style={{ color: "red" }}>✗</strong>
                )}
              </div>
              {answer.task.multiplicant} * {answer.task.multiplier} ={" "}
              {answer.userAnswer}
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default Multiplikasjon;
