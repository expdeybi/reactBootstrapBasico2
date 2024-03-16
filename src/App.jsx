import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Error from './components/Error'

function App() {

  return (
    <>
      <BrowserRouter basename='/reactbootstrapbasico2'>
        <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/Productos" element={<Productos/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
