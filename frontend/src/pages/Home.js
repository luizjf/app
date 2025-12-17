import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BarChart3, Database } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { personalInfo, projects, skills } from '../data/mock';
import '../styles/Home.css';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = personalInfo.tagline;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const topSkills = skills.slice(0, 4);

  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge-container">
              <Badge className="hero-badge">
                <TrendingUp size={16} className="badge-icon" />
                Available for opportunities
              </Badge>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">{personalInfo.name}</span>
            </h1>
            
            <h2 className="hero-subtitle">{personalInfo.title}</h2>
            
            <p className="hero-tagline">
              {displayedText}
              {!isTypingComplete && <span className="cursor">|</span>}
            </p>
            
            <div className="hero-actions">
              <Link to="/projects">
                <Button size="lg" className="hero-button primary">
                  View My Work
                  <ArrowRight size={20} className="button-icon" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="hero-button secondary">
                  Get In Touch
                </Button>
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$2M+</div>
                <div className="stat-label">Business Impact</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card card-1">
              <BarChart3 size={40} className="card-icon" />
              <div className="card-content">
                <div className="card-title">Data Visualization</div>
                <div className="card-desc">Interactive Dashboards</div>
              </div>
            </div>
            <div className="visual-card card-2">
              <Database size={40} className="card-icon" />
              <div className="card-content">
                <div className="card-title">Big Data Processing</div>
                <div className="card-desc">ETL & Pipelines</div>
              </div>
            </div>
            <div className="visual-card card-3">
              <TrendingUp size={40} className="card-icon" />
              <div className="card-content">
                <div className="card-title">Predictive Analytics</div>
                <div className="card-desc">Machine Learning Models</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-preview-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Core Competencies</h2>
            <Link to="/about" className="section-link">
              View All Skills <ArrowRight size={18} />
            </Link>
          </div>
          <div className="skills-grid">
            {topSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h3 className="skill-category">{skill.category}</h3>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-progress-bar">
                  <div 
                    className="skill-progress-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="skill-items">
                  {skill.items.map((item, idx) => (
                    <Badge key={idx} variant="secondary" className="skill-badge">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-preview-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <Link to="/projects" className="section-link">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <Link key={project.id} to={`/projects`} className="project-card">
                <div className="project-image-container">
                  <img src={project.imageUrl} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <Badge className="project-category-badge">{project.category}</Badge>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Let's Work Together</h2>
          <p className="cta-description">
            I'm always interested in hearing about new opportunities and challenging projects.
            Whether you need data analytics, dashboard development, or predictive modeling,
            let's connect and discuss how I can help drive your business forward.
          </p>
          <Link to="/contact">
            <Button size="lg" className="cta-button">
              Start a Conversation
              <ArrowRight size={20} className="button-icon" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
