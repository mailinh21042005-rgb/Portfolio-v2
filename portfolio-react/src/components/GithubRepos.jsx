
import { useRepos } from '../hooks/useRepos';
import { RepoSkeleton } from './RepoSkeleton';

export function GitHubRepos({ username }) {
  const { repos, loading, error } = useRepos(username);

  if (loading) return <RepoSkeleton />;
  if (error) return <p role="alert">Lỗi tải repo.</p>;
  if (repos.length === 0) return <p>Chưa có repo.</p>;

  return (
    <ul className="grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
      {repos.slice(0, 6).map((repo) => (
        <li key={repo.id} className="min-w-0">
          <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/60 p-5 shadow-lg shadow-sky-900/5 backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/70">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm hover:text-sky-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:hover:text-sky-300"
              >
                {repo.name}
              </a>
            </h3>

            {repo.description && (
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {repo.description}
              </p>
            )}

            {repo.language && (
              <div className="mt-4">
                <span className="rounded-lg border border-sky-200/80 px-2.5 py-1 text-xs font-semibold text-sky-800 dark:border-slate-600 dark:text-sky-200">
                  {repo.language}
                </span>
              </div>
            )}
          </article>
        </li>
      ))}
    </ul>
  );
}