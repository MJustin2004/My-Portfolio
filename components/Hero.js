import { profile } from '@/data/content';

function HeroHeadline({ text }) {
  // Splits on sentence-ending periods and colors the final sentence.
  const sentences = text.split('.').map((s) => s.trim()).filter(Boolean);
  const last = sentences.pop();
  const rest = sentences.length ? sentences.join('. ') + '. ' : '';
  return (
    <>
      {rest}
      <span className="text-verified">{last}.</span>
    </>
  );
}

export default function Hero() {
  return (
    <section id="about" className="border-b border-line py-24 md:py-28">
      <div className="max-w-content mx-auto px-6">
        <div className="max-w-[640px] mx-auto text-center flex flex-col items-center">
          <h1 className="font-mono font-bold text-[28px] md:text-[38px] leading-tight tracking-tight mb-5">
            <HeroHeadline text={profile.headline} />
          </h1>
          <p className="text-ink-soft text-base mb-8 max-w-[52ch]">{profile.lede}</p>
          <div className="flex gap-3.5 flex-wrap justify-center">
            <a
              href="#projects"
              className="font-mono text-sm font-bold px-5 py-3 rounded border border-ink bg-ink text-paper transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="font-mono text-sm font-bold px-5 py-3 rounded border border-ink text-ink transition-transform hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}