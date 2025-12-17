import React, { useState } from 'react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { projects } from '../data/mock';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="projects-container">
          <h1 className="page-title">Projects & Case Studies</h1>
          <p className="page-subtitle">
            A collection of data analytics projects showcasing real-world problem solving,
            technical expertise, and measurable business impact
          </p>
        </div>
      </section>

      <section className="projects-content">
        <div className="section-container">
          <Tabs defaultValue="all" className="projects-tabs">
            <TabsList className="tabs-list">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className="tab-trigger"
                >
                  {category === 'all' ? 'All Projects' : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="project-card">
                <div className="project-image-wrapper">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="project-image" 
                  />
                  <div className="project-overlay">
                    <Badge className="category-badge">{project.category}</Badge>
                    {project.featured && (
                      <Badge className="featured-badge">
                        <TrendingUp size={14} /> Featured
                      </Badge>
                    )}
                  </div>
                </div>

                <CardContent className="project-card-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <Badge variant="outline" className="dashboard-badge">
                      {project.dashboardType}
                    </Badge>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-details">
                    <div className="detail-section">
                      <h4 className="detail-title">Problem</h4>
                      <p className="detail-text">{project.problemStatement}</p>
                    </div>

                    <div className="detail-section">
                      <h4 className="detail-title">Solution</h4>
                      <p className="detail-text">{project.solution}</p>
                    </div>

                    <div className="detail-section">
                      <h4 className="detail-title">Impact</h4>
                      <ul className="impact-list">
                        {project.impact.map((item, idx) => (
                          <li key={idx} className="impact-item">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="tech-badge">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="project-actions">
                    <Button variant="default" size="sm" className="project-button">
                      <ExternalLink size={16} />
                      View Dashboard
                    </Button>
                    <Button variant="outline" size="sm" className="project-button">
                      <Github size={16} />
                      Source Code
                    </Button>
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

export default Projects;
