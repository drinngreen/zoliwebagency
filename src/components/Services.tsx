import React, { useState } from 'react';
import { Smartphone, Globe, Database, LayoutDashboard, Users, Laptop, ArrowUpRight, X } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  details: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: Smartphone,
    title: 'App Native',
    description: 'Sviluppo di applicazioni mobile native per iOS e Android con prestazioni ottimali e user experience eccezionale.',
    details: 'Le nostre app native offrono prestazioni eccezionali e un\'esperienza utente superiore. Sviluppiamo applicazioni iOS e Android ottimizzate per ogni piattaforma, garantendo la massima efficienza e una perfetta integrazione con le funzionalità del dispositivo.',
    features: ['Performance Ottimizzate', 'UI/UX Accattivante', 'Integrazioni API']
  },
  {
    icon: Globe,
    title: 'Progressive Web App',
    description: 'PWA che combinano il meglio del web e delle app native, accessibili da qualsiasi dispositivo.',
    details: 'Le Progressive Web App rappresentano il futuro delle applicazioni web, combinando la facilità di accesso del web con le funzionalità delle app native. Offriamo soluzioni PWA veloci, affidabili e installabili su qualsiasi dispositivo.',
    features: ['Funziona Offline', 'Installabile', 'Cross-platform']
  },
  {
    icon: Laptop,
    title: 'Siti Web',
    description: 'Design e sviluppo di siti web responsive, ottimizzati per SEO e conversioni.',
    details: 'Creiamo siti web moderni e performanti, ottimizzati per i motori di ricerca e progettati per massimizzare le conversioni. Ogni sito è sviluppato con le più recenti tecnologie e best practice del settore.',
    features: ['SEO Ottimizzato', 'Mobile First', 'Performance Elevate']
  },
  {
    icon: Database,
    title: 'Gestionali',
    description: 'Software gestionali personalizzati per ottimizzare i processi aziendali e aumentare l\'efficienza.',
    details: 'I nostri software gestionali sono progettati su misura per le tue esigenze specifiche, automatizzando i processi e migliorando l\'efficienza operativa della tua azienda.',
    features: ['Workflow Automatizzati', 'Report Analytics', 'Multi-piattaforma']
  },
  {
    icon: Users,
    title: 'CRM',
    description: 'Sistemi CRM su misura per gestire clienti, vendite e marketing in modo integrato.',
    details: 'Sviluppiamo sistemi CRM personalizzati che ti permettono di gestire efficacemente le relazioni con i clienti, automatizzare il marketing e ottimizzare il processo di vendita.',
    features: ['Lead Management', 'Automazione Marketing', 'Analytics Avanzate']
  },
  {
    icon: LayoutDashboard,
    title: 'Soluzioni Full Stack',
    description: 'Sviluppo end-to-end di soluzioni digitali complete per ogni esigenza aziendale.',
    details: 'Offriamo soluzioni full stack complete che integrano frontend, backend e infrastruttura in un unico ecosistema coerente e scalabile.',
    features: ['Architettura Scalabile', 'API RESTful', 'Cloud Native']
  }
];

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(5px)' }}
      onClick={onClose}
    >
      <div 
        className="bg-black/60 border border-[#2cd4bd]/20 rounded-lg max-w-md w-full p-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <service.icon className="h-6 w-6 text-[#2cd4bd]" />
            <h3 className="text-xl font-bold text-[#2cd4bd]">{service.title}</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-gray-200 mb-4">{service.details}</p>
        
        <div className="space-y-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-gray-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2cd4bd] mr-2"></span>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#2cd4bd10 1px, transparent 1px), linear-gradient(90deg, #2cd4bd10 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            I Nostri <span className="text-[#2cd4bd]">Servizi</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluzioni tecnologiche all'avanguardia per ogni esigenza
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-black/50 border border-[#2cd4bd]/20 p-8 rounded-xl hover:border-[#2cd4bd] transition-all duration-300 hover:shadow-[0_0_30px_rgba(44,212,189,0.2)] cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-[#2cd4bd]" />
              </div>
              
              <service.icon className="h-12 w-12 text-[#2cd4bd] mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2cd4bd] mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </section>
  );
}