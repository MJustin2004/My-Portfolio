'use client';

import { useState } from 'react';
import { nav } from '@/data/content';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 py-4">
        <div className="font-mono font-bold text-[15px]">
          qa<span className="text-verified">.</span>portfolio
        </div>

        <ul className="hidden md:flex gap-7 list-none m-0 p-0">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-mono text-[13px] lowercase text-ink-soft border-b border-transparent pb-0.5 transition-colors hover:text-ink hover:border-verified"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-[13px] bg-ink text-paper px-3.5 py-2 rounded"
        >
          get in touch
        </a>

        <button
          className="md:hidden text-xl text-ink"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 list-none m-0">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 font-mono text-[13px] lowercase text-ink-soft"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-block mt-2 font-mono text-[13px] bg-ink text-paper px-3.5 py-2 rounded"
            >
              get in touch
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
