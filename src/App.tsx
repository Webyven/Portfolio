import {useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

// Importaciones de componentes de layout
import Header from './components/layout/Header'

// Importaciones de páginas
import Home from './pages/Home'
import {LanguageProvider} from './hooks/LanguageContext'
import Footer from './components/layout/Footer'
import {Toaster, ToastBar} from 'react-hot-toast'

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
              className='container mx-auto py-12 overflow-x-hidden'
              style={{maxWidth: 'min(100%, 1280px)'}}
            >
              <Routes>
                <Route path='/' element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
        <Toaster
          position='bottom-right'
          containerStyle={{
            clipPath:
              'polygon(0 0, 90% 0, 100% 25%, 100% 100%, 10% 100%, 0 80%)',
            bottom: '65px',
          }}
          toastOptions={{
            success: {
              iconTheme: {
                primary: '#0fa',
                secondary: 'black',
              },
            },
          }}
        >
          {(t) => (
            <ToastBar
              position='bottom-right'
              style={{
                clipPath:
                  'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                backgroundColor: '#252525',
                color: '#fff',
                borderRadius: '0px',
                padding: '2px',
                textAlign: 'left',
                width: 'fit-content',
              }}
              toast={t}
            >
              {({icon, message}) => (
                <div
                  className='flex flex-row gap-1 pe-0 ps-3 py-1.5 bg-[#111] text-white'
                  style={{
                    whiteSpace: 'nowrap',
                    clipPath:
                      'polygon(0 0, calc(100% - 9px) 0, 100% 9px, 100% 100%, 9px 100%, 0 calc(100% - 9px))',
                  }}
                >
                  {icon}
                  {message}
                </div>
              )}
            </ToastBar>
          )}
        </Toaster>
      </LanguageProvider>
    </>
  )
}

export default App
