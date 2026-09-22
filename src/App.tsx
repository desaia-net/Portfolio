import { useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'

const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

const roles = [
  'Business Analyst', 'Business Systems Analyst', 'AI / Technology Analyst',
  'Technology Consultant', 'Junior Project Manager', 'AI Functional Consultant',
]

const experiences = [
  {
    number: '01', company: 'AbbVie', role: 'Business Systems Analyst Intern', team: 'R&D / Research', period: 'Internship',
    intro: 'Connecting research teams and technology in a regulated clinical-trial environment.',
    points: [
      'Partnered with clinical, IT, operations, and R&D stakeholders supporting clinical-trial-system applications.',
      'Led an AI / LLM-enabled support capability initiative, translating business needs into technical conversations and requirements.',
      'Created functional requirements, system documentation, user guides, and workflow documentation.',
      'Analyzed workflows and system usage data to help teams understand how tools supported day-to-day work.',
    ],
    tags: ['Requirements', 'AI enablement', 'Documentation', 'Workflow analysis'],
  },
  {
    number: '02', company: 'AbbVie', role: 'Business Technology Solutions Intern', team: 'Supply Chain / Global Distribution & Logistics', period: 'Internship',
    intro: 'Supporting operational workflows, system validation, and change across a global supply chain.',
    points: [
      'Worked across operations, planning, procurement, IT, logistics, and business user groups.',
      'Gathered and documented requirements for Control Tower workflows and dashboards.',
      'Supported system validation and UAT; identified and documented defects ahead of releases.',
      'Used Jira and Kanban to track work, dependencies, and releases; supported legacy enterprise-system decommissioning.',
    ],
    tags: ['UAT', 'Jira / Kanban', 'Supply chain', 'Release support'],
  },
]

const projects = [
  { id: '01', title: 'Dining Feedback, Decoded', group: 'AI CLUB · SENTIMENT ANALYSIS', text: 'Exploring how AI can turn campus dining feedback into clearer themes and actionable signals.', kind: 'sentiment', label: 'AI + INSIGHTS', tools: ['Sentiment analysis', 'Python', 'Research'] },
  { id: '02', title: 'A Better Way to Pick Lunch', group: 'UI/UX CLUB · APP REDESIGN', text: 'Reimagining the campus dining experience through clearer flows, useful information, and user-centered design.', kind: 'interface', label: 'EXPERIENCE DESIGN', tools: ['UI / UX', 'Prototyping', 'User journeys'] },
  { id: '03', title: 'Digital Spaces, Thoughtfully Made', group: 'WEB DESIGN · PORTFOLIO', text: 'A collection of web design work focused on making information feel clear, intentional, and easy to navigate.', kind: 'web', label: 'WEB DESIGN', tools: ['HTML', 'CSS', 'Visual systems'] },
  { id: '04', title: 'What’s next', group: 'IN PROGRESS · AI / AUTOMATION', text: 'Building practical experiments that connect emerging AI capabilities to real workflows and business needs.', kind: 'future', label: 'IN THE WORKS', tools: ['AI', 'Automation', 'Process design'] },
]

const skillGroups = [
  { title: 'Analysis & delivery', items: ['Requirements gathering', 'Functional requirements', 'Process mapping', 'UAT', 'Stakeholder management', 'Agile / Scrum / Kanban'] },
  { title: 'Data & reporting', items: ['Excel', 'SQL', 'Tableau', 'Power BI', 'Qlik'] },
  { title: 'Technology', items: ['Python', 'HTML', 'CSS', 'GitHub', 'Jira', 'Confluence', 'AI / automation'] },
]

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="topbar"><a className="wordmark" href="#home" aria-label="Anishi Desai home">AD<span>·</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav open' : 'nav'} aria-label="Main navigation">{links.map((item, i) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}><span>0{i + 1}</span>{item}</a>)}</nav>
    <a className="nav-cta" href="#contact">Let’s connect <ArrowUpRight size={14} /></a>
  </header>
}

function SectionTitle({ kicker, title, count }: { kicker: string; title: string; count: string }) {
  return <div className="section-heading"><div><span className="eyebrow">{count} / {kicker}</span><h2>{title}</h2></div><span className="heading-mark">✳</span></div>
}

