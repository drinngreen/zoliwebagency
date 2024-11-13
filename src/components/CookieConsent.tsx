import React, { useState, useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setPreferences({ necessary: true, analytics: true, marketing: true });
    localStorage.setItem('cookieConsent', 'all');
    setIsOpen(false);
  };

  const handleAcceptNecessary = () => {
    setPreferences({ necessary: true, analytics: false, marketing: false });
    localStorage.setItem('cookieConsent', 'necessary');
    setIsOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsOpen(false);
  };

  if (!isOpen) return null;

  const DetailedInfo = () => (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 p-4">
      <div className="max-w-2xl mx-auto bg-black border border-[#2cd4bd]/20 rounded-lg shadow-lg mt-10">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">Informativa sui Cookie</h3>
            <button onClick={() => setShowDetails(false)} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="prose prose-invert prose-sm max-w-none">
            <p className="text-gray-300">
              Questo sito web (zoliweb.com) utilizza i cookie e tecnologie simili per garantire il corretto funzionamento delle procedure e migliorare l'esperienza di uso delle applicazioni online.
            </p>

            <h4 className="text-white font-semibold mt-4">Titolare del Trattamento</h4>
            <p className="text-gray-300">
              Drinn Green SCS<br />
              Corso Unione Sovietica 612/15/B<br />
              10135 Torino (TO)<br />
              P.IVA: 12318010019
            </p>

            <h4 className="text-white font-semibold mt-4">Cosa sono i cookie</h4>
            <p className="text-gray-300">
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita.
            </p>

            <h4 className="text-white font-semibold mt-4">Tipologie di Cookie utilizzati</h4>

            <h5 className="text-[#2cd4bd] mt-2">Cookie tecnici (necessari)</h5>
            <p className="text-gray-300">
              Sono necessari per il corretto funzionamento del sito. Senza questi cookie, il sito non funzionerebbe correttamente. Secondo la normativa vigente, non è richiesto un consenso esplicito per il loro utilizzo.
            </p>

            <h5 className="text-[#2cd4bd] mt-2">Cookie analitici (statistiche)</h5>
            <p className="text-gray-300">
              Ci aiutano a capire come gli utenti interagiscono con il nostro sito raccogliendo e trasmettendo informazioni in forma anonima.
            </p>

            <h5 className="text-[#2cd4bd] mt-2">Cookie di profilazione (marketing)</h5>
            <p className="text-gray-300">
              Sono utilizzati per tracciare la navigazione dell'utente in rete e creare profili sui suoi gusti, abitudini, scelte, ecc.
            </p>

            <h4 className="text-white font-semibold mt-4">I tuoi diritti</h4>
            <p className="text-gray-300">
              Puoi gestire le tue preferenze sui cookie in qualsiasi momento, modificando le impostazioni del browser. Inoltre, hai il diritto di:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Accedere ai tuoi dati personali</li>
              <li>Richiedere la rettifica o la cancellazione</li>
              <li>Richiedere la limitazione del trattamento</li>
              <li>Opporti al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
            </ul>

            <p className="text-gray-300 mt-4">
              Per esercitare questi diritti o per qualsiasi altra informazione, puoi contattarci all'indirizzo della sede legale sopra indicato.
            </p>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setShowDetails(false)}
              className="px-4 py-2 bg-[#2cd4bd] text-black rounded-md hover:bg-[#25b5a1] transition"
            >
              Chiudi
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showDetails && <DetailedInfo />}
      <div className="fixed inset-x-0 bottom-0 z-50 p-4">
        <div className="max-w-2xl mx-auto bg-black border border-[#2cd4bd]/20 rounded-lg shadow-lg">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">
                Informativa sui Cookie
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            {!showCustomize ? (
              <>
                <p className="text-sm text-gray-300 mb-4">
                  Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Alcuni sono necessari per il funzionamento, mentre altri ci aiutano a migliorare le prestazioni e l'esperienza utente.
                </p>

                <button
                  onClick={() => setShowDetails(true)}
                  className="inline-flex items-center text-[#2cd4bd] hover:text-[#25b5a1] text-sm mb-4"
                >
                  Maggiori dettagli
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-[#2cd4bd] text-black px-3 py-1.5 rounded-md text-sm hover:bg-[#25b5a1] transition"
                  >
                    Accetta tutti
                  </button>
                  <button
                    onClick={handleAcceptNecessary}
                    className="flex-1 border border-[#2cd4bd] text-[#2cd4bd] px-3 py-1.5 rounded-md text-sm hover:bg-[#2cd4bd] hover:text-black transition"
                  >
                    Solo necessari
                  </button>
                  <button
                    onClick={() => setShowCustomize(true)}
                    className="flex-1 border border-gray-600 text-white px-3 py-1.5 rounded-md text-sm hover:border-white transition"
                  >
                    Personalizza
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">Cookie tecnici</p>
                      <p className="text-xs text-gray-400">Essenziali per il funzionamento</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="h-4 w-4 accent-[#2cd4bd]"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">Cookie analitici</p>
                      <p className="text-xs text-gray-400">Per analisi anonima</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="h-4 w-4 accent-[#2cd4bd]"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-white">Cookie marketing</p>
                      <p className="text-xs text-gray-400">Per personalizzazione</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="h-4 w-4 accent-[#2cd4bd]"
                    />
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 bg-[#2cd4bd] text-black px-3 py-1.5 rounded-md text-sm hover:bg-[#25b5a1] transition"
                  >
                    Salva preferenze
                  </button>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="flex-1 border border-gray-600 text-white px-3 py-1.5 rounded-md text-sm hover:border-white transition"
                  >
                    Indietro
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}