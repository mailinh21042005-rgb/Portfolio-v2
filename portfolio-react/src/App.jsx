import { useState } from 'react';
import { projects } from './data/projects.js';
import ProjectList from './components/ProjectList.jsx';
import TagFilter from './components/TagFilter.jsx';
import './index.css';

export default function App() {
  const [activeTag, setActiveTag] = useState('all');
  const shown = activeTag === 'all'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));
  return (
    <main className="container">
      <h1>Dự án của mình</h1>
      <TagFilter
        tags={tags}
        activeTag={activeTag}
        onChange={setActiveTag}
      />
      <ProjectList projects={shown} />
    </main>
  );
}

const tags = [...new Set(
  projects.flatMap((p) => p.tags),
)];

