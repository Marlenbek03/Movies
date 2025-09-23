import { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import UpcomingMovies from './components/UpcomingMovies/UpcomingMovies'
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
  AOS.init({ duration: 800, once: true })
}, [])
  return (
    <div>
      <Header/>
      <Hero/>
      <UpcomingMovies/>
    </div>
  )
}

export default App
