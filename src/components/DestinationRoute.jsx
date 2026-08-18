function DestinationRoute() {
  return (
    <section className="py-20 bg-primary-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left panel - YOU DECIDE */}
          <div className="bg-primary-card border border-border rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-primary-cyan"></div>
              <h3 className="text-text-main font-semibold text-lg">YOU DECIDE</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Role', value: 'Your target role' },
                { label: 'Company', value: 'Your target company' },
                { label: 'Income', value: 'Your target income' },
                { label: 'Timeline', value: 'Your available time' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-24 text-text-muted text-sm">{item.label}</div>
                  <div className="flex-1 h-px bg-border"></div>
                  <div className="text-text-main">{item.value}</div>
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
          <div className="bg-primary-card border border-border rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-primary-blue"></div>
              <h3 className="text-text-main font-semibold text-lg">ACDYON MAPS</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Skills', value: 'What you need to learn' },
                { label: 'Projects', value: 'What you need to build' },
                { label: 'Learning', value: 'Resources and paths' },
                { label: 'Practice', value: 'Exercises and challenges' },
                { label: 'Readiness', value: 'Interview preparation' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-24 text-text-muted text-sm">{item.label}</div>
                  <div className="flex-1 h-px bg-border"></div>
                  <div className="text-text-main">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile arrow */}
        <div className="lg:hidden flex items-center justify-center mt-8">
          <div className="w-16 h-px bg-gradient-to-r from-primary-cyan to-primary-blue"></div>
          <div className="w-8 h-8 rounded-full bg-primary-blue flex items-center justify-center -ml-4">
            <span className="text-white text-xl">↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DestinationRoute
