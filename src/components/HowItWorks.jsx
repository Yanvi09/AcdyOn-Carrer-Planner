function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose the destination',
      description: 'Tell us the role you want.'
    },
    {
      number: '02',
      title: 'Set the target',
      description: 'Choose company, income and timeline.'
    },
    {
      number: '03',
      title: 'Get your route',
      description: 'See the skills, projects and preparation required.'
    },
    {
      number: '04',
      title: 'Start building',
      description: 'Follow the roadmap and track progress.'
    }
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-20 bg-primary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Your goal becomes a route.</h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-sm sm:text-base">
            Four simple steps to turn your career aspirations into an actionable plan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent"></div>
              )}
              
              <div className="bg-primary-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary-cyan/30 transition-all group-hover:scale-[1.02]">
                <div className="text-primary-cyan text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 opacity-50">
                  {step.number}
                </div>
                <h3 className="text-text-main font-semibold text-base sm:text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
