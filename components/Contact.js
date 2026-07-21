'use client';

import { useState } from 'react';
import { profile, socials } from '@/data/content';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-content mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-verified mb-2">Reach out</p>
          <h2 className="font-mono font-bold text-[28px] mb-6">Send a message</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wide text-ink-soft mb-1.5">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Justin Montesines"
                className="w-full text-sm px-3.5 py-3 border border-line rounded bg-paper focus:border-slate outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wide text-ink-soft mb-1.5">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
                className="w-full text-sm px-3.5 py-3 border border-line rounded bg-paper focus:border-slate outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wide text-ink-soft mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                required
                minLength={10}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What are you reaching out about?"
                className="w-full min-h-[110px] text-sm px-3.5 py-3 border border-line rounded bg-paper focus:border-slate outline-none resize-y"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="self-start font-mono text-sm font-bold px-5 py-3 rounded border border-ink bg-ink text-paper disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'sent' && (
              <p className="font-mono text-xs text-verified" role="status">
                Message sent — thanks, I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="font-mono text-xs text-pending" role="alert">
                Something went wrong. Try emailing me directly instead.
              </p>
            )}
          </form>
        </div>

        <div>
          <h3 className="font-mono text-base mb-1.5">Elsewhere</h3>
          <p className="text-sm text-ink-soft mb-5">Or find me directly through these channels.</p>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="font-mono text-sm flex items-center gap-2 py-2.5 border-b border-line hover:text-verified"
                >
                  → {s.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 font-mono text-sm bg-paper-alt border border-line px-3.5 py-2.5 rounded inline-block">
            {profile.email}
          </div>
        </div>
      </div>
    </section>
  );
}
