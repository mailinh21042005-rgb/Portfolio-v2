import { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import ProjectDialog from './ProjectDialog.jsx';

export default function ProjectList({ projects }) {
  const [selected, setSelected] = useState(null);

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
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={() => setSelected(project)}
          />
        ))}
      </div>
      <ProjectDialog
        project={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
