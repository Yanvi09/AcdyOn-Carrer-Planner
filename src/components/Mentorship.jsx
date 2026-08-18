function Mentorship() {
  return (
    <section id="mentorship" className="py-12 sm:py-20 bg-primary-background section-scroll-margin">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            A roadmap is better when you know why it exists.
          </h2>
          <p className="text-text-secondary text-base sm:text-lg mb-8 sm:mb-12">
            Learn from practical guidance, understand what matters for your target role, and focus your effort where it can actually move you forward.
          </p>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-primary-card border border-border rounded-xl p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <span className="text-xl sm:text-2xl">🎯</span>
              </div>
              <h3 className="text-text-main font-semibold mb-2 text-sm sm:text-base">Role-Specific</h3>
              <p className="text-text-muted text-xs sm:text-sm">
                Guidance tailored to your target role and industry
              </p>
            </div>

            <div className="bg-primary-card border border-border rounded-xl p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <span className="text-xl sm:text-2xl">📊</span>
              </div>
              <h3 className="text-text-main font-semibold mb-2 text-sm sm:text-base">Data-Driven</h3>
              <p className="text-text-muted text-xs sm:text-sm">
                Insights based on real career paths and requirements
              </p>
            </div>

            <div className="bg-primary-card border border-border rounded-xl p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <span className="text-xl sm:text-2xl">⚡</span>
              </div>
              <h3 className="text-text-main font-semibold mb-2 text-sm sm:text-base">Action-Oriented</h3>
              <p className="text-text-muted text-xs sm:text-sm">
                Clear steps you can take, not vague advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mentorship
