import React, { useState } from 'react';
import { Mail, Linkedin, Github, MessageCircle, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { personalInfo } from '../data/mock';
import '../styles/Contact.css';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`,
      color: 'blue'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: personalInfo.linkedin,
      color: 'blue'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'View my code',
      link: personalInfo.github,
      color: 'purple'
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'WhatsApp',
      value: 'Message me',
      link: personalInfo.whatsapp,
      color: 'green'
    }
  ];

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">
            I'm always open to discussing new opportunities, interesting projects, or partnerships.
            Feel free to reach out through any of the channels below.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <Card className="contact-form-card">
                <CardContent className="form-content">
                  <h2 className="form-title">Send Me a Message</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me more about your project or opportunity..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="submit-button">
                      <Send size={20} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="contact-info-section">
              <div className="contact-methods">
                <h2 className="methods-title">Other Ways to Connect</h2>
                <div className="methods-grid">
                  {contactMethods.map((method, index) => (
                    <a
                      key={index}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="method-card"
                    >
                      <div className={`method-icon ${method.color}`}>
                        {method.icon}
                      </div>
                      <div className="method-content">
                        <div className="method-label">{method.label}</div>
                        <div className="method-value">{method.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <Card className="location-card">
                <CardContent className="location-content">
                  <div className="location-icon">
                    <MapPin size={32} />
                  </div>
                  <h3 className="location-title">Location</h3>
                  <p className="location-text">{personalInfo.location}</p>
                  <p className="location-note">
                    Open to remote opportunities worldwide
                  </p>
                </CardContent>
              </Card>

              <Card className="availability-card">
                <CardContent className="availability-content">
                  <h3 className="availability-title">Current Availability</h3>
                  <div className="availability-status">
                    <span className="status-indicator"></span>
                    <span className="status-text">Available for opportunities</span>
                  </div>
                  <p className="availability-note">
                    I typically respond within 24-48 hours. For urgent inquiries,
                    please reach out via WhatsApp or email directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
