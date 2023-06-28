import './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import Techstack from './pages/Techstack'



function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Hero></Hero>
      </div>
      <div className='body-container'>
        <About></About>
        <Techstack></Techstack>
      </div>
    </>
    
  )
}

export default App
