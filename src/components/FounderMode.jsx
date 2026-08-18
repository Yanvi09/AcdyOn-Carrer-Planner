import { useState } from 'react'
import { X, Rocket, Lightbulb } from 'lucide-react'
import { startupIdeas } from '../data/roadmapData'

function FounderMode({ clickCount }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  if (clickCount < 5) return null

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-cyan/20 border border-primary-cyan/50 text-primary-cyan px-4 py-2 rounded-lg font-medium hover:bg-primary-cyan/30 transition-all flex items-center space-x-2"
        >
          <Rocket className="w-4 h-4" />
          <span>Founder Mode Unlocked 🚀</span>
        </button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-background/95 backdrop-blur-sm">
      <div className="bg-primary-card border border-border rounded-2xl p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-text-muted hover:text-text-main"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="w-8 h-8 text-primary-cyan" />
            <h2 className="text-2xl font-bold">Founder Mode Unlocked 🚀</h2>
          </div>
          <p className="text-text-secondary">
            You found a path we didn't put on the map.
          </p>
        </div>
        
        {!selectedOption ? (
          <div className="space-y-4">
            <h3 className="text-text-main font-medium mb-4">What if your destination isn't a job?</h3>
            
            <div className="space-y-3">
              <button
                onClick={() => setSelectedOption('startup-idea')}
                className="w-full bg-primary-cardLight border border-border hover:border-primary-cyan/50 rounded-lg p-4 text-left transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-3">
                  <Lightbulb className="w-5 h-5 text-primary-cyan" />
                  <span className="text-text-main font-medium">Startup Idea</span>
                </div>
              </button>
              
              <button
                onClick={() => setSelectedOption('startup-plan')}
                className="w-full bg-primary-cardLight border border-border hover:border-primary-cyan/50 rounded-lg p-4 text-left transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-3">
                  <Rocket className="w-5 h-5 text-primary-cyan" />
                  <span className="text-text-main font-medium">Startup Plan</span>
                </div>
              </button>
              
              <button
                onClick={() => setSelectedOption('build-product')}
                className="w-full bg-primary-cardLight border border-border hover:border-primary-cyan/50 rounded-lg p-4 text-left transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-3">
                  <Rocket className="w-5 h-5 text-primary-cyan" />
                  <span className="text-text-main font-medium">Build a Product</span>
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={() => setSelectedOption(null)}
              className="text-text-muted hover:text-text-main text-sm mb-4"
            >
              ← Back to options
            </button>
            
            <h3 className="text-text-main font-medium mb-4">Demo Startup Ideas</h3>
            
            <div className="space-y-3">
              {startupIdeas.map((idea, index) => (
                <div
                  key={index}
                  className="bg-primary-cardLight border border-border rounded-lg p-4"
                >
                  <h4 className="text-text-main font-medium mb-2">{idea.title}</h4>
                  <p className="text-text-secondary text-sm">{idea.description}</p>
                </div>
              ))}
            </div>
            
            <p className="text-text-muted text-xs mt-4 text-center">
              These are demo ideas for exploration purposes.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FounderMode
