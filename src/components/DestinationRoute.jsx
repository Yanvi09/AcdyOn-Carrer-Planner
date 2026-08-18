import { useState } from 'react'

function DestinationRoute() {
  const [hoveredItem, setHoveredItem] = useState(null)

  const mapping = {
    'Role': 'Skills',
    'Company': 'Projects', 
    'Income': 'Readiness',
    'Timeline': 'Practice'
  }

  return (
    <section className="py-12 sm:py-20 bg-primary-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Left panel - YOU DECIDE */}
          <div className="bg-primary-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-8">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-cyan"></div>
              <h3 className="text-text-main font-semibold text-base sm:text-lg">YOU DECIDE</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {[
                { label: 'Role', value: 'Your target role' },
                { label: 'Company', value: 'Your target company' },
                { label: 'Income', value: 'Your target income' },
                { label: 'Timeline', value: 'Your available time' }
              ].map((item) => (
                <div 
                  key={item.label}
                  className={`flex items-center space-x-2 sm:space-x-4 cursor-pointer transition-all rounded-lg p-2 sm:p-0 ${
                    hoveredItem === item.label ? 'bg-primary-blue/10' : ''
                  }`}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => setHoveredItem(item.label)}
                >
                  <div className="w-16 sm:w-24 text-text-muted text-xs sm:text-sm">{item.label}</div>
                  <div className="flex-1 h-px bg-border"></div>
                  <div className="text-text-main text-xs sm:text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-16 h-px bg-gradient-to-r from-primary-cyan to-primary-blue"></div>
            <div className="w-8 h-8 rounded-full bg-primary-blue flex items-center justify-center -ml-4">
              <span className="text-white text-xl">→</span>
            </div>
          </div>

          {/* Right panel - ACDYON MAPS */}
          <div className="bg-primary-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-8">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-blue"></div>
              <h3 className="text-text-main font-semibold text-base sm:text-lg">ACDYON MAPS</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {[
                { label: 'Skills', value: 'What you need to learn', mapsFrom: 'Role' },
                { label: 'Projects', value: 'What you need to build', mapsFrom: 'Company' },
                { label: 'Learning', value: 'Resources and paths', mapsFrom: null },
                { label: 'Practice', value: 'Exercises and challenges', mapsFrom: 'Timeline' },
                { label: 'Readiness', value: 'Interview preparation', mapsFrom: 'Income' }
              ].map((item) => (
                <div 
                  key={item.label}
                  className={`flex items-center space-x-2 sm:space-x-4 transition-all rounded-lg p-2 sm:p-0 ${
                    hoveredItem === item.mapsFrom ? 'bg-primary-cyan/10 border border-primary-cyan/30' : ''
                  }`}
                >
                  <div className="w-16 sm:w-24 text-text-muted text-xs sm:text-sm">{item.label}</div>
                  <div className="flex-1 h-px bg-border"></div>
                  <div className="text-text-main text-xs sm:text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile arrow */}
        <div className="lg:hidden flex items-center justify-center mt-6 sm:mt-8">
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-primary-cyan to-primary-blue"></div>
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary-blue flex items-center justify-center -ml-3 sm:-ml-4">
            <span className="text-white text-lg sm:text-xl">↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationRoute
