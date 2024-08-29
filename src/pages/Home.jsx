import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import RecommendedJobs from '../components/RecommendedJobs'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <RecommendedJobs/>
    </div>
  )
}

export default Home