export default function Hero() {
  return (
    <section className="w-full py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-block w-fit">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/30">
                ✨ Impulsado por IA
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl font-extrabold text-orange-500 leading-tight">
              Tu restaurante en piloto automático
              <span className="block text-white">con IA</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              FlowPilot gestiona tus pedidos por WhatsApp y Web, sugiere adicionales automáticamente y se integra con tu cocina. Más ventas, cero errores.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 font-bold text-lg shadow-lg hover:shadow-orange-600/50">
                Prueba gratis
              </button>
              <button className="border-2 border-orange-500/50 hover:border-orange-500 text-orange-400 hover:text-orange-300 px-8 py-4 rounded-full transition-all font-bold text-lg">
                Ver demostración
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex gap-8 pt-8 border-t border-slate-800">
              <div>
                <p className="text-2xl font-extrabold text-orange-500">500+</p>
                <p className="text-sm text-slate-400">Restaurantes activos</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-orange-500">98%</p>
                <p className="text-sm text-slate-400">Satisfacción</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-orange-500">24/7</p>
                <p className="text-sm text-slate-400">Atención</p>
              </div>
            </div>
          </div>

          {/* Right: Mockup/Image */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md h-96 bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl border border-slate-800 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent"></div>
              <div className="relative z-10 text-center">
                <div className="text-8xl mb-4">📱</div>
                <p className="text-slate-300 text-lg font-semibold">Dashboard FlowPilot</p>
                <p className="text-slate-400 text-sm mt-2">Sistema inteligente para tu restaurante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
