import classes from './App.css'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'



function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Hero></Hero>
      </div>
      <div className='body-container'>
        <About></About>
      </div>
    </>
    
  )
}

export default App
