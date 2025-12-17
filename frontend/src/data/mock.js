// Mock data for Data Analyst Portfolio

export const personalInfo = {
  name: "[Your Name]",
  title: "Data Analyst | Business Intelligence Analyst",
  tagline: "Turning data into actionable insights that drive business decisions.",
  email: "yourname@email.com",
  phone: "+1234567890",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
  whatsapp: "https://wa.me/1234567890",
  resumeUrl: "/resume.pdf",
  location: "San Francisco, CA"
};

export const aboutContent = {
  bio: "Results-driven Data Analyst with 3+ years of experience transforming complex datasets into strategic business insights. Specialized in building interactive dashboards, conducting predictive analytics, and delivering data-driven recommendations that impact bottom-line results. Proven track record of collaborating with cross-functional teams to identify trends, optimize processes, and drive informed decision-making.",
  highlights: [
    "Advanced proficiency in SQL, Python, and R for data manipulation and analysis",
    "Expert in creating interactive dashboards using Power BI, Tableau, and Looker",
    "Strong statistical analysis and predictive modeling capabilities",
    "Experience with ETL processes and data warehouse optimization",
    "Excellent communicator, translating technical findings to non-technical stakeholders"
  ],
  goals: "Seeking opportunities to leverage data analytics expertise in a dynamic organization where I can contribute to data-driven strategy, mentor junior analysts, and continuously expand my technical skill set in machine learning and advanced analytics."
};

export const skills = [
  { category: "Programming Languages", items: ["Python", "R", "SQL", "JavaScript"], level: 90 },
  { category: "BI & Visualization", items: ["Power BI", "Tableau", "Looker", "Plotly", "D3.js"], level: 85 },
  { category: "Data Processing", items: ["Pandas", "NumPy", "Apache Spark", "ETL Pipelines"], level: 80 },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Snowflake"], level: 85 },
  { category: "Statistical Analysis", items: ["Hypothesis Testing", "A/B Testing", "Regression Analysis", "Time Series"], level: 88 },
  { category: "Machine Learning", items: ["Scikit-learn", "TensorFlow", "Random Forest", "XGBoost"], level: 75 },
  { category: "Tools & Platforms", items: ["Git", "Docker", "Jupyter", "Google Analytics", "AWS"], level: 80 }
];

