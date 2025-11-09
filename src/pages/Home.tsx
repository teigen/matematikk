import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <hgroup>
        <h1>Øvelse</h1>
        <p>Velg en regneart å øve på</p>
      </hgroup>

      <div style={{ display: "grid", gap: "2rem", marginTop: "2rem" }}>
        <article>
          <header>
            <h2>Multiplikasjon</h2>
          </header>
          <Link to="/multiplikasjon">
            <button style={{ width: "100%" }}>Start øving</button>
          </Link>
        </article>
      </div>
    </section>
  );
}

export default Home;
