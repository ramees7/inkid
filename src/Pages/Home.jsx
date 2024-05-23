import React from 'react'
import './Home.css'
import Face from '../Components/Face'
import About from '../Components/About'
import Solution from '../Components/Solution'


function Home() {
  return (
    <div className='landing-1' >
        <Face/>
        <About/>
        <Solution/>
    </div>
  )
}

export default Home