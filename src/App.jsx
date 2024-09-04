import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Technology from './Components/Technology'
import Experience from './Components/Experience'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Carousel from './Components/Carousel'
import s1 from './assets/s1.jpg'
import s2 from './assets/s2.png'
import s3 from './assets/projects/s3.jpg'
import ReviewSection from './Components/ReviewSection'
const App = () => {

 
  const items = [
    { src: s1, alt: 'Slide 1' },
    { src: s2 , alt: 'Slide 2' },
    { src: s3 , alt: 'Slide 2' },
  ];

  return (
    <div className='overflow-x-hidden text-neutral-300 anatialiased selection:bg-cyan-300  selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
       </div>
      <div className='container mx-auto px-8'>
    <Navbar />
    <Hero />
    <div className="App">
      <Carousel items={items} interval={3000} />
    </div>
    <About />
    <Technology />
    <Experience />
    <Project />
   <div className='flex flex-col gap-0'>
    <Contact />
   <ReviewSection />
  </div>
    </div>
    </div>
  )
}

export default App
