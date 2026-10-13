import ProjectCard from './ProjectCard.jsx';

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p>Không có dự án phù hợp.</p>;
  }
  return (
    <ul className="projects">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </ul>
  );
}