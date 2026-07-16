import { profile } from '@/data/content';

export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <div className="max-w-content mx-auto px-6">
        <p className="font-mono text-xs text-ink-soft m-0">
          {profile.name} — {profile.role} · Built with intent, tested with care.
        </p>
      </div>
    </footer>
  );
}
