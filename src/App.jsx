import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CareerPlanner from './components/CareerPlanner'
import HowItWorks from './components/HowItWorks'
import DestinationRoute from './components/DestinationRoute'
import RoadmapPreview from './components/RoadmapPreview'
import CareerPhases from './components/CareerPhases'
import Mentorship from './components/Mentorship'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import FounderMode from './components/FounderMode'

function App() {
  const [compassClickCount, setCompassClickCount] = useState(0)

  const handleCompassClick = () => {
    setCompassClickCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-primary-background text-text-main">
      <Navbar 
        compassClickCount={compassClickCount} 
        onCompassClick={handleCompassClick} 
      />
      <Hero />
      <CareerPlanner />
      <HowItWorks />
      <DestinationRoute />
      <RoadmapPreview />
      <CareerPhases />
      <Mentorship />
      <FinalCTA />
      <Footer />
      <FounderMode clickCount={compassClickCount} />
    </div>
  )
}

export default App
