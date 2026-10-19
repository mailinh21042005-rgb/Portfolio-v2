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
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim().toLowerCase();
  const shown = projects.filter((p) => {
    const matchesTag =
      activeTag === 'all' || p.tags.includes(activeTag);

    const matchesQuery = p.title
      .toLowerCase()
      .includes(normalizedQuery);

    return matchesTag && matchesQuery;
  });
  return (
    <main className="container">
      <Header />
      <Hero />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Tìm dự án theo tên..."
        aria-label="Tìm dự án theo tên"
      />
      <TagFilter
        tags={tags}
        activeTag={activeTag}
        onChange={setActiveTag}
      />
      <p>
        Đang hiển thị {shown.length}/{projects.length} dự án
      </p>
      {shown.length > 0 ? (
        <ProjectList projects={shown} />
      ) : (
        <p>Không tìm thấy dự án phù hợp.</p>
      )}
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