import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'



function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Hero></Hero>
      </div>
      <div className='body-container'>
        <About></About>
        <Projects></Projects>
      </div>
    </>
    
  )
}

export default App
