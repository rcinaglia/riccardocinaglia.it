import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

function Downloads() {
  return (
    <>
      <Navbar />
      <div className='w-[90%] md:w-[80%] lg:w-[50%] mx-auto mt-8 md:mt-12 px-4'>
        <p className='text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>Downloads</p>
        
        <div id='satDecode' className='mt-8 md:mt-10 mb-8 md:mb-10'>
          <p className='text-2xl md:text-3xl mb-2 md:mb-3 font-bold'>Software 1</p>
          <p className='mb-4 md:mb-4 max-w-2xl mx-auto leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className='space-y-4'>
            <p className='text-xl md:text-2xl font-semibold'>Releases</p>
            <Button className="w-auto">Download Last Version ↓</Button>
            <p className='text-sm md:text-base'>
              or view <a href="/" className="underline hover:text-indigo-600"><u>GitHub Repository</u></a> to download other versions.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Downloads