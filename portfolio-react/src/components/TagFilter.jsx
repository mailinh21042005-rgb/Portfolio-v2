
export default function TagFilter({ tags, activeTag, onTagChange }) {
  return (
    <div
      className="mb-6 flex flex-wrap gap-2"
      aria-label="Lọc dự án"
    >
      {tags.map((tag) => {
        const active = activeTag === tag;

        return (
          <button
            key={tag}
            type="button"
            onClick={() => onTagChange(tag)}
            aria-pressed={active}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${
              active
                ? 'border-sky-600 bg-sky-600 text-white shadow-md shadow-sky-500/20'
                : 'border-sky-200 bg-white/60 text-slate-700 hover:border-sky-400 hover:bg-sky-50 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {tag === 'all' ? 'Tất cả' : tag}
          </button>
        );
      })}
    </div>
  );
}