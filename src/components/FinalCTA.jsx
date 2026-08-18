function FinalCTA({ onOpenPlanner = () => {} }) {
  return (
    <section className="py-12 sm:py-20 bg-primary-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Your future doesn't need another vague plan.
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-cyan mb-6 sm:mb-8">
            Give it a destination.
          </p>
          
          <button 
            onClick={onOpenPlanner}
            className="w-full sm:w-auto bg-primary-blue hover:bg-primary-brightBlue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium text-base sm:text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary-blue/20"
          >
            Build My Career Roadmap →
          </button>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
