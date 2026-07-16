/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F7F6F2',
        'paper-alt': '#EFEDE6',
        ink: '#161A1D',
        'ink-soft': '#4A5057',
        verified: '#1F7A5C',
        'verified-bg': '#E6F2EC',
        pending: '#C97C1F',
        'pending-bg': '#FBEEDD',
        slate: '#42556B',
        line: '#D9D6CC',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1120px',
      },
      borderRadius: {
        DEFAULT: '4px',
      },
    },
  },
  plugins: [],
};
