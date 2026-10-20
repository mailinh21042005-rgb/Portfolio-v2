export function RepoSkeleton() {
  return (
    <ul aria-busy="true" aria-label="Đang tải repo">
      {[1, 2, 3].map((n) => (
        <li key={n} className="skeleton" />
      ))}
    </ul>
  );
}