function Hero() {
  return <section className="hero" id="home"><div className="hero-top"><span className="availability"><i /> OPEN TO OPPORTUNITIES</span><span className="hero-location">CHICAGO, IL · MICHIGAN STATE UNIVERSITY</span></div>
    <div className="hero-main"><div className="hero-copy"><p className="eyebrow">BUSINESS × TECHNOLOGY × BETTER WORKFLOWS</p><h1>Making the<br /><em>connection.</em></h1><p className="hero-summary">I’m Anishi Desai — an Information Science graduate who helps teams turn business needs into clearer systems, smarter workflows, and better experiences.</p>
      <div className="hero-actions"><a className="button button-dark" href="#experience">Explore my work <ArrowDown size={16} /></a><a className="button button-outline" href="/resume.pdf" download>Download résumé <ArrowDownRight size={16} /></a></div></div>
      <div className="hero-art" aria-label="Abstract network linking people, systems, and ideas"><div className="art-grid" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><div className="art-core"><span>AD</span><small>BUSINESS<br />MEETS TECH</small></div><div className="node node-a">PEOPLE</div><div className="node node-b">SYSTEMS</div><div className="node node-c">INSIGHT</div><div className="node node-d">✳</div><div className="art-stamp">FIG. 01<br /><b>THE<br />CONNECTOR</b></div></div></div>
    <div className="hero-bottom"><span>RECENT GRADUATE <b>·</b> BA, INFORMATION SCIENCE</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={13} /></a><span>MINOR IN BUSINESS <b>·</b> MSU ’25</span></div>
    <div className="role-strip"><span className="strip-label">AREAS OF INTEREST</span><div>{roles.map((role) => <span key={role}>{role}<i>✳</i></span>)}</div></div>
  </section>
}

function About() {
  return <section className="section about-section" id="about"><SectionTitle kicker="A LITTLE ABOUT ME" title="Good work starts with understanding." count="01" />
    <div className="about-layout"><div className="about-lead"><p className="lead">I’m interested in the space where <span>people, process,</span> and <span>technology</span> meet.</p><div className="about-note"><span className="note-icon">↗</span><p>My point of view is shaped by business analysis, hands-on systems work, and a curiosity about how emerging technology can make everyday work more effective.</p></div></div>
      <div className="about-detail"><p>I recently graduated from Michigan State University with a B.A. in Information Science and a minor in Business. At AbbVie, I worked with teams across R&D and global distribution, helping translate complex needs into requirements, documentation, and workable solutions.</p><p>I enjoy asking the questions that clarify what a team actually needs, mapping how work happens today, and helping people move toward a better version of it.</p><div className="education-card"><div className="education-icon">MSU</div><div><span className="eyebrow">EDUCATION</span><h3>Michigan State University</h3><p>B.A. Information Science <span>·</span> Minor in Business</p></div><span className="grad-mark">’25</span></div></div></div>
  </section>
}

