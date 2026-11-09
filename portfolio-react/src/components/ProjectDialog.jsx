import { useEffect, useRef } from 'react';
export default function ProjectDialog({
  project, onClose,
}) {
  const ref = useRef(null);
  useEffect(() => {
    const dlg = ref.current;
    if (project && !dlg.open) dlg.showModal();
  }, [project]);
  return (
    <dialog ref={ref} onClose={onClose}
      aria-labelledby="dlg-title"
      className="m-auto rounded-xl p-6">
      <h2 id="dlg-title">{project?.title}</h2>
      <p>{project?.description}</p>
      <form method="dialog"><button>Đóng</button></form>
    </dialog>
  );
}