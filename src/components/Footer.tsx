export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg">
                <span className="text-white font-bold text-sm">FP</span>
              </div>
              <span className="font-bold text-white text-lg">FlowPilot</span>
            </div>
            <p className="text-sm text-slate-400">
              Soluciones de IA para restaurantes modernos.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-white mb-4">Producto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-orange-400 transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Seguridad
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Términos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2026 FlowPilot. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
