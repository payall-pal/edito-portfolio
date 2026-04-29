
import Lenis from 'lenis'
import { useEffect } from 'react'
import Home from './components/Home'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'

const App=()=>{

  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)

    requestAnimationFrame(raf)
    
  }
  requestAnimationFrame(raf)


  return(
    <div className='bg-[#EFEAE3]'>
      <Nav />
      <Home />
      <Projects />

     </div>
  )
}
export default App