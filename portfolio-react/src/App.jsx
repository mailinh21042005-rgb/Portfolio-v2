import { useState } from 'react';
import { projects } from './data/projects.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectList from './components/ProjectList.jsx';
import TagFilter from './components/TagFilter.jsx';
import ContactForm from './components/ContactForm';
import './index.css';

export default function App() {
  const [activeTag, setActiveTag] = useState('all');
  const shown = activeTag === 'all'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));
  return (
    <main className="container">
      <Header />
      <Hero />
      <TagFilter
        tags={tags}
        activeTag={activeTag}
        onChange={setActiveTag}
      />
      <ProjectList projects={shown} />
      <section id="contact"> 
        <h2>Liên hệ với mình</h2>
        <ContactForm />
      </section>
    </main>
  );
}

const tags = [...new Set(
  projects.flatMap((p) => p.tags),
)];