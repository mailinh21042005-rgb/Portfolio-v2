
import { useRepos } from '../hooks/useRepos';
import { RepoSkeleton } from './RepoSkeleton';

export function GitHubRepos({ username }) {
  const { repos, loading, error } = useRepos(username);

  if (loading) return <RepoSkeleton />;
  if (error) return <p role="alert">Lỗi tải repo.</p>;
  if (repos.length === 0) return <p>Chưa có repo.</p>;

  return (
    <ul className="projects">
      {repos.slice(0, 6).map((repo) => (
        <li key={repo.id} className="card">
          <h3>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {repo.name}
            </a>
          </h3>

          {repo.description && <p>{repo.description}</p>}

          {repo.language && (
            <p className="tags">{repo.language}</p>
          )}
        </li>
      ))}
    </ul>
  );
}