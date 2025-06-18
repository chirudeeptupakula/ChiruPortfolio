// src/data/projects.js

const projects = [
  {
    id: 1,
    title: "GenAI-Powered Customer Retention Analysis",
    description: "Built a RAG solution using LLMs and Pinecone to provide explainable churn predictions. Delivered real-time recommendations via FastAPI APIs, with Power BI monitoring dashboards connected through AWS Lambda.",
    github: "https://github.com/yourusername/genai-customer-retention", // <-- Put real GitHub link if available
    techStack: ["Python", "OpenAI", "LangChain", "Pinecone", "FastAPI", "AWS Lambda", "Power BI"],
    imageUrl: "/genai_project_placeholder.png" // Placeholder for now, we can create a better image later
  },
  {
    id: 2,
    title: "Sales Analytics Pipeline on Azure Databricks",
    description: "Implemented a Lakehouse architecture using AWS S3, Delta Lake, AWS Glue, and Azure Databricks. Designed parallelized PySpark ETL jobs and exposed aggregated sales metrics via Dockerized FastAPI endpoints consumed by Power BI.",
    github: "https://github.com/yourusername/sales-analytics-pipeline", // <-- Put real GitHub link if available
    techStack: ["PySpark", "AWS S3", "Delta Lake", "AWS Glue", "FastAPI", "Docker", "Power BI"],
    imageUrl: "/sales_project_placeholder.png"
  },
  {
      id: 3,
      title: "Ambiguity Detection with Human-in-the-Loop Validation",
      description: "Developed a machine learning system to detect ambiguous input cases and validate predictions via crowdsourced survey graphs. Human feedback was looped back to fine-tune the model iteratively, ensuring higher explainability and prediction trust.",
      github: "https://github.com/chirudeeptupakula/AmbiguityDetection", // Replace with actual link if available
      techStack: ["Python", "Scikit-learn", "Matplotlib", "Crowdsourcing", "Human-in-the-loop", "ML Explainability"],
      imageUrl: "/ambiguity_project_placeholder.png" // Replace with real image when available
    },
    {
      id: 4,
      title: "Cowboy Connect – Volunteer Tracker & LMS with AI Chatbot",
      description: "Built a full-stack web app to manage student volunteer hours and classroom lessons. Integrated a ChatGPT-style LLM chatbot using OpenAI for real-time help and query routing. Includes authentication, club management, and assignment tracking.",
      github: "https://github.com/chirudeeptupakula/CowboyConnect",
      techStack: ["React", "FastAPI", "PostgreSQL", "OpenAI", "Tailwind CSS", "LLM Chatbot"],
      imageUrl: "/cowboy_connect_placeholder.png" // Replace with actual image later if available
    }



];

export default projects;