export const projects = [
  {
    id: 1,
    title: "Sales Performance Dashboard",
    category: "Business Intelligence",
    description: "Comprehensive Power BI dashboard tracking sales metrics across multiple regions, providing real-time insights into revenue trends, product performance, and sales team efficiency.",
    problemStatement: "The sales team lacked visibility into regional performance and couldn't identify underperforming products quickly, leading to missed optimization opportunities.",
    solution: "Built an interactive dashboard with drill-down capabilities, automated data refresh, and predictive forecasting that reduced reporting time by 70% and increased quarterly sales by 15%.",
    impact: ["70% reduction in manual reporting time", "15% increase in quarterly sales", "Identified $200K in revenue opportunities"],
    technologies: ["Power BI", "SQL Server", "DAX", "Power Query"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    dashboardType: "Power BI",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Customer Churn Prediction Model",
    category: "Machine Learning",
    description: "Predictive analytics model using Python and machine learning algorithms to identify customers at risk of churning, enabling proactive retention strategies.",
    problemStatement: "Customer churn rate was 25% annually, costing the company millions in lost revenue without clear indicators of at-risk customers.",
    solution: "Developed a Random Forest classification model with 87% accuracy, integrated with a real-time dashboard that flags high-risk customers and recommends personalized retention tactics.",
    impact: ["87% prediction accuracy", "Reduced churn rate from 25% to 18%", "Saved $1.2M in annual revenue"],
    technologies: ["Python", "Scikit-learn", "Pandas", "Tableau", "PostgreSQL"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    dashboardType: "Jupyter Notebook",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Marketing Campaign Analytics",
    category: "Digital Analytics",
    description: "End-to-end analysis of multi-channel marketing campaigns with attribution modeling, ROI tracking, and automated reporting for the marketing team.",
    problemStatement: "Marketing spend was $500K annually with unclear ROI and no systematic way to compare channel effectiveness.",
    solution: "Created a unified analytics framework combining data from Google Analytics, Facebook Ads, and email platforms, with custom attribution models that optimized budget allocation.",
    impact: ["42% improvement in marketing ROI", "Reallocated $150K to high-performing channels", "3x faster campaign reporting"],
    technologies: ["Google Analytics", "Python", "Looker", "BigQuery", "API Integration"],
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=500&fit=crop",
    dashboardType: "Looker",
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Inventory Optimization System",
    category: "Operations Analytics",
    description: "Predictive inventory management system that forecasts demand patterns and optimizes stock levels across 50+ retail locations.",
    problemStatement: "Inventory costs were 30% higher than industry average due to overstocking and frequent stockouts causing lost sales.",
    solution: "Built time-series forecasting models with seasonal adjustments and automated reorder triggers, integrated with the ERP system for seamless inventory management.",
    impact: ["30% reduction in inventory holding costs", "85% decrease in stockouts", "$500K annual savings"],
    technologies: ["Python", "ARIMA", "Prophet", "SQL", "Power BI"],
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=500&fit=crop",
    dashboardType: "Power BI",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "HR Analytics Dashboard",
    category: "People Analytics",
    description: "Comprehensive HR metrics dashboard tracking employee satisfaction, retention rates, hiring pipeline, and diversity metrics.",
    problemStatement: "HR department relied on quarterly manual reports, missing real-time insights into workforce trends and retention risks.",
    solution: "Developed an interactive Tableau dashboard with predictive attrition modeling and diversity analytics, enabling data-driven HR decisions.",
    impact: ["Real-time access to 50+ HR metrics", "Improved retention by 12%", "Reduced time-to-hire by 25%"],
    technologies: ["Tableau", "SQL", "Python", "HR Systems API"],
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    dashboardType: "Tableau",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "Financial KPI Tracking System",
    category: "Financial Analytics",
    description: "Automated financial reporting system consolidating data from multiple sources to track key financial KPIs and variance analysis.",
    problemStatement: "Finance team spent 40 hours monthly consolidating data from disparate systems for executive reporting.",
    solution: "Created an automated ETL pipeline with Power BI dashboards showing real-time P&L, cash flow, and budget variance analysis.",
    impact: ["95% reduction in manual reporting time", "Daily financial insights vs monthly", "Improved forecasting accuracy by 25%"],
    technologies: ["Power BI", "SQL Server", "Python", "Excel VBA"],
    imageUrl: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=500&fit=crop",
    dashboardType: "Power BI",
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const dashboards = [
  {
    id: 1,
    title: "Executive Sales Dashboard",
    tool: "Power BI",
    description: "Real-time sales performance tracking with predictive analytics",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    embedUrl: "#",
    category: "Sales"
  },
  {
    id: 2,
    title: "Customer Segmentation Analysis",
    tool: "Tableau",
    description: "Interactive customer behavior and segmentation visualization",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    embedUrl: "#",
    category: "Marketing"
  },
  {
    id: 3,
    title: "Supply Chain Metrics",
    tool: "Looker",
    description: "End-to-end supply chain performance and optimization insights",
    thumbnailUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    embedUrl: "#",
    category: "Operations"
  },
  {
    id: 4,
    title: "Predictive Analytics Model",
    tool: "Python/Plotly",
    description: "Interactive machine learning model results and predictions",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    embedUrl: "#",
    category: "Data Science"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "VP of Sales",
    company: "TechCorp Inc.",
    content: "The sales dashboard transformed how our team operates. We now make data-driven decisions in real-time, and our quarterly performance has improved significantly.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Director of Marketing",
    company: "GrowthLabs",
    content: "The marketing analytics framework helped us optimize our $500K budget with precision. The ROI improvement was beyond our expectations.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Chief Operations Officer",
    company: "RetailMax",
    content: "The inventory optimization system saved us half a million dollars in the first year. The insights are actionable and the implementation was seamless.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  }
];

export const experience = [
  {
    id: 1,
    company: "TechCorp Inc.",
    role: "Senior Data Analyst",
    period: "2022 - Present",
    description: "Lead analytics initiatives for sales and marketing teams, managing a portfolio of dashboards serving 100+ users.",
    achievements: [
      "Built 15+ production dashboards in Power BI and Tableau",
      "Reduced reporting time by 70% through automation",
      "Led data governance initiative improving data quality by 40%"
    ]
  },
  {
    id: 2,
    company: "DataDriven Solutions",
    role: "Data Analyst",
    period: "2020 - 2022",
    description: "Developed analytical solutions for clients across retail, finance, and healthcare sectors.",
    achievements: [
      "Delivered 20+ client projects with 95% satisfaction rate",
      "Specialized in predictive modeling and customer analytics",
      "Mentored 3 junior analysts in SQL and Python"
    ]
  },
  {
    id: 3,
    company: "StartupXYZ",
    role: "Junior Data Analyst",
    period: "2019 - 2020",
    description: "Supported data analytics function for fast-growing startup, building foundational reporting infrastructure.",
    achievements: [
      "Created first company-wide analytics dashboard",
      "Automated daily reporting saving 10 hours weekly",
      "Conducted A/B testing for product features"
    ]
  }
];

export const certifications = [
  { name: "Microsoft Certified: Data Analyst Associate", issuer: "Microsoft", year: "2023" },
  { name: "Tableau Desktop Specialist", issuer: "Tableau", year: "2022" },
  { name: "Google Data Analytics Professional Certificate", issuer: "Google", year: "2021" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon", year: "2022" }
];
