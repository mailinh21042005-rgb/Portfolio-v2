
export default function Hero() {
  return (
    <section
      id="about"
      className="grid min-h-[65vh] grid-cols-1 items-center gap-8 py-16 md:grid-cols-[1.3fr_0.7fr] md:py-24"
    >
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/60 px-4 py-2 text-sm font-semibold text-sky-800 shadow-sm dark:border-slate-700 dark:bg-slate-800/70 dark:text-sky-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Welcome to my portfolio
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-6xl dark:text-white">
          Chào mừng đến với
          <span className="mt-2 block text-sky-600 dark:text-sky-400">
            không gian dự án của mình!
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300">
          Mình là Nguyễn Thị Mai Linh. 
          Hiện đang là sinh viên năm 4 - Vật lý Tin học - Trường Đại học Khoa học Tự nhiên.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-sky-500 px-6 py-3 font-bold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-1 hover:bg-sky-600"
          >
            Khám phá dự án
          </a>

          <a
            href="#contact"
            className="rounded-full border border-slate-300 bg-white/60 px-6 py-3 font-bold transition hover:border-sky-400 hover:bg-white dark:border-slate-600 dark:bg-slate-800/60 dark:hover:bg-slate-700"
          >
            Liên hệ mình
          </a>
        </div>
      </div>
    </section>
  );
}
