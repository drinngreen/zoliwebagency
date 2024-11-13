import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

interface ContactFormProps {
  selectedPackage: string;
}

const SERVICE_ID = 'service_vnz7a96';
const TEMPLATE_ID = 'template_xpgdcbb';
const PUBLIC_KEY = 'nv4XDgB6QifyGGd4T';
const SENDER_EMAIL = 'info@zoliqua.com'; // Verified sender email

export default function ContactForm({ selectedPackage }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: ''
  });

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, package: selectedPackage }));
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedPackage]);

  const validateEmail = (email: string) => {
    return email
      .toLowerCase()
      .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formElements = formRef.current.elements as HTMLFormControlsCollection;
    const email = (formElements.namedItem('reply_to') as HTMLInputElement)?.value;

    if (!validateEmail(email)) {
      toast.error('Inserisci un indirizzo email valido');
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading('Invio in corso...');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: SENDER_EMAIL,
        reply_to: formData.email,
        to_name: 'Zoli Web Team',
        phone: formData.phone,
        package: formData.package,
        message: formData.message,
        subject: `Nuova richiesta: ${formData.package} - ${formData.name}`
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success('Messaggio inviato con successo! Ti ricontatteremo presto.', {
          id: loadingToast
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          package: '',
          message: ''
        });
      } else {
        throw new Error(`Errore nell'invio: ${result.text}`);
      }
    } catch (error) {
      console.error('Dettagli errore:', error);
      toast.error(
        <div>
          <p>Si è verificato un errore nell'invio del messaggio.</p>
          <p className="mt-2">Per favore contattaci direttamente:</p>
          <ul className="mt-1">
            <li>• Email: info@zoliqua.com</li>
            <li>• Tel: 011 074 1112</li>
          </ul>
        </div>,
        {
          id: loadingToast,
          duration: 8000
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black/95">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Parliamo del Tuo Progetto</h2>
          <p className="mt-4 text-xl text-gray-300">
            Compila il form e ti ricontatteremo entro 24 ore con una proposta su misura
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4">
              {['Retail', 'Business', 'Enterprise'].map((pkg) => (
                <label
                  key={pkg}
                  className={`relative flex items-center p-4 cursor-pointer rounded-lg border ${
                    formData.package.toLowerCase() === pkg.toLowerCase()
                      ? 'border-[#2cd4bd] bg-[#2cd4bd]/10'
                      : 'border-gray-700 hover:border-[#2cd4bd]/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    value={pkg}
                    checked={formData.package.toLowerCase() === pkg.toLowerCase()}
                    onChange={(e) => setFormData(prev => ({ ...prev, package: e.target.value }))}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white">{pkg}</h3>
                      <div className={`w-5 h-5 rounded-full border-2 ${
                        formData.package.toLowerCase() === pkg.toLowerCase()
                          ? 'border-[#2cd4bd] bg-[#2cd4bd]'
                          : 'border-gray-400'
                      }`}>
                        {formData.package.toLowerCase() === pkg.toLowerCase() && (
                          <div className="w-full h-full rounded-full bg-black/30" />
                        )}
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-300">Nome e Cognome</label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="mt-1 block w-full rounded-md bg-black border border-white/20 text-white placeholder-gray-400 focus:border-[#2cd4bd] focus:ring-[#2cd4bd] p-3"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="reply_to" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="reply_to"
                id="reply_to"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                className="mt-1 block w-full rounded-md bg-black border border-white/20 text-white placeholder-gray-400 focus:border-[#2cd4bd] focus:ring-[#2cd4bd] p-3"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Telefono</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="mt-1 block w-full rounded-md bg-black border border-white/20 text-white placeholder-gray-400 focus:border-[#2cd4bd] focus:ring-[#2cd4bd] p-3"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Messaggio</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md bg-black border border-white/20 text-white placeholder-gray-400 focus:border-[#2cd4bd] focus:ring-[#2cd4bd] p-3"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#2cd4bd] hover:bg-[#25b5a1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2cd4bd] transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                'Invio in corso...'
              ) : (
                <>
                  Invia Richiesta
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}