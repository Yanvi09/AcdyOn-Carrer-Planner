function Hero({ onOpenPlanner }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      {/* Ambient dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary-cyan rounded-full opacity-30"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-primary-blue rounded-full opacity-20"></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary-cyan rounded-full opacity-25"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Copy */}
          <div className="space-y-8">
            <p className="text-primary-cyan text-sm font-medium tracking-wider uppercase">
              Your Career, Your Route
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              You set the <span className="text-primary-cyan">destination</span>.
              <br />
              We map the <span className="text-primary-cyan">route</span>.
            </h1>
            
            <p className="text-text-secondary text-lg max-w-xl">
              Choose the role you want, the company you're targeting, the income you're aiming for, and the time you have. AcdyOn turns that destination into a practical career roadmap.
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={onOpenPlanner}
                className="bg-primary-blue hover:bg-primary-brightBlue text-white px-8 py-4 rounded-lg font-medium text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-blue/20"
              >
                Build My Career Roadmap →
              </button>
              
              <p className="text-text-muted text-sm">
                Set your goal. See your path. Start building.
              </p>
            </div>
          </div>
          
          {/* Right side - Product preview */}
          <div className="relative">
            <div className="bg-primary-card border border-border rounded-2xl p-6 space-y-6 shadow-2xl">
              {/* Career Destination */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-text-secondary text-sm font-medium">Your Career Destination</h3>
                  <span className="text-primary-cyan text-xs">68% mapped</span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-text-muted text-xs mb-1">Role</p>
                    <p className="text-text-main font-semibold text-lg">Backend Engineer</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-text-muted text-xs mb-1">Target company</p>
                      <p className="text-text-main">Your target company</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-xs mb-1">Target income</p>
                      <p className="text-text-main">₹15 LPA</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-text-muted text-xs mb-1">Timeline</p>
                    <p className="text-text-main">12 months</p>
                  </div>
                </div>
              </div>
              
              {/* Your Route */}
              <div className="border-t border-border pt-6">
                <h3 className="text-text-secondary text-sm font-medium mb-4">Your Route</h3>
                
                <div className="space-y-3">
                  {[
                    { step: '01', title: 'Foundations', status: 'complete' },
                    { step: '02', title: 'Core Skills', status: 'in-progress' },
                    { step: '03', title: 'Build Projects', status: 'upcoming' },
                    { step: '04', title: 'Real-world Practice', status: 'upcoming' },
                    { step: '05', title: 'Interview Readiness', status: 'upcoming' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center space-x-3">
                      <span className="text-text-muted text-xs w-6">{item.step}</span>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          {item.status === 'complete' && (
                            <span className="text-primary-cyan">✓</span>
                          )}
                          {item.status === 'in-progress' && (
                            <span className="text-primary-blue">●</span>
                          )}
                          {item.status === 'upcoming' && (
                            <span className="text-text-muted">○</span>
                          )}
                          <span className={`text-sm ${item.status === 'upcoming' ? 'text-text-muted' : 'text-text-main'}`}>
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Subtle glow */}
            <div className="absolute -inset-4 bg-primary-blue/5 rounded-2xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
