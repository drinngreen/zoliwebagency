import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import CookieConsent from './components/CookieConsent';
import { Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [selectedPackage, setSelectedPackage] = useState('');

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero onPackageSelect={setSelectedPackage} />
      <Services />
      <ContactForm selectedPackage={selectedPackage} />
      <CookieConsent />
      
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#2cd4bd]">Zoli Web</h3>
              <p className="text-gray-400">
                Trasformiamo le tue idee in realtà digitali di successo
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#2cd4bd]">Servizi</h3>
              <ul className="text-gray-400 space-y-2">
                <li>App Native</li>
                <li>Progressive Web App</li>
                <li>Siti Web</li>
                <li>Gestionali</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#2cd4bd]">Contatti</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 text-[#2cd4bd] mr-2" />
                  <a href="mailto:info@zoliqua.com" className="hover:text-[#2cd4bd] transition">
                    info@zoliqua.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-5 w-5 text-[#2cd4bd] mr-2" />
                  <a href="tel:0110741112" className="hover:text-[#2cd4bd] transition">
                    011 074 1112
                  </a>
                </div>
                <div className="flex items-start text-gray-400">
                  <MapPin className="h-5 w-5 text-[#2cd4bd] mr-2 mt-1" />
                  <span>
                    Corso Unione Sovietica 612/15/B<br />
                    Torino
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Zoli Web. Tutti i diritti riservati.</p>
            <p className="text-gray-500 text-xs mt-2">
              ZOLIWEB e ZOLIQUA sono marchi di proprietà di Drinn Green s.c.s
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;