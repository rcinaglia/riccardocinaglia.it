import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom'

import { useEffect, useState } from 'react'

function Homepage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Attiva l'animazione dopo 250 ms
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 250)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Navbar></Navbar>
      {/* Pattern con animazione */}
      <div
        className={`absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}>
        {/* Overlay animato*/}
        <div
          className={`absolute z-0 inset-0 bg-indigo-500/10 transition-transform duration-1500 ease-out ${isLoaded ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
          style={{
            transformOrigin: 'top',
            filter: 'blur(550px)',
          }}
        />
      </div>
      <div className="relative bg-gradient-to-br from-indigo-500/20 to-transparent pt-15 pb-15">
        <h1 className={`text-[3.5vh] text-center mb-5 h-fit font-mono transition-all duration-1000 delay-250 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          <img src={logo} alt="logo" className='mx-auto w-55' />
        </h1>
        <p className={`text-center w-[70%] mx-auto transition-all duration-1000 delay-700 text-3xl ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
          just having fun ://
        </p>
        <Button
          className={`mx-auto mt-10 transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <Link to={'/downloads'}>
            Downloads →
          </Link>
        </Button>
      </div>

      {/* Animazione pulse */}
      <style jsx global>{`
        @keyframes pulseIndigo {
          0% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 0.7; transform: scale(1.2); }
          100% { opacity: 0.3; transform: scale(0.8); }
        }
      `}</style>
      <hr class="text-zinc-900 mb-5 mx-auto text-center" />

      <h1 className='mx-auto text-center text-5xl m-16'>Work in progress...</h1>

      <Footer></Footer>
    </>
  )
}

export default Homepage