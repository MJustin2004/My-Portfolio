// Edit everything here. Components just read from this file.
// Replace every [bracketed] placeholder with your real info.

export const profile = {
  name: 'Justin Montesines',
  role: 'QA Engineer & Prompt Engineer',
  email: 'montesines.markjustin@gmail.com',
  location: 'Philippines',
  headline: 'Testing software. Testing prompts. Same instinct, two disciplines.',
  lede:
    "Justin Montesines is a 4th-year Computer Science student based in the Philippines, focused on Quality Assurance with a growing interest in prompt engineering. Still early in the journey, but serious about testing carefully, documenting clearly, and learning in public.",
};

export const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'Twitter / X', href: '#' },
];

export const nav = [
  { label: 'about', href: '#about' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'skills', href: '#skills' },
  { label: 'contact', href: '#contact' },
];

export const projects = [
  {
    title: 'Project Title One',
    status: 'passed', // 'passed' | 'in-progress'
    description: 'One or two sentences on the problem, your role, and the outcome.',
    stack: ['Selenium', 'Python', 'Postman'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Prompt Engineering Case Study',
    status: 'passed',
    description: 'A before/after breakdown of a prompt you improved — with the metric that moved.',
    stack: ['Claude API', 'Eval design'],
    demoUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Title Three',
    status: 'in-progress',
    description: 'Placeholder for a third project — grid auto-wraps to 1 column on mobile.',
    stack: ['Cypress', 'CI/CD'],
    demoUrl: '#',
    repoUrl: '#',
  },
];

export const timeline = [
  {
    name: 'Event / Hackathon Name',
    date: 'Mar 2026',
    role: 'Participant / QA Track',
    takeaway: 'Key takeaway — what you tested, built, or learned. One or two sentences, kept concrete.',
  },
  {
    name: 'Workshop or Conference Name',
    date: 'Jan 2026',
    role: 'Attendee',
    takeaway: 'Key takeaway or skill gained from this event.',
  },
  {
    name: 'Meetup / Bootcamp Name',
    date: 'Nov 2025',
    role: 'Contributor',
    takeaway: 'Key takeaway — placeholder for a third timeline entry.',
  },
];

export const skillGroups = [
  {
    label: 'QA & testing',
    skills: ['Manual testing', 'Test case design', 'Selenium', 'Postman / API testing', 'Bug tracking (Jira)'],
  },
  {
    label: 'Prompt engineering',
    skills: ['Prompt design', 'Eval / test-driven prompting', 'Claude API'],
  },
  {
    label: 'Soft skills',
    skills: ['Attention to detail', 'Clear documentation', 'Cross-team communication'],
  },
];

export const proofOfWork = [
  { name: 'Test plan — [Project name]', meta: 'Manual test suite, 40+ cases', status: 'verified', href: '#' },
  { name: 'Prompt library — [X use cases]', meta: 'Documented before/after results', status: 'verified', href: '#' },
  { name: 'Bug report writeup', meta: 'Root cause + reproduction steps', status: 'pending', href: '#' },
];

export const resume = {
  updated: '[date]',
  fileUrl: '/resume.pdf', // drop your real resume.pdf into the /public folder
};
