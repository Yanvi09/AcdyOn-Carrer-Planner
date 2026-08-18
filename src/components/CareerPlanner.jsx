import { useState } from 'react'
import { X, ArrowRight, CheckCircle2 } from 'lucide-react'
import { roadmapData } from '../data/roadmapData'

function CareerPlanner({ isOpen, onClose }) {
  const [step, setStep] = useState(1)
  const [plannerData, setPlannerData] = useState({
    space: '',
    role: '',
    company: '',
    income: '',
    timeline: ''
  })
  const [generatedRoadmap, setGeneratedRoadmap] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const spaces = ['Software Engineering', 'Product', 'Data', 'Design', 'Marketing']
  
  const rolesBySpace = {
    'Software Engineering': ['Frontend Engineer', 'Backend Engineer', 'Full Stack Engineer', 'DevOps Engineer', 'Data Engineer'],
    'Product': ['Product Manager'],
    'Data': ['Data Scientist'],
    'Design': ['Product Designer'],
    'Marketing': ['Growth Marketer']
  }
  
  const incomes = ['₹6 LPA', '₹10 LPA', '₹15 LPA', '₹20+ LPA']
  const timelines = ['3 months', '6 months', '12 months', '18 months']

  const handleClose = () => {
    onClose()
    // Reset state when closing
    setStep(1)
    setPlannerData({ space: '', role: '', company: '', income: '', timeline: '' })
    setGeneratedRoadmap(null)
  }

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleGenerate = () => {
    setIsGenerating(true)
    
    // Simulate generation delay
    setTimeout(() => {
      const roadmap = roadmapData[plannerData.space]?.[plannerData.role]
      if (roadmap) {
        setGeneratedRoadmap(roadmap.phases)
      }
      setIsGenerating(false)
      setStep(6) // Roadmap results step
    }, 1500)
  }

  const handleReset = () => {
    setStep(1)
    setPlannerData({ space: '', role: '', company: '', income: '', timeline: '' })
    setGeneratedRoadmap(null)
  }

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-background/95 backdrop-blur-sm p-4">
      <div className="bg-primary-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Build Your Career Roadmap</h2>
          <button
            onClick={handleClose}
            className="text-text-muted hover:text-text-main"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress indicator */}
        <div className="px-6 pt-6">
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full ${
                  s <= step ? 'bg-primary-blue' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">Choose your space</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {spaces.map((space) => (
                  <button
                    key={space}
                    onClick={() => setPlannerData({ ...plannerData, space })}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      plannerData.space === space
                        ? 'border-primary-blue bg-primary-blue/10'
                        : 'border-border hover:border-primary-cyan/50 bg-primary-cardLight'
                    }`}
                  >
                    <span className="text-text-main">{space}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">Choose your role</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {rolesBySpace[plannerData.space]?.map((role) => (
                  <button
                    key={role}
                    onClick={() => setPlannerData({ ...plannerData, role })}
                    className={`p-4 rounded-lg border text-left transition-all ${
                      plannerData.role === role
                        ? 'border-primary-blue bg-primary-blue/10'
                        : 'border-border hover:border-primary-cyan/50 bg-primary-cardLight'
                    }`}
                  >
                    <span className="text-text-main">{role}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">What company are you targeting?</h3>
              <input
                type="text"
                value={plannerData.company}
                onChange={(e) => setPlannerData({ ...plannerData, company: e.target.value })}
                placeholder="e.g. Google, Microsoft, a startup..."
                className="w-full bg-primary-cardLight border border-border rounded-lg px-4 py-3 text-text-main placeholder-text-muted focus:outline-none focus:border-primary-blue"
              />
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">Target income</h3>
              <div className="grid grid-cols-2 gap-3">
                {incomes.map((income) => (
                  <button
                    key={income}
                    onClick={() => setPlannerData({ ...plannerData, income })}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      plannerData.income === income
                        ? 'border-primary-blue bg-primary-blue/10'
                        : 'border-border hover:border-primary-cyan/50 bg-primary-cardLight'
                    }`}
                  >
                    <span className="text-text-main">{income}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium mb-4">Timeline</h3>
              <div className="grid grid-cols-2 gap-3">
                {timelines.map((timeline) => (
                  <button
                    key={timeline}
                    onClick={() => setPlannerData({ ...plannerData, timeline })}
                    className={`p-4 rounded-lg border text-center transition-all ${
                      plannerData.timeline === timeline
                        ? 'border-primary-blue bg-primary-blue/10'
                        : 'border-border hover:border-primary-cyan/50 bg-primary-cardLight'
                    }`}
                  >
                    <span className="text-text-main">{timeline}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {isGenerating && (
            <div className="text-center py-12">
              <div className="animate-spin w-12 h-12 border-4 border-primary-blue border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-text-secondary">Mapping your destination...</p>
            </div>
          )}

          {step === 6 && generatedRoadmap && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-main mb-2">Your Career Route</h3>
                <p className="text-primary-cyan text-lg">{plannerData.role}</p>
                <div className="flex justify-center space-x-4 text-text-secondary text-sm mt-2">
                  <span>Target: {plannerData.income}</span>
                  <span>•</span>
                  <span>Timeline: {plannerData.timeline}</span>
                </div>
              </div>

              <div className="space-y-4">
                {generatedRoadmap.map((phase, index) => (
                  <div
                    key={index}
                    className="bg-primary-cardLight border border-border rounded-lg p-4"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center">
                        <span className="text-primary-blue text-sm font-medium">{index + 1}</span>
                      </div>
                      <h4 className="text-text-main font-medium">{phase.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-11">
                      {phase.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-primary-background border border-border px-3 py-1 rounded-full text-xs text-text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleReset}
                className="w-full mt-6 text-text-secondary hover:text-text-main text-sm"
              >
                Start over
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {step < 6 && !isGenerating && (
          <div className="flex items-center justify-between p-6 border-t border-border">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`px-4 py-2 rounded-lg transition-all ${
                step === 1
                  ? 'text-text-muted cursor-not-allowed'
                  : 'text-text-secondary hover:text-text-main hover:bg-primary-cardLight'
              }`}
            >
              Back
            </button>
            
            {step < 5 ? (
              <button
                onClick={handleNext}
                disabled={
                  (step === 1 && !plannerData.space) ||
                  (step === 2 && !plannerData.role) ||
                  (step === 3 && !plannerData.company) ||
                  (step === 4 && !plannerData.income)
                }
                className="bg-primary-blue hover:bg-primary-brightBlue disabled:bg-border disabled:text-text-muted text-white px-6 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleGenerate}
                disabled={!plannerData.timeline}
                className="bg-primary-blue hover:bg-primary-brightBlue disabled:bg-border disabled:text-text-muted text-white px-6 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 disabled:cursor-not-allowed"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Generate My Roadmap</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default CareerPlanner