function Experience() {
  return <section className="section experience-section" id="experience"><SectionTitle kicker="WHERE I’VE CONTRIBUTED" title="Experience with purpose." count="02" />
    <div className="experience-list">{experiences.map((job) => <article className="experience-card" key={job.number}><div className="experience-index">{job.number}<span>—</span></div><div className="experience-content"><div className="job-top"><div><p className="eyebrow">{job.company} <span>·</span> {job.team}</p><h3>{job.role}</h3></div><span className="job-period">{job.period}</span></div><p className="job-intro">{job.intro}</p><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul><div className="tag-row">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
  </section>
}

function ProjectArt({ kind }: { kind: string }) {
  if (kind === 'sentiment') return <div className="project-art sentiment-art"><div className="chart-label">FEEDBACK SIGNALS <span>01—04</span></div><div className="chart-bars"><i style={{ height: '38%' }} /><i style={{ height: '64%' }} /><i style={{ height: '49%' }} /><i style={{ height: '88%' }} /><i style={{ height: '57%' }} /><i style={{ height: '75%' }} /><i style={{ height: '44%' }} /></div><div className="chart-foot"><span>VOICE → PATTERNS</span><b>↑</b></div><div className="art-orb">↗</div></div>
  if (kind === 'interface') return <div className="project-art interface-art"><div className="phone phone-back"><div /><i /><i /><i /></div><div className="phone phone-front"><span className="phone-time">11:24</span><span className="phone-greeting">Good afternoon,<br /><b>what sounds good?</b></span><div className="phone-search">⌕ &nbsp;Find a meal</div><div className="phone-meal"><i>✳</i><span>Fresh picks<br /><b>See what’s on today</b></span><ArrowRight size={13} /></div></div><span className="interface-note">LUNCH, REIMAGINED <ArrowUpRight size={12} /></span></div>
  if (kind === 'web') return <div className="project-art web-art"><div className="web-window"><div className="window-bar"><i /><i /><i /><span>anishi.design</span></div><div className="web-display"><span>PERSONAL ARCHIVE · 2025</span><b>Ideas into<br /><em>interfaces.</em></b><div className="web-shape"><i /><i /><i /></div><span className="web-scroll">SCROLL TO DISCOVER ↓</span></div></div></div>
  return <div className="project-art future-art"><div className="future-orbit one" /><div className="future-orbit two" /><div className="future-core">AI<br /><span>+</span><br />FLOW</div><span className="future-coordinate">IN PROGRESS<br />42°43' N · 84°29' W</span><span className="future-spark">✳</span></div>
}

function Projects() {
  const [active, setActive] = useState<string | null>(null)
  return <section className="section projects-section" id="projects"><SectionTitle kicker="SELECTED PROJECTS" title="Curiosity, put to work." count="03" /><p className="section-intro">A few ways I’ve explored better experiences, useful insights, and the role technology can play.</p>
    <div className="project-grid">{projects.map((project) => <button className={`project-card ${active === project.id ? 'selected' : ''}`} key={project.id} onClick={() => setActive(active === project.id ? null : project.id)} aria-expanded={active === project.id}><ProjectArt kind={project.kind} /><div className="project-meta"><span>{project.group}</span><span>{project.id}</span></div><h3>{project.title}<ArrowUpRight size={18} /></h3><p>{project.text}</p><div className="project-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>{active === project.id && <div className="project-expanded"><span>{project.label}</span><p>{project.kind === 'future' ? 'A space for the next experiment. More details coming as the idea takes shape.' : 'A closer look at the questions, approach, and design decisions behind this project.'}</p></div>}</button>)}</div>
    <div className="project-footnote"><span>MORE IDEAS IN THE WORKS</span><span>✳</span><span>ALWAYS CURIOUS, ALWAYS ITERATING</span></div>
  </section>
}

function Skills() {
  return <section className="section skills-section" id="skills"><SectionTitle kicker="MY TOOLKIT" title="A useful mix of skills." count="04" /><div className="skills-layout"><p className="skills-lead">Tools are only useful when they help people get somewhere.<br /><span>Here’s what I bring to the work.</span></p><div className="skill-groups">{skillGroups.map((group, index) => <div className="skill-group" key={group.title}><div className="skill-group-head"><span>0{index + 1}</span><h3>{group.title}</h3><ArrowUpRight size={16} /></div><div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></div></section>
}

function Contact() {
  return <section className="contact-section" id="contact"><div className="contact-orbit orbit-a" /><div className="contact-orbit orbit-b" /><div className="contact-content"><span className="eyebrow">05 / LET’S MAKE A CONNECTION</span><h2>Have a good<br /><em>challenge?</em></h2><p>I’d love to hear what your team is working on and where a business-minded technologist could help.</p><a className="contact-email" href="mailto:your.email@example.com">YOUR EMAIL HERE <ArrowUpRight size={18} /></a><div className="contact-links"><a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={13} /></a><a href="https://github.com/your-github" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13} /></a><a href="/resume.pdf" download>RÉSUMÉ PDF <ArrowUpRight size={13} /></a></div></div><div className="contact-side-label">BUSINESS × TECHNOLOGY · CHICAGO, IL</div></section>
}

export default function App() {
  return <><Header /><main><Hero /><About /><Experience /><Projects /><Skills /><Contact /></main><footer><a className="wordmark" href="#home">AD<span>·</span></a><span>© {new Date().getFullYear()} ANISHI DESAI</span><span>MADE WITH INTENTION <b>✳</b></span><a href="#home">BACK TO TOP ↑</a></footer></>
}
