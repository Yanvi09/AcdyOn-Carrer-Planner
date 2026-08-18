function Footer() {
  return (
    <footer id="resources" className="bg-primary-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-text-main font-semibold mb-4">AcdyOn Career Planner</h3>
            <p className="text-text-muted text-sm">
              A career planning experience that turns your target role into a practical route.
            </p>
          </div>
          
          <div>
            <h4 className="text-text-main font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-text-secondary hover:text-text-main">Roadmaps</a></li>
              <li><a href="#how-it-works" className="text-text-secondary hover:text-text-main">How It Works</a></li>
              <li><a href="#mentorship" className="text-text-secondary hover:text-text-main">Mentorship</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-text-main font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-text-secondary hover:text-text-main">About</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-main">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-text-main font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-text-secondary hover:text-text-main">Career Planning</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-main">Projects</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-main">Practice</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-muted text-sm">© 2024 AcdyOn. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-text-muted hover:text-text-main text-sm">Privacy</a>
            <a href="#" className="text-text-muted hover:text-text-main text-sm">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
