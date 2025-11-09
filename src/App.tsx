import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Multiplikasjon from './pages/Multiplikasjon'
import Divisjon from './pages/Divisjon'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/multiplikasjon" element={<Multiplikasjon />} />
        <Route path="/divisjon" element={<Divisjon />} />
      </Routes>
    </Router>
  )
}

export default App
