
import { useMemo, useState } from 'react';

import { projects } from './data/projects.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProjectList from './components/ProjectList.jsx';
import TagFilter from './components/TagFilter.jsx';
import ContactForm from './components/ContactForm.jsx';
import { Clock } from './Clock.jsx';
import { GitHubRepos } from './components/GithubRepos.jsx';

import './index.css';

export default function App() {
  const [activeTag, setActiveTag] = useState('all');
  const [query, setQuery] = useState('');
  const [showClock, setShowClock] = useState(true);
  const tags = useMemo(
    () => [
      'all',
      ...new Set(projects.flatMap((p) => p.tags ?? [])),
    ],
    [],
  );

  const normalizedQuery = query.trim().toLowerCase();

  const shown = useMemo(() => {
    return projects.filter((p) => {
      const projectTags = p.tags ?? [];

      const matchesTag =
        activeTag === 'all' || projectTags.includes(activeTag);

      const searchableText = [
        p.title ?? '',
        p.description ?? '',
        ...projectTags,
      ]
        .join(' ')
        .toLowerCase();

      const matchesQuery =
        searchableText.includes(normalizedQuery);

      return matchesTag && matchesQuery;
    });
  }, [activeTag, normalizedQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-sky-100 to-sky-300 text-slate-700 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 dark:text-slate-100">
      <Header />

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Hero />

        <section className="my-6 rounded-2xl border border-white/70 bg-white/60 p-4 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/60">
          <button
            type="button"
            onClick={() => setShowClock((prev) => !prev)}
            aria-expanded={showClock}
            className="rounded-full bg-sky-500 px-4 py-2 font-semibold text-white transition hover:bg-sky-600"
          >
            {showClock ? 'Ẩn đồng hồ −' : 'Hiện đồng hồ +'}
          </button>

          {showClock && (
            <div className="mt-4">
              <Clock />
            </div>
          )}
        </section>

        <section
          id="projects"
          className="scroll-mt-28 py-10 sm:py-14"
        >
          <div className="mb-6">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
              My works
            </p>

            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Dự án của mình
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Khám phá những dự án mình đã thực hiện.
            </p>
          </div>

          <label
            htmlFor="project-search"
            className="mb-2 block font-semibold"
          >
            Tìm kiếm dự án
          </label>

          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nhập tên, mô tả hoặc công nghệ..."
            className="mb-5 w-full rounded-2xl border border-slate-300 bg-white/80 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 dark:border-slate-600 dark:bg-slate-800"
          />

          <TagFilter
            tags={tags}
            activeTag={activeTag}
            onTagChange={setActiveTag}
          />

          <p
            className="my-5 text-sm text-slate-500 dark:text-slate-400"
            aria-live="polite"
          >
            Đang hiển thị {shown.length}/{projects.length} dự án
          </p>

          {shown.length > 0 ? (
            <ProjectList projects={shown} />
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white/40 px-5 py-12 text-center dark:border-slate-600">
              <p className="text-4xl"></p>
              <p className="mt-3 font-semibold">
                Không tìm thấy dự án phù hợp.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActiveTag('all');
                }}
                className="mt-4 font-bold text-sky-700 hover:underline dark:text-sky-300"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </section>

        {/* GitHub */}
        <section
          id="github"
          className="scroll-mt-28 py-10 sm:py-14"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            Open source
          </p>

          <h2 className="mb-6 text-3xl font-extrabold sm:text-4xl">
            Repo GitHub
          </h2>

          <GitHubRepos username="mailinh21042005-rgb" />
        </section>

        <section
          id="contact"
          className="scroll-mt-28 py-10 sm:py-14"
        >
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            Say hello
          </p>

          <h2 className="mb-6 text-3xl font-extrabold sm:text-4xl">
            Liên hệ với mình
          </h2>

          <ContactForm />
        </section>
      </main>

      <footer className="mt-8 border-t border-sky-300/50 px-4 py-8 text-center dark:border-slate-700">
        <p>
          © {new Date().getFullYear()} Nguyễn Thị Mai Linh
        </p>
      </footer>
    </div>
  );
}