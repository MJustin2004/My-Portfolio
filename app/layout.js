import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './globals.css';

export const metadata = {
  title: '[Your Name] — QA Engineer & Prompt Engineer',
  description:
    'Portfolio of [Your Name], a Quality Assurance Engineer building fluency in prompt engineering. Test cases, bug reports, prompt libraries, and projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
