import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
     
    <Header />

    <main className="bg-amber-300">
        <Outlet />
    </main>

    <Footer />

    </>
  )
}

export default App
