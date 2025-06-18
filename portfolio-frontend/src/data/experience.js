// src/data/experience.js
const experiences = [
  {
    title: "Data Engineer",
    company: "Oklahoma State University",
    date: "09/2023 – 05/2025",
    responsibilities: [
      "Built real-time streaming pipelines on AWS using Apache Kafka and PySpark, ingesting student behavioral data.",
      "Automated batch ETL pipelines in Databricks with Delta Lake, improving SLA compliance to 95%.",
      "Built LLM-based feedback analysis with OpenAI embeddings, FAISS, Flask APIs, reducing data retrieval time by 40%."
    ]
  },
  {
    title: "Data Engineer",
    company: "Cloudtaru",
    date: "05/2022 – 07/2023",
    responsibilities: [
      "Migrated legacy datasets from Oracle RDS to AWS S3 Data Lake using AWS Glue and optimized compute on Databricks.",
      "Engineered data pipelines using PySpark and SQL, leveraging Delta Lake for versioned storage.",
      "Built AI agent for anomaly detection using LangChain RAG and deployed FastAPI microservices with Docker."
    ]
  },
  {
    title: "Big Data Engineer",
    company: "Forsys Inc",
    date: "05/2021 – 04/2022",
    responsibilities: [
      "Designed automated ETL workflows in AWS Glue with PySpark to convert raw logs into structured parquet tables.",
      "Performed exploratory analysis with SQL, Python, Tableau to optimize customer funnel strategy.",
      "Re-architected legacy data flows into Lakehouse architecture on AWS EMR with Delta Lake."
    ]
  }
];

export default experiences;
