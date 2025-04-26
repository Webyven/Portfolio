import {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

// Importaciones de componentes de layout
import Header from './components/layout/Header'

// Importaciones de páginas
import Home from './pages/Home'
import {LanguageProvider} from './hooks/LanguageContext'
import Footer from './components/layout/Footer'

// Definimos el componente App como un componente funcional de React con tipo de retorno explícito
function App(): React.ReactElement {
  // Especificamos el tipo para el estado count como number

  useEffect(() => {
    document.title = 'Llamazares Nicolas | Software Developer'
  }, [])

  return (
    <>
      <LanguageProvider>
        <Router>
          <div className='app-container'>
            <Header />
            <main
              className='container mx-auto py-12'
              style={{maxWidth: '1280px'}}
            >
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </>
  )
}

export default App
