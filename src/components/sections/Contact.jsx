import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import SectionHeading from '../ui/SectionHeading';
import FadeUp from '../animations/FadeUp';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_portfolio';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'user_portfolio';

      if (publicKey === 'user_portfolio') {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Form data submitted (Simulation):', formData);
      } else {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const socials = [
    {
      name: 'Email',
      value: 'parthabhilashpatharithd@gmail.com',
      href: 'mailto:parthabhilashpatharithd@gmail.com',
      icon: Mail,
      color: '#EA4335',
    },
    {
      name: 'LinkedIn',
      value: 'parth-pathari',
      href: 'https://linkedin.com/in/parth-pathari-447406385',
      icon: FaLinkedin,
      color: '#0A66C2',
    },
    {
      name: 'GitHub',
      value: 'Parthh-15',
      href: 'https://github.com/Parthh-15',
      icon: FaGithub,
      color: '#181717',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          label="Get In Touch"
          title="Let's Collaborate"
          subtitle="Feel free to reach out for project collaboration, job opportunities, or academic inquiries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <FadeUp>
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
                Contact Details
              </h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                I am generally responsive to emails and LinkedIn messages. Drop me a note and I will get back to you as soon as possible.
              </p>
            </FadeUp>

            <div className="space-y-4 pt-4">
              {socials.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <FadeUp key={idx} delay={idx * 0.05}>
                    <a
                      href={social.href}
                      target={social.name !== 'Email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 border border-slate-200/60 rounded-2xl bg-slate-50/50 hover:bg-white hover:border-slate-350 hover:shadow-card transition-all duration-300 group"
                    >
                      <div 
                        className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center transition-colors"
                        style={{ color: social.color }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] text-slate-400 font-accent font-extrabold uppercase tracking-wider">
                          {social.name}
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-slate-950 transition-colors">
                          {social.value}
                        </p>
                      </div>
                    </a>
                  </FadeUp>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1} className="bg-[#fafafa] border border-slate-200/60 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-6">
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-[9px] font-bold font-accent text-slate-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    disabled={status === 'sending' || status === 'success'}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-950/5 transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[9px] font-bold font-accent text-slate-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    disabled={status === 'sending' || status === 'success'}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-950/5 transition-all disabled:opacity-50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[9px] font-bold font-accent text-slate-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here..."
                    disabled={status === 'sending' || status === 'success'}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-4 focus:ring-slate-950/5 resize-none transition-all disabled:opacity-50"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending' || status === 'success'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-black text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:shadow-slate-950/10 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 cursor-pointer text-sm"
                  >
                    {status === 'sending' ? (
                      'Sending Message...'
                    ) : status === 'success' ? (
                      'Sent Successfully!'
                    ) : (
                      <>
                        Send Message <Send size={14} />
                      </>
                    )}
                  </button>
                </div>

                {/* Status Messages */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex items-center gap-2 p-4 bg-emerald-50 text-emerald-800 border border-emerald-250/30 rounded-xl text-sm mt-4"
                    >
                      <CheckCircle size={16} />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex items-center gap-2 p-4 bg-rose-50 text-rose-800 border border-rose-250/30 rounded-xl text-sm mt-4"
                    >
                      <AlertCircle size={16} />
                      <span>Something went wrong. Please try again later.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
