export default function TagFilter({
  tags, activeTag, onChange,
}) {
  return (
    <div className="filters">
      {['all', ...tags].map((tag) => (
        <button
          key={tag}
          type="button"
          className={tag === activeTag ? 'active' : ''}
          onClick={() => onChange(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}