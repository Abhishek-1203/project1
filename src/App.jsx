import './App.css'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Hero from './components/header/hero'
import Headtext from './components/headtext/headtext'
import Navbar from './components/navbar/navbar'
import Others from './components/others/others'
import Programs from './components/programs/programs'
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Headtext heading='programs' para='programs we offer' />
      <Programs />
      <Headtext heading='About Us' para='Simple and effective teaching' />
      <div className="container">
        <About />
      </div>
      <Headtext heading='Others' para='1st & 2nd hand tech gear available' />
      <div className="container">
        <Others />
      </div>
      <Headtext heading='Contact Us' para='Get in touch with us today' />
      <div className="container">
        <Contact />
      </div>
      <Footer/>
    </>
  )
}

export default App
