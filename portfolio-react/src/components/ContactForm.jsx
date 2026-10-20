import { useState } from 'react';

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  function update(e) {
    const { name, value } = e.target;

    setForm((old) => ({ ...old, [name]: value }));
    setSent(false);

    // Xóa lỗi của trường đang được chỉnh sửa
    setErrors((old) => ({ ...old, [name]: '' }));
  }

  function submit(e) {
    e.preventDefault();

    const next = {};

    if (!form.name.trim()) {
      next.name = 'Vui lòng nhập họ tên.';
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      next.email = 'Vui lòng nhập email hợp lệ.';
    }

    if (form.message.trim().length < 10) {
      next.message = 'Tin nhắn phải có ít nhất 10 ký tự.';
    }

    setErrors(next);

    if (Object.keys(next).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      setSent(false);
    }
  }

  const inputClass =
    'mt-2 w-full rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-100';

  const labelClass =
    'block text-sm font-semibold text-slate-700 dark:text-slate-200';

  return (
    <form
      onSubmit={submit}
      noValidate
      className="mx-auto w-full max-w-2xl rounded-3xl border border-white/70 bg-white/70 p-5 shadow-lg shadow-sky-900/5 backdrop-blur-md sm:p-8 dark:border-slate-700 dark:bg-slate-800/70"
    >
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
          Get in touch
        </p>

        <h3 className="mt-2 text-2xl font-extrabold text-slate-800 sm:text-3xl dark:text-white">
          Gửi lời nhắn cho mình 💌
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
          Có câu hỏi hay cần liên lạc với mình?
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Họ và tên
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update}
            placeholder="Nguyễn Văn A"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${inputClass} ${
              errors.name
                ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/15'
                : ''
            }`}
          />

          {errors.name && (
            <p
              id="name-error"
              role="alert"
              className="mt-2 text-sm text-rose-600 dark:text-rose-400"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Địa chỉ email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update}
            placeholder="ban@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${inputClass} ${
              errors.email
                ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/15'
                : ''
            }`}
          />

          {errors.email && (
            <p
              id="email-error"
              role="alert"
              className="mt-2 text-sm text-rose-600 dark:text-rose-400"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Tin nhắn
          </label>

          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={update}
            rows={5}
            placeholder="Nhập tin nhắn của bạn..."
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? 'message-error' : undefined
            }
            className={`${inputClass} resize-y ${
              errors.message
                ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/15'
                : ''
            }`}
          />

          <div className="mt-2 flex items-center justify-between gap-3">
            {errors.message ? (
              <p
                id="message-error"
                role="alert"
                className="text-sm text-rose-600 dark:text-rose-400"
              >
                {errors.message}
              </p>
            ) : (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tối thiểu 10 ký tự.
              </p>
            )}

            <span className="shrink-0 text-xs text-slate-500 dark:text-slate-400">
              {form.message.trim().length} ký tự
            </span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 font-bold text-white shadow-md shadow-sky-500/20 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 active:translate-y-0 sm:w-auto"
      >
        <span>Gửi tin nhắn</span>
        <span aria-hidden="true">↗</span>
      </button>

      {sent && (
        <p
          role="status"
          className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300"
        >
          ✓ Đã kiểm tra thông tin thành công. Cảm ơn bạn đã gửi lời nhắn!
        </p>
      )}
    </form>
  );
}