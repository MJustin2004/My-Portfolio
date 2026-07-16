import { skillGroups, proofOfWork, resume } from '@/data/content';

export default function Skills() {
  return (
    <section id="skills" className="border-b border-line py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-verified mb-2">Assertions</p>
            <h2 className="font-mono font-bold text-[28px]">Skills & proof of work</h2>
          </div>
          <p className="font-mono text-[13px] text-ink-soft max-w-[36ch] text-right">
            No certificates yet — so this section leads with evidence instead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {skillGroups.map((group) => (
              <div key={group.label} className="mb-6">
                <h4 className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">{group.label}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span key={s} className="font-mono text-xs bg-paper-alt border border-line px-3 py-1.5 rounded">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-3">
              Proof of work <span className="font-normal">(instead of certificates)</span>
            </h4>
            <div className="flex flex-col gap-3.5">
              {proofOfWork.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="border border-line rounded px-4 py-3.5 flex justify-between items-center gap-3 bg-paper hover:border-verified transition-colors"
                >
                  <div>
                    <p className="text-sm font-semibold m-0 mb-0.5">{item.name}</p>
                    <p className="font-mono text-[11px] text-ink-soft m-0">{item.meta}</p>
                  </div>
                  <span className={`badge ${item.status === 'verified' ? 'badge-verified' : 'badge-pending'}`}>
                    {item.status === 'verified' ? 'view' : 'in progress'}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-7 border border-dashed border-line rounded p-5 flex items-center justify-between gap-4 flex-wrap bg-paper-alt">
              <p className="font-mono text-[13px] text-ink-soft m-0">resume.pdf — last updated {resume.updated}</p>
              <a
                href={resume.fileUrl}
                download
                className="font-mono text-sm font-bold px-5 py-3 rounded border border-ink bg-ink text-paper"
              >
                Download résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
