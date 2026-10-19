import { useState } from 'react';

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function update(e) {
    const { name, value } = e.target;
    setForm((old) => ({ ...old, [name]: value }));
  }

  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) {
      next.name = 'Chưa nhập họ tên';
    }
    if (!form.email.includes('@')) {
      next.email = 'Email chưa hợp lệ';
    }
    if (!form.message.trim().length < 10) {
        next.message = 'Tin nhắn phải có ít nhất 10 ký tự';
    }
    setErrors(next);
    setSent(Object.keys(next).length === 0);
  }

  return (
    <form className="contact" onSubmit={submit} noValidate>
        <label htmlFor="name">Họ tên</label>
        <input id="name" name="name"
             value={form.name} onChange={update} />
        {errors.name && (
            <p className="error">{errors.name}</p>
        )}
        <label htmlFor="email">Email</label>
        <input id="email" name="email"
             value={form.email} onChange={update} />
        {errors.email && (
            <p className="error">{errors.email}</p>
        )}
        <label htmlFor="message">Tin nhắn</label>
        <textarea
        id="message"
        name="message"
        value={form.message}
        onChange={update}
        rows={5}
        placeholder="Nhập tin nhắn của bạn..."
        />
        {errors.message && (
        <p className="error">{errors.message}</p>
        )}
        <button className="button">Gửi</button>
        {sent && <p className="ok">Đã gửi. Cảm ơn bạn!</p>}
    </form>
  );
}