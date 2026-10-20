
export default function ProjectList({
  projects,
  activeProject,
  onProjectClick,
}) {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white/40 px-6 py-12 text-center dark:border-slate-600">
        <p className="text-4xl"></p>
        <h3 className="mt-3 text-lg font-bold">
          Chưa tìm thấy dự án
        </h3>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Thử từ khóa khác hoặc chọn một bộ lọc khác nhé.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const isActive = activeProject === project.id;

        return (
          <li key={project.id} className="min-w-0">
            <article
              className={`h-full overflow-hidden rounded-3xl border bg-white/60 shadow-lg shadow-sky-900/5 backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:bg-slate-800/70 ${
                isActive
                  ? 'border-sky-500 ring-2 ring-sky-400/30'
                  : 'border-white/80 dark:border-slate-700'
              }`}
            >
              <button
                type="button"
                onClick={() => onProjectClick(project.id)}
                aria-expanded={isActive}
                className="flex h-full w-full flex-col p-5 text-left"
              >

                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {(project.tags ?? []).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-sky-200/80 px-2.5 py-1 text-xs font-semibold text-sky-800 dark:border-slate-600 dark:text-sky-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {isActive && (
                  <div className="mt-5 w-full border-t border-slate-200 pt-4 dark:border-slate-600">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {project.details ??
                        'Đây là một trong những dự án trong portfolio của mình.'}
                    </p>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="mt-4 inline-block font-bold text-sky-700 hover:underline dark:text-sky-300"
                      >
                        Xem dự án ↗
                      </a>
                    )}
                  </div>
                )}
              </button>
            </article>
          </li>
        );
      })}
    </ul>
  );
}