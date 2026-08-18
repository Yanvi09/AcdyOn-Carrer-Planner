import { useState } from 'react'
import { Compass, Menu, X } from 'lucide-react'

function Navbar({ compassClickCount = 0, onCompassClick = () => {}, onOpenPlanner = () => {} }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-primary-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <button 
              onClick={onCompassClick}
              className="p-2 hover:bg-primary-card rounded-lg transition-colors"
              aria-label="Brand icon"
            >
              <Compass className="w-6 h-6 text-primary-cyan" />
            </button>
            <span className="text-xl font-semibold text-text-main">AcdyOn</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-text-secondary hover:text-text-main transition-colors">Home</a>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="text-text-secondary hover:text-text-main transition-colors">How It Works</a>
            <a href="#roadmap-preview" onClick={(e) => handleNavClick(e, '#roadmap-preview')} className="text-text-secondary hover:text-text-main transition-colors">Roadmaps</a>
            <a href="#mentorship" onClick={(e) => handleNavClick(e, '#mentorship')} className="text-text-secondary hover:text-text-main transition-colors">Mentorship</a>
            <a href="#resources" onClick={(e) => handleNavClick(e, '#resources')} className="text-text-secondary hover:text-text-main transition-colors">Resources</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-text-secondary hover:text-text-main transition-colors">Sign in</a>
            <button 
              onClick={onOpenPlanner}
              className="bg-primary-blue hover:bg-primary-brightBlue text-white px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
            >
              Build My Roadmap →
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="block text-text-secondary hover:text-text-main py-2">Home</a>
            <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')} className="block text-text-secondary hover:text-text-main py-2">How It Works</a>
            <a href="#roadmap-preview" onClick={(e) => handleNavClick(e, '#roadmap-preview')} className="block text-text-secondary hover:text-text-main py-2">Roadmaps</a>
            <a href="#mentorship" onClick={(e) => handleNavClick(e, '#mentorship')} className="block text-text-secondary hover:text-text-main py-2">Mentorship</a>
            <a href="#resources" onClick={(e) => handleNavClick(e, '#resources')} className="block text-text-secondary hover:text-text-main py-2">Resources</a>
            <div className="pt-3 border-t border-border space-y-3">
              <a href="#" className="block text-text-secondary hover:text-text-main py-2">Sign in</a>
              <button 
                onClick={() => {
                  onOpenPlanner()
                  setIsMenuOpen(false)
                }}
                className="w-full bg-primary-blue hover:bg-primary-brightBlue text-white px-4 py-2 rounded-lg font-medium transition-all"
              >
                Build My Roadmap →
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
