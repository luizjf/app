import React, { useState } from 'react';
import { ExternalLink, Maximize2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { dashboards } from '../data/mock';
import '../styles/Dashboards.css';

const Dashboards = () => {
  const [selectedDashboard, setSelectedDashboard] = useState(null);

  const categories = [...new Set(dashboards.map(d => d.category))];

  return (
    <div className="dashboards-page">
      <section className="dashboards-hero">
        <div className="dashboards-container">
          <h1 className="page-title">Interactive Dashboards</h1>
          <p className="page-subtitle">
            Explore my collection of interactive data visualizations and business intelligence dashboards.
            Click on any dashboard to view it in full screen or access the live version.
          </p>
        </div>
      </section>

      <section className="dashboards-content">
        <div className="section-container">
          <div className="dashboards-grid">
            {dashboards.map((dashboard) => (
              <div key={dashboard.id} className="dashboard-card">
                <div className="dashboard-image-container">
                  <img 
                    src={dashboard.thumbnailUrl} 
                    alt={dashboard.title} 
                    className="dashboard-image" 
                  />
                  <div className="dashboard-overlay">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          size="sm" 
                          className="view-button"
                          onClick={() => setSelectedDashboard(dashboard)}
                        >
                          <Maximize2 size={16} />
                          View Full Screen
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="dashboard-modal">
                        <DialogHeader>
                          <DialogTitle>{dashboard.title}</DialogTitle>
                        </DialogHeader>
                        <div className="modal-content">
                          <p className="modal-description">{dashboard.description}</p>
                          <div className="modal-placeholder">
                            <img 
                              src={dashboard.thumbnailUrl} 
                              alt={dashboard.title} 
                              className="modal-image" 
                            />
                            <div className="embed-placeholder">
                              <p>Dashboard embed will be available here</p>
                              <p className="embed-note">
                                This area is structured to support live dashboard embeds from Power BI, Tableau, 
                                Looker, or custom Plotly/Dash applications via iframe integration.
                              </p>
                            </div>
                          </div>
                          <div className="modal-actions">
                            <Button asChild>
                              <a href={dashboard.embedUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={16} />
                                Open Live Dashboard
                              </a>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="dashboard-info">
                  <div className="dashboard-header">
                    <h3 className="dashboard-title">{dashboard.title}</h3>
                    <Badge variant="secondary" className="tool-badge">
                      {dashboard.tool}
                    </Badge>
                  </div>
                  <p className="dashboard-description">{dashboard.description}</p>
                  <Badge variant="outline" className="category-badge">
                    {dashboard.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="integration-info">
            <h2 className="integration-title">Dashboard Integration Support</h2>
            <div className="integration-grid">
              <div className="integration-card">
                <h3>Power BI</h3>
                <p>Embed live Power BI reports and dashboards using secure embed tokens</p>
              </div>
              <div className="integration-card">
                <h3>Tableau</h3>
                <p>Display interactive Tableau visualizations with full interactivity</p>
              </div>
              <div className="integration-card">
                <h3>Looker</h3>
                <p>Integrate Looker dashboards with SSO and parameterized filters</p>
              </div>
              <div className="integration-card">
                <h3>Python/Plotly</h3>
                <p>Host custom Plotly/Dash applications with real-time data updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboards;
