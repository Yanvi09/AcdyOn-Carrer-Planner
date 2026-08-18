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
    <section id="roadmap-preview" className="py-20 bg-primary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">A career plan you can actually follow.</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            No vague "learn more" lists. Your roadmap connects skills to practice, projects and the next step.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main roadmap */}
          <div className="lg:col-span-2 bg-primary-card border border-border rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-text-main font-semibold text-lg">12-MONTH CAREER ROUTE</h3>
              <span className="text-primary-cyan text-sm">20% complete</span>
            </div>

            <div className="space-y-4">
              {roadmapSteps.map((step) => (
                <div 
                  key={step.number}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-primary-cardLight border border-border"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-background border border-border flex items-center justify-center flex-shrink-0">
                    <span className="text-text-muted text-sm font-medium">{step.number}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      {step.status === 'complete' && (
                        <span className="text-primary-cyan">✓</span>
                      )}
                      {step.status === 'in-progress' && (
                        <span className="text-primary-blue">●</span>
                      )}
                      {step.status === 'upcoming' && (
                        <span className="text-text-muted">○</span>
                      )}
                      <span className={`font-medium ${
                        step.status === 'upcoming' ? 'text-text-muted' : 'text-text-main'
                      }`}>
                        {step.title}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    {step.status === 'complete' && (
                      <span className="text-primary-cyan text-sm">Complete</span>
                    )}
                    {step.status === 'in-progress' && (
                      <span className="text-primary-blue text-sm">In progress</span>
                    )}
                    {step.status === 'upcoming' && (
                      <span className="text-text-muted text-sm">Upcoming</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current focus panel */}
          <div className="bg-primary-card border border-border rounded-2xl p-8">
            <h3 className="text-text-main font-semibold text-lg mb-6">Current focus</h3>
            
            <div className="bg-primary-blue/10 border border-primary-blue/30 rounded-lg p-4 mb-6">
              <p className="text-primary-blue font-medium">Build a REST API</p>
            </div>

            <div className="mb-4">
              <p className="text-text-muted text-sm mb-3">Skills</p>
              <div className="space-y-2">
                {currentSkills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-cyan"></div>
                    <span className="text-text-secondary">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
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
