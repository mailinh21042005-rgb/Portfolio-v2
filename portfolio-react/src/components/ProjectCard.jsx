export default function ProjectCard({ project }) {
  return (
    <li className="card">
      <h3>{project.title}</h3>
      <p className="tags">{project.tags.join(', ')}</p>
    </li>
  );
}