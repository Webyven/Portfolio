import {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

// Importaciones de componentes de layout
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Importaciones de páginas
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

// Definimos el componente App como un componente funcional de React con tipo de retorno explícito
function App(): React.ReactElement {
  // Especificamos el tipo para el estado count como number

  useEffect(() => {
    document.title = 'Llamazares Nicolas | Software Developer'
  }, [])

  return (
    <>
      <Router>
        <div className='app-container'>
          <Header />
          <main className='container mx-auto'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </main>
          {/*<Footer />*/}
        </div>
      </Router>
    </>
  )
}

export default App
