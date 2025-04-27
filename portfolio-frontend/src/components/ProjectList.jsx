// src/components/ProjectList.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';
import '../styles/ProjectList.css';

function ProjectList() {
  return (
    <section id="projects" className="project-list" data-aos="zoom-in">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
