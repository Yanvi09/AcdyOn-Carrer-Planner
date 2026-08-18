function Mentorship() {
  return (
    <section id="mentorship" className="py-20 bg-primary-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            A roadmap is better when you know why it exists.
          </h2>
          <p className="text-text-secondary text-lg mb-12">
            Learn from practical guidance, understand what matters for your target role, and focus your effort where it can actually move you forward.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-primary-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-text-main font-semibold mb-2">Role-Specific</h3>
              <p className="text-text-muted text-sm">
                Guidance tailored to your target role and industry
              </p>
            </div>

            <div className="bg-primary-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-text-main font-semibold mb-2">Data-Driven</h3>
              <p className="text-text-muted text-sm">
                Insights based on real career paths and requirements
              </p>
            </div>

            <div className="bg-primary-card border border-border rounded-xl p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-blue/10 flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-text-main font-semibold mb-2">Action-Oriented</h3>
              <p className="text-text-muted text-sm">
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
