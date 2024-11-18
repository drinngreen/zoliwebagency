import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Store, Building2, Factory } from 'lucide-react';

interface HeroProps {
  onPackageSelect: (packageId: string) => void;
}

interface Plan {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  details: string;
}

const plans: Plan[] = [
  {
    id: 'retail',
    title: 'Retail',
    description: 'Soluzione completa per negozi e piccole attività',
    icon: Store,
    features: ['App + eCommerce', 'Sito Web', 'Gestionale Base'],
    details: 'Pacchetto ideale per negozi e piccole attività che vogliono digitalizzarsi. Include un\'app personalizzata con eCommerce integrato, sito web professionale e gestionale base per la tua attività. Chatbot AI e sistema di prenotazioni inclusi.'
  },
  {
    id: 'business',
    title: 'Business',
    description: 'Soluzione avanzata per PMI',
    icon: Building2,
    features: ['App Personalizzata', 'eCommerce Avanzato', 'Gestionale Completo'],
    details: 'Soluzione completa per PMI che necessitano di una presenza digitale forte. App su misura, eCommerce avanzato con gestione multi-store, gestionale personalizzato. Include AI agent per automazione e analisi avanzate.'
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'Soluzione full-stack personalizzata',
    icon: Factory,
    features: ['Sviluppo Full Custom', 'Integrazioni Complete', 'AI Avanzata'],
    details: 'Soluzione enterprise completamente personalizzabile. Include sviluppo full-stack su misura, integrazioni con sistemi esistenti, widget personalizzati, backend ad alte prestazioni e soluzioni AI avanzate.'
  }
];

export default function Hero({ onPackageSelect }: HeroProps) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
      });

      const target = e.target as HTMLElement;
      if (target.classList.contains('magnify-text') || target.classList.contains('hover-glow')) {
        cursor.classList.add('active');
      } else {
        cursor.classList.remove('active');
      }
    };

    document.addEventListener('mousemove', moveCursor);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden cursor-glow">
      <div className="custom-cursor" ref={cursorRef}></div>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
        <div className="absolute inset-0 circuit-pattern" />
        <div className="absolute inset-0 grid-pattern" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
        <a 
            href="https://zoliweb-gold.netlify.app"
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center px-3 py-1 rounded-full border border-[#ffd900] bg-[#ffd900]/10 mb-8"
          >
            <Sparkles className="h-4 w-4 text-[#ffd900] mr-2" />
            <span className="text-sm text-[#ffd900] hover-glow">Scopri i nostri servizi gold</span>
          </a>
      
          
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6">
            <span className="text-[#2cd4bd] magnify-text relative overflow-hidden">
              Domina
            </span>{' '}
            <span className="text-white magnify-text">il</span>{' '}
            <span className="text-[#2cd4bd] magnify-text">mercato</span>{' '}
            <span className="text-white magnify-text relative overflow-hidden">
              digitale
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_2s_infinite]"></div>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 tracking-wide hover-glow max-w-3xl mx-auto">
            Soluzioni Tecnologiche che Trasformano le Sfide in Opportunità
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="relative bg-black/50 border border-[#2cd4bd]/20 p-8 rounded-xl hover:border-[#2cd4bd] transition-all duration-300 hover:shadow-[0_0_30px_rgba(44,212,189,0.2)] h-full flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <plan.icon className="h-8 w-8 text-[#2cd4bd]" />
                <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2cd4bd] mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onPackageSelect(plan.id);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-[#2cd4bd] text-black px-4 py-3 rounded-md hover:bg-[#25b5a1] transition font-semibold flex items-center justify-center"
                >
                  <span>Richiedi Info</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="px-4 py-3 border border-[#2cd4bd] text-[#2cd4bd] rounded-md hover:bg-[#2cd4bd]/10 transition flex items-center justify-center"
                >
                  Più dettagli
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(5px)' }}
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="bg-black/60 border border-[#2cd4bd]/20 rounded-lg max-w-md w-full p-6"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <selectedPlan.icon className="h-6 w-6 text-[#2cd4bd]" />
              <h3 className="text-xl font-bold text-[#2cd4bd]">{selectedPlan.title}</h3>
            </div>
            <p className="text-gray-200 mb-6">{selectedPlan.details}</p>
            <button
              onClick={() => {
                onPackageSelect(selectedPlan.id);
                setSelectedPlan(null);
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-[#2cd4bd] text-black px-4 py-3 rounded-md hover:bg-[#25b5a1] transition font-semibold flex items-center justify-center"
            >
              <span>Richiedi Preventivo</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}