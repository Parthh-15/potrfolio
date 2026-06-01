import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/parth-pathari-447406385', icon: FaLinkedin },
    { name: 'GitHub', href: 'https://github.com/Parthh-15', icon: FaGithub },
    { name: 'Email', href: 'mailto:parthabhilashpatharithd@gmail.com', icon: Mail },
  ];

  return (
    <footer className="bg-white border-t border-border py-12 sm:py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-border-light">
          
          {/* Brand/Logo */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-heading font-bold text-lg text-text-primary hover:text-primary-600 transition-colors"
            >
              PP<span className="text-primary-600">.</span>
            </a>
            <p className="text-xs text-text-secondary mt-1">
              B.Tech Artificial Intelligence Student
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-medium text-text-secondary hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-primary-600 hover:border-primary-300 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>

        </div>

        {/* Copyright info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-[11px] text-text-tertiary">
          <p>© {currentYear} Parth Pathari. All rights reserved.</p>
          <p className="font-accent font-medium">
            Designed and Developed by{' '}
            <span className="text-text-secondary font-semibold">Parth Pathari</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
