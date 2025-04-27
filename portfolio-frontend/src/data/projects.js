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
  }
];

export default projects;
