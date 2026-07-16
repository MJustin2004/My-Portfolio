import { timeline } from '@/data/content';

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-verified mb-2">Run log</p>
            <h2 className="font-mono font-bold text-[28px]">Experience & events</h2>
          </div>
          <p className="font-mono text-[13px] text-ink-soft max-w-[36ch] text-right">
            Hackathons, workshops, conferences — chronological, most recent first.
          </p>
        </div>

        <div className="relative pl-7">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-line" />
          {timeline.map((t, i) => (
            <div key={t.name} className={`relative ${i === timeline.length - 1 ? '' : 'pb-9'}`}>
              <div className="absolute -left-7 top-1 w-[11px] h-[11px] rounded-full bg-paper border-2 border-verified" />
              <div className="flex items-baseline gap-3 flex-wrap mb-1.5">
                <h3 className="font-sans font-bold text-base m-0">{t.name}</h3>
                <span className="font-mono text-xs text-ink-soft">{t.date}</span>
              </div>
              <div className="font-mono text-xs text-slate mb-2">Role: {t.role}</div>
              <p className="text-sm text-ink-soft max-w-[65ch] m-0">{t.takeaway}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
