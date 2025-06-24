// src/data/experience.js
const experiences = [
  {
    title: "GenAI Application Developer",
    company: "Oklahoma State University",
    date: "09/2023 – 05/2025",
    responsibilities: [
      "Designed Python logic to classify, summarise, and answer university-policy queries with Generative AI.",
      "Built FastAPI backend using Retrieval-Augmented Generation, OpenAI embeddings, and FAISS for context-aware responses.",
      "Developed React.js frontend (CSS / HTML / Tailwind) enabling seamless interaction with the GenAI service.",
      "Wrote pytest suites for API reliability and maintainability.",
      "Containerised backend and frontend in Docker; deployed to Azure Kubernetes Service (AKS) for scalable, resilient ops.",
      "Leveraged Azure Blob Storage for secure document and application data management.",
      "Owned end-to-end Azure CI/CD pipeline from automated testing through production rollout."
    ]
  },
  {
    title: "Python Full Stack Developer",
    company: "Cloudtaru",
    date: "05/2022 – 07/2023",
    responsibilities: [
      "Developed scalable GenAI APIs/microservices with Flask & FastAPI on AWS, integrating OpenAI, RAG, embeddings, and FAISS.",
      "Delivered interactive React.js front-ends and Tableau dashboards for rich analytics.",
      "Engineered PySpark and Databricks SQL pipelines processing multi-terabyte datasets on AWS.",
      "Integrated Spark ML and TensorFlow models into ETL flows for real-time anomaly detection.",
      "Automated ETL pipelines with Airflow and Jenkins, improving reliability and reducing manual effort.",
      "Collaborated with US product owners and offshore teams to convert business needs into technical solutions."
    ]
  },
  {
    title: "Big Data Engineer",
    company: "Forsys Inc",
    date: "05/2021 – 04/2022",
    responsibilities: [
      "Re-architected legacy ETL with Spark, PySpark, and Delta Lake on Hadoop, cutting compute costs 30%.",
      "Managed large-scale data workflows via Hive, SQL, and advanced scripting for robust analytics.",
      "Designed Tableau dashboards using SQL window functions, halving report runtimes.",
      "Administered Hadoop clusters, Hive Metastore, and Unix shell workflows to maintain 99%+ data availability.",
      "Integrated MongoDB, Oracle, and MySQL with modern data platforms, boosting data accessibility."
    ]
  }
];

export default experiences;
