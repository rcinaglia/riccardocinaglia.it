import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

function Downloads() {
  return (
    <>
      <Navbar></Navbar>
      <div className='w-[50%] mx-auto mt-12'>
        <p className='text-6xl'>Downloads</p>
        <div id='satDecode' className='mt-10 mb-10'>
          <p className='text-3xl mb-1 font-bold'>Software 1</p>
          <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div>
            <p className='text-2xl'>Releases</p>
            <Button>Download Last Version ↓</Button>
            <p>or view <a href="/"><u>GitHub Repository</u></a> to download other versions.</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Downloads