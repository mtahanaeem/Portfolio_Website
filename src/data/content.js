export const personal = {
  name: "Muhammad Taha Naeem",
  role: "Data Science Student",
  tagline: "I build the pipeline between raw data and real answers — from cleaning to prediction.",
  email: "muhamadtahanaeem.pro@gmail.com",
  phone: "+92-317-7407596",
  location: "Lahore, Pakistan",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/mtahanaeem",
    linkedin: "https://linkedin.com/in/heyitxtaha",
    portfolio: "https://datascience-portfolio-website.netlify.app",
  },
};

import profileImg from "../assets/profile.jpg";

export const about = {
  bio: [
    "I'm a Data Science student in my final years, focused on the full pipeline — from messy raw data to models that hold up in production. My recent work spans churn prediction, opinion mining on business review data, and healthcare analytics dashboards, along with full-stack systems like an ERP for a small manufacturing business and a deals-aggregation platform. I care less about running a notebook once and more about building things that keep working.",
    "Outside of core ML/data work, I've also built with blockchain and enjoy projects that sit at the intersection of data engineering and product — dashboards people actually check, models that plug into real workflows. Based in Lahore, Pakistan, currently looking for opportunities in data science, analytics, or ML engineering.",
  ],
  image: profileImg,
};

export const skills = [
  {
    category: "Languages",
    items: ["Python", "SQL", "C++", "JavaScript", "Solidity"],
  },
  {
    category: "Data & ML",
    items: ["Pandas", "NumPy", "Scikit-Learn", "XGBoost", "PySpark", "Hugging Face", "LangChain", "SHAP"],
  },
  {
    category: "Data Engineering",
    items: ["Apache Spark", "Kafka", "Airflow", "KNIME", "n8n"],
  },
  {
    category: "Frameworks & Tools",
    items: ["React", "Flask", "FastAPI", "Streamlit", "Docker", "Git", "PostgreSQL", "Tailwind CSS"],
  },
  {
    category: "Blockchain",
    items: ["Ethereum", "Solidity", "Web3.js", "Truffle"],
  },
];

export const projects = [
  {
    title: "PakDeals Finder",
    description: "AI-powered deal aggregator that scrapes, analyzes, and ranks deals across 4 e-commerce platforms using a multi-agent AI pipeline with LLM-powered analysis and ranking.",
    tech: ["Python", "Flask", "React", "LangGraph", "Groq", "BeautifulSoup"],
    github: "https://github.com/mtahanaeem/pakdeals-finder",
    demo: null,
  },
  {
    title: "Healthcare Pulse",
    description: "Disease surveillance and forecast dashboard with distributed processing pipeline for real-time health data analytics and visualization.",
    tech: ["React", "Flask", "Apache Spark", "PostgreSQL", "Docker"],
    github: "https://github.com/mtahanaeem/healthcare-pulse",
    demo: null,
  },
  {
    title: "Foam Shop ERP",
    description: "Flutter + Firebase retail inventory and accounting system with double-entry weighted average cost engine for small business management.",
    tech: ["Flutter", "Firebase", "Dart", "ERP"],
    github: "https://github.com/mtahanaeem/foam-shop-erp",
    demo: null,
  },
  {
    title: "Opportunity Dashboard",
    description: "Internship and job opportunity management platform with full CRUD operations, interactive analytics, CSV import, and Dockerized deployment.",
    tech: ["Streamlit", "PostgreSQL", "Docker", "Plotly"],
    github: "https://github.com/mtahanaeem/streamlit-postgres-opportunity-dashboard",
    demo: null,
  },
  {
    title: "BDA Opinion Mining",
    description: "Real-time opinion mining pipeline for streaming sentiment analysis using Kafka, PySpark, Hugging Face, and a React dashboard.",
    tech: ["Kafka", "PySpark", "Hugging Face", "React", "Docker"],
    github: "https://github.com/mtahanaeem/BDA-OpinionMining",
    demo: null,
  },
  {
    title: "Churn Prediction Pipeline",
    description: "End-to-end ML pipeline predicting telecom customer churn with XGBoost, SHAP explainability, FastAPI backend, and React dashboard.",
    tech: ["XGBoost", "FastAPI", "SHAP", "React", "Docker"],
    github: "https://github.com/mtahanaeem/churn-prediction-pipeline",
    demo: null,
  },
];

export const experience = [
  {
    type: "education",
    institution: "University of Central Punjab (UCP), Lahore",
    degree: "Bachelor of Science in Data Science",
    period: "2022 – Present",
    details: ["7th Semester", "Relevant Coursework: Data Structures, Algorithms, Database Management, Big Data, Machine Learning"],
  },
];

export const contact = {
  formAction: "/thank-you",
};
