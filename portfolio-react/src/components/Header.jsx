
import { ThemeToggle } from './ThemeToggle.jsx';

export default function Header() {
  const links = [
    { label: 'Giới thiệu', href: '#about' },
    { label: 'Dự án', href: '#projects' },
    { label: 'Liên hệ', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-sky-200/60 bg-sky-100/80 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-8">
        <a
          href="#about"
          className="shrink-0 font-script text-3xl text-blue-900 dark:text-sky-300 sm:text-4xl"
        >
          Mai Linh
        </a>

        <nav aria-label="Điều hướng chính">
          <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block rounded-full px-2 py-2 text-xs font-semibold transition hover:bg-white/70 hover:text-sky-700 sm:px-3 sm:text-sm dark:hover:bg-slate-800 dark:hover:text-sky-300"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}