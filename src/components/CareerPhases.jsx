function CareerPhases() {
  const phases = [
    {
      name: 'Learn',
      description: 'Build foundational knowledge',
      icon: '📚'
    },
    {
      name: 'Practice',
      description: 'Apply through exercises',
      icon: '💪'
    },
    {
      name: 'Build',
      description: 'Create real projects',
      icon: '🔨'
    },
    {
      name: 'Prove',
      description: 'Showcase your work',
      icon: '🏆'
    },
    {
      name: 'Interview',
      description: 'Land the role',
      icon: '🎯'
    }
  ]

  return (
    <section className="py-20 bg-primary-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">From learning to readiness.</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A clear progression from knowledge to career success.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {phases.map((phase, index) => (
            <div key={phase.name} className="flex items-center">
              <div className="bg-primary-card border border-border rounded-xl p-6 text-center min-w-[140px] hover:border-primary-cyan/30 transition-all">
                <div className="text-3xl mb-3">{phase.icon}</div>
                <h3 className="text-text-main font-semibold mb-1">{phase.name}</h3>
                <p className="text-text-muted text-xs">{phase.description}</p>
              </div>
              
              {index < phases.length - 1 && (
                <div className="hidden md:block mx-4 text-primary-cyan/50">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="md:hidden flex justify-center mt-4 space-x-2">
          {phases.slice(0, -1).map((_, index) => (
            <div key={index} className="text-primary-cyan/50">
              ↓
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareerPhases
