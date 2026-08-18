function RoadmapPreview() {
  const roadmapSteps = [
    { number: '01', title: 'Foundations', status: 'complete' },
    { number: '02', title: 'Core Skills', status: 'in-progress' },
    { number: '03', title: 'Build Projects', status: 'upcoming' },
    { number: '04', title: 'Real-world Practice', status: 'upcoming' },
    { number: '05', title: 'Interview Readiness', status: 'upcoming' }
  ]

  const currentSkills = [
    'APIs',
    'Databases',
    'Authentication',
    'Deployment'
  ]

  return (
    <section id="roadmap-preview" className="py-12 sm:py-20 bg-primary-background section-scroll-margin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">A career plan you can actually follow.</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base">
            No vague "learn more" lists. Your roadmap connects skills to practice, projects and the next step.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Main roadmap */}
          <div className="lg:col-span-2 bg-primary-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-8">
            <div className="flex items-center justify-between mb-4 sm:mb-8">
              <h3 className="text-text-main font-semibold text-base sm:text-lg">12-MONTH CAREER ROUTE</h3>
              <span className="text-primary-cyan text-xs sm:text-sm">20% complete</span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {roadmapSteps.map((step) => (
                <div 
                  key={step.number}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-lg bg-primary-cardLight border border-border"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-background border border-border flex items-center justify-center flex-shrink-0">
                    <span className="text-text-muted text-xs sm:text-sm font-medium">{step.number}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      {step.status === 'complete' && (
                        <span className="text-primary-cyan text-sm">✓</span>
                      )}
                      {step.status === 'in-progress' && (
                        <span className="text-primary-blue text-sm">●</span>
                      )}
                      {step.status === 'upcoming' && (
                        <span className="text-text-muted text-sm">○</span>
                      )}
                      <span className={`font-medium text-sm sm:text-base truncate ${
                        step.status === 'upcoming' ? 'text-text-muted' : 'text-text-main'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    {step.status === 'complete' && (
                      <span className="text-primary-cyan text-xs sm:text-sm hidden sm:inline">Complete</span>
                    )}
                    {step.status === 'in-progress' && (
                      <span className="text-primary-blue text-xs sm:text-sm hidden sm:inline">In progress</span>
                    )}
                    {step.status === 'upcoming' && (
                      <span className="text-text-muted text-xs sm:text-sm hidden sm:inline">Upcoming</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current focus panel */}
          <div className="bg-primary-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-8">
            <h3 className="text-text-main font-semibold text-base sm:text-lg mb-4 sm:mb-6">Current focus</h3>
            
            <div className="bg-primary-blue/10 border border-primary-blue/30 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
              <p className="text-primary-blue font-medium text-sm sm:text-base">Build a REST API</p>
            </div>

            <div className="mb-4">
              <p className="text-text-muted text-xs sm:text-sm mb-2 sm:mb-3">Skills</p>
              <div className="space-y-1.5 sm:space-y-2">
                {currentSkills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center space-x-2 text-xs sm:text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-cyan"></div>
                    <span className="text-text-secondary">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-border">
              <p className="text-text-muted text-xs">
                Example roadmap for demonstration purposes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadmapPreview
