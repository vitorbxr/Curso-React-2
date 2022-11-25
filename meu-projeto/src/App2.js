import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App2 () {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Empresa' element={<Empresa />} />
        <Route path='/Contato' element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App2