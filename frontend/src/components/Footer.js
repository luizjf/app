import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, MessageCircle, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <Github size={20} />, url: personalInfo.github, label: 'GitHub' },
    { icon: <Mail size={20} />, url: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: <MessageCircle size={20} />, url: personalInfo.whatsapp, label: 'WhatsApp' }
  ];

  const footerLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/dashboards', label: 'Dashboards' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">{personalInfo.name}</h3>
            <p className="footer-tagline">{personalInfo.title}</p>
            <p className="footer-description">
              {personalInfo.tagline}
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href={personalInfo.resumeUrl}
              download
              className="footer-resume-link"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Built with data-driven precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
