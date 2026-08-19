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
  const [isPlannerOpen, setIsPlannerOpen] = useState(false)

  const handleOpenPlanner = () => {
    setIsPlannerOpen(true)
  }

  return (
    <div className="min-h-screen bg-primary-background text-text-main">
      <Navbar 
        onOpenPlanner={handleOpenPlanner}
      />
      <Hero onOpenPlanner={handleOpenPlanner} />
      <CareerPlanner isOpen={isPlannerOpen} onClose={() => setIsPlannerOpen(false)} />
      <HowItWorks />
      <DestinationRoute />
      <RoadmapPreview />
      <CareerPhases />
      <Mentorship />
      <FinalCTA onOpenPlanner={handleOpenPlanner} />
      <Footer />
      <FounderMode />
    </div>
  )
}

export default App
