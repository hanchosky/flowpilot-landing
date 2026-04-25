import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Beneficios', href: '#benefits' },
    { label: 'Casos de Éxito', href: '#success' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
              <Zap className="w-6 h-6 text-white" strokeWidth={3} />
            </div>
            <span className="font-extrabold text-lg bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              FlowPilot
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-orange-400 font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <button className="hidden md:block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 font-bold shadow-lg hover:shadow-orange-600/50">
            Comenzar Ahora
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800">
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-300 hover:text-orange-400 font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 px-4 rounded-full font-bold shadow-lg hover:shadow-orange-600/50 transition-all duration-300 mx-0 mt-2">
                Comenzar Ahora
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
