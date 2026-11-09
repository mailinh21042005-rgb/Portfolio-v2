export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex h-full flex-col rounded-3xl border border-white/80 bg-white/60 p-5 text-left shadow-lg shadow-sky-900/5 backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl focus-visible:outline-sky-600 dark:border-slate-700 dark:bg-slate-800/70"
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
    </button>
  );
}