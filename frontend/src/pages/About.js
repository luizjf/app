import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { personalInfo, aboutContent, skills, experience, certifications } from '../data/mock';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-container">
          <h1 className="page-title">About Me</h1>
          <p className="page-subtitle">
            Data analyst passionate about transforming complex data into strategic business insights
          </p>
        </div>
      </section>

      <section className="bio-section">
        <div className="section-container">
          <div className="bio-grid">
            <div className="bio-content">
              <h2 className="bio-title">Professional Summary</h2>
              <p className="bio-text">{aboutContent.bio}</p>
              
              <div className="highlights">
                <h3 className="highlights-title">Key Highlights</h3>
                <ul className="highlights-list">
                  {aboutContent.highlights.map((highlight, index) => (
                    <li key={index} className="highlight-item">{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="goals">
                <h3 className="goals-title">Career Goals</h3>
                <p className="goals-text">{aboutContent.goals}</p>
              </div>

              <a href={personalInfo.resumeUrl} download>
                <Button size="lg" className="resume-button">
                  <Download size={20} />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="bio-sidebar">
              <Card className="info-card">
                <CardContent className="info-content">
                  <h3 className="info-title">Contact Information</h3>
                  <div className="info-list">
                    <div className="info-item">
                      <span className="info-label">Email</span>
                      <a href={`mailto:${personalInfo.email}`} className="info-value">
                        {personalInfo.email}
                      </a>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Location</span>
                      <span className="info-value">{personalInfo.location}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">LinkedIn</span>
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="info-value">
                        View Profile
                      </a>
                    </div>
                    <div className="info-item">
                      <span className="info-label">GitHub</span>
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="info-value">
                        View Repositories
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="certifications-card">
                <CardContent className="cert-content">
                  <h3 className="cert-title">Certifications</h3>
                  <div className="cert-list">
                    {certifications.map((cert, index) => (
                      <div key={index} className="cert-item">
                        <div className="cert-name">{cert.name}</div>
                        <div className="cert-details">
                          <span className="cert-issuer">{cert.issuer}</span>
                          <span className="cert-year">{cert.year}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <Card key={index} className="skill-card">
                <CardContent className="skill-card-content">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="section-container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-timeline">
            {experience.map((exp) => (
              <Card key={exp.id} className="experience-card">
                <CardContent className="experience-content">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <div className="experience-company">{exp.company}</div>
                    </div>
                    <Badge variant="outline" className="experience-period">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="achievements">
                    <h4 className="achievements-title">Key Achievements:</h4>
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
