import { projects } from '@/data/content';

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-20">
      <div className="max-w-content mx-auto px-6">
        <div className="flex justify-between items-end gap-6 flex-wrap mb-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-verified mb-2">Test cases</p>
            <h2 className="font-mono font-bold text-[28px]">Projects & builds</h2>
          </div>
          <p className="font-mono text-[13px] text-ink-soft max-w-[36ch] text-right">
            Selected work — testing frameworks, automation scripts, and prompt-engineering experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-paper border border-line rounded overflow-hidden flex flex-col transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="aspect-video bg-paper-alt border-b border-line flex items-center justify-center font-mono text-xs text-ink-soft">
                thumbnail
              </div>
              <div className="p-5 flex flex-col gap-2.5 flex-1">
                <span className={`badge w-fit ${p.status === 'passed' ? 'badge-verified' : 'badge-pending'}`}>
                  {p.status === 'passed' ? 'passed' : 'in progress'}
                </span>
                <h3 className="font-sans font-bold text-[17px] m-0">{p.title}</h3>
                <p className="text-sm text-ink-soft m-0">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] bg-paper-alt border border-line px-2 py-0.5 rounded-full text-slate"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-line flex gap-4">
                  <a href={p.demoUrl} className="font-mono text-xs font-bold hover:text-verified">
                    Live demo →
                  </a>
                  <a href={p.repoUrl} className="font-mono text-xs font-bold hover:text-verified">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
