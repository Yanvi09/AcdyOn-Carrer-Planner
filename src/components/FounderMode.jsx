import { useState } from 'react'
import { X, Rocket, Lightbulb } from 'lucide-react'
import { startupIdeas } from '../data/roadmapData'

function FounderMode({ clickCount }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  // Only show the unlock button after exactly 5 clicks
  if (clickCount < 5) return null

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-cyan/20 border border-primary-cyan/50 text-primary-cyan px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-primary-cyan/30 transition-all flex items-center space-x-2 text-xs sm:text-sm"
        >
          <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Founder Mode Unlocked 🚀</span>
          <span className="sm:hidden">Founder Mode 🚀</span>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-background/95 backdrop-blur-sm p-4">
      <div className="bg-primary-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 text-text-muted hover:text-text-main"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8 text-primary-cyan" />
            <h2 className="text-xl sm:text-2xl font-bold">Founder Mode Unlocked 🚀</h2>
          </div>
          <p className="text-text-secondary text-sm sm:text-base">
            You found a path we didn't put on the map.
          </p>
        </div>
        
        {!selectedOption ? (
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-text-main font-medium mb-3 sm:mb-4 text-sm sm:text-base">What if your destination isn't a job?</h3>
            
            <div className="space-y-2 sm:space-y-3">
              <button
                onClick={() => setSelectedOption('startup-idea')}
                className="w-full bg-primary-cardLight border border-border hover:border-primary-cyan/50 rounded-lg p-3 sm:p-4 text-left transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-primary-cyan" />
                  <span className="text-text-main font-medium text-sm sm:text-base">Startup Idea</span>
                </div>
              </button>
              
              <button
                onClick={() => setSelectedOption('startup-plan')}
                className="w-full bg-primary-cardLight border border-border hover:border-primary-cyan/50 rounded-lg p-3 sm:p-4 text-left transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-primary-cyan" />
                  <span className="text-text-main font-medium text-sm sm:text-base">Startup Plan</span>
                </div>
              </button>
              
              <button
                onClick={() => setSelectedOption('build-product')}
                className="w-full bg-primary-cardLight border border-border hover:border-primary-cyan/50 rounded-lg p-3 sm:p-4 text-left transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-primary-cyan" />
                  <span className="text-text-main font-medium text-sm sm:text-base">Build a Product</span>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            <button
              onClick={() => setSelectedOption(null)}
              className="text-text-muted hover:text-text-main text-xs sm:text-sm mb-3 sm:mb-4"
            >
              ← Back to options
            </button>
            
            <h3 className="text-text-main font-medium mb-3 sm:mb-4 text-sm sm:text-base">Demo Startup Ideas</h3>
            
            <div className="space-y-2 sm:space-y-3">
              {startupIdeas.map((idea, index) => (
                <div
                  key={index}
                  className="bg-primary-cardLight border border-border rounded-lg p-3 sm:p-4"
                >
                  <h4 className="text-text-main font-medium mb-1 sm:mb-2 text-sm sm:text-base">{idea.title}</h4>
                  <p className="text-text-secondary text-xs sm:text-sm">{idea.description}</p>
                </div>
              ))}
            </div>
            
            <p className="text-text-muted text-xs mt-3 sm:mt-4 text-center">
              These are demo ideas for exploration purposes.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FounderMode
