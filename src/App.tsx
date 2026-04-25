import { useState, useEffect } from 'react';
import { Bot, Utensils, Zap, BarChart3, Sun, Moon } from 'lucide-react';
// Asegúrate de que la ruta y extensión coincidan con tu archivo en src/assets/
import heroImage from './assets/bot.png';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen font-sans selection:bg-orange-500/30 transition-colors duration-300 ${
      isDark ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'
    }`}>
      
      {/* Navbar con Glassmorphism Optimizado y soporte Touch */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${
        isDark ? 'bg-slate-950/40 border-slate-800/50' : 'bg-white/40 border-slate-200/50'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-600/20">
              <Bot size={26} className="text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">FlowPilot</span>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            {/* Botón de tema con área de toque mejorada para móvil */}
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-3 rounded-full border transition-all active:scale-90 touch-manipulation ${
                isDark 
                ? 'border-slate-800 bg-slate-900 text-orange-400 hover:bg-slate-800' 
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 shadow-sm' 
              }`}
              aria-label="Cambiar tema"
            >
              {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            
            <button className="bg-orange-600 hover:bg-orange-700 active:scale-95 touch-manipulation text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-600/20 transition-all">
              Probar Demo
            </button>
          </div>
        </div>
      </nav>

      <main className="animate-fade-in-up">
        {/* Hero Section */}
        <section className="pt-44 pb-20 px-6 text-center">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full text-orange-500 text-xs font-bold uppercase tracking-widest mb-8">
              <Zap size={14} /> Impulsado por IA
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tighter">
              Tu restaurante en <span className="text-orange-500">piloto automático.</span>
            </h1>
            <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              FlowPilot gestiona tus pedidos por WhatsApp y Web, sugiere adicionales automáticamente y se integra con tu cocina. Más ventas, cero errores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {/* Botón Principal: Colores originales (600 -> 700) + Nueva interacción de clic */}
              <button className="bg-orange-600 hover:bg-orange-700 active:scale-90 touch-manipulation text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-orange-600/30 transition-all cursor-pointer">
                Prueba gratis
              </button>

              {/* Botón Secundario: Colores originales + Nueva interacción de clic */}
              <button className={`px-10 py-5 rounded-full font-bold text-lg transition-all border active:scale-90 touch-manipulation cursor-pointer ${
                isDark 
                ? 'bg-slate-900 border-slate-800 text-white hover:bg-slate-800' 
                : 'bg-white border-slate-200 text-slate-900 hover:bg-slate-300 shadow-sm'
              }`}>
                Ver demostración
              </button>
            </div>
          </div>
          {/* Imagen de la Plataforma con Efectos Hover/Active */}
          <div className="max-w-6xl mx-auto relative group px-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            <img 
              src={heroImage} 
              alt="Dashboard de FlowPilot" 
              className={`relative rounded-2xl border shadow-2xl w-full h-auto transition-all duration-700 md:group-hover:scale-[1.01] ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}
            />
          </div>

          {/* Marcas de Confianza */}
          <div className="max-w-6xl mx-auto mt-28 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
            <p className={`text-xs font-bold tracking-[0.3em] mb-12 uppercase ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              Líderes en tecnología gastronómica
            </p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center font-black text-2xl md:text-4xl italic tracking-tighter">
              <span className="hover:text-orange-500 transition-colors cursor-default select-none">GRILL & CO</span>
              <span className="hover:text-orange-500 transition-colors cursor-default select-none">PIZZA HUB</span>
              <span className="hover:text-orange-500 transition-colors cursor-default select-none">BURGER BOX</span>
              <span className="hover:text-orange-500 transition-colors cursor-default select-none">TACO BAR</span>
            </div>
          </div>
        </section>

        {/* Features Grid con soporte táctil (Active) */}
        <section id="features" className={`py-28 border-y transition-colors duration-500 ${
          isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-100/50 border-slate-200'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className={`text-3xl md:text-5xl font-extrabold text-center mb-20 tracking-tight ${isDark ? 'text-orange-500' : 'text-orange-600'}`}>
              Todo lo que necesitas para crecer
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { icon: <Utensils size={28}/>, title: "Toma de Pedidos 24/7", desc: "Atiende cientos de clientes simultáneamente en WhatsApp e Instagram sin pausas ni errores humanos." },
                { icon: <BarChart3 size={28}/>, title: "Upselling Inteligente", desc: "Nuestra IA sugiere complementos estratégicos, aumentando tu ticket promedio en más de un 20%." },
                { icon: <Zap size={28}/>, title: "Sincronización POS", desc: "Integración nativa. Los pedidos fluyen directamente a tu sistema de facturación o comandas de cocina." }
              ].map((item, i) => (
                <div key={i} className={`p-10 rounded-3xl border transition-all duration-300 touch-manipulation active:scale-95 md:hover:-translate-y-2 ${
                  isDark 
                  ? 'bg-slate-950 border-slate-800 hover:border-orange-500/50' 
                  : 'bg-white border-slate-200 shadow-md hover:border-orange-600/30'
                }`}>
                  <div className="text-orange-500 mb-8 p-4 bg-orange-500/5 rounded-2xl inline-block shadow-inner">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className={`text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-20 border-t transition-colors duration-500 ${isDark ? 'border-slate-800' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 opacity-60">
          <div className="flex items-center gap-2 font-bold italic text-2xl">
            <Bot size={28} className="text-orange-600" /> FlowPilot
          </div>
          <div className="flex gap-10 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-orange-500 transition-colors">Términos</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Soporte</a>
          </div>
          <p className="text-sm font-medium">© 2026 FlowPilot. Innovación para la industria gastronómica.</p>
        </div>
      </footer>
    </div>
  );
}