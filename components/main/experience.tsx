import type { CSSProperties } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { EXPERIENCES } from "@/constants";

const stops = [
  { date: "2019–2024", title: "IISER Bhopal", role: "BS–MS · Data Science & Engineering", color: "#f2c04c", description: "Started in August 2019. Completed my master's in August 2024.", category: "College" },
  { date: "2020", title: "Aromanest", role: "Founder · Aromatherapy blog", color: "#ff9bad", description: "Launched an aromatherapy blog; closed it after a brand-name conflict and legal notice.", category: "Side hustle" },
  { date: "2021", title: "Abodenest", role: "Founder · Solar-equipment blog", color: "#f2c04c", description: "Built a solar-equipment blog that earned $700 in three months before closing.", category: "Side hustle" },
  { date: "2022", title: "Freelancing", role: "Digital marketing · SEO · Content", color: "#8edfd2", description: "Worked with clients on search visibility, digital marketing, and content writing.", category: "Freelance" },
  { date: "APR–JUL 2024", title: "Grades Buddy", role: "AI/ML Subject Matter Expert", color: "#ff9bad", description: "Built ML pipelines, fine-tuned LLMs, and developed RAG systems at Codepedia Solutions.", category: "Part-time", experience: 1 },
  { date: "AUG 2024–JUL 2025", title: "SIRL", role: "Project Junior Research Fellow", color: "#8edfd2", description: "Built LogMe and DySTAN at Systems and Informatics Research Laboratory: 23,520+ sensing hours from 70 users.", category: "Primary role", experience: 0 },
];

function TrailScenery({ index }: { index: number }) {
  return <svg className="journey-terrain" viewBox="0 0 200 145" aria-hidden="true" fill="none" stroke="#24271e" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
    <path d="M4 132 53 53 82 97 125 25 196 132" fill="#e8e2c7" />
    <path d="m36 81 17-28 17 27-12-5-7 10-6-10Zm68-20 21-36 27 41-18-9-7 12-12-15Z" fill="#fffbed" />
    <path d="m53 55 5 49m67-77-8 70m20-20 20 39M7 134q43-9 78 0t110-3" strokeWidth="1" />
    <g fill="#80b59a"><path d="m13 93-11 22h6l-8 14h26l-8-14h6Z"/><path d="m177 93-11 22h6l-8 14h26l-8-14h6Z"/></g>
    <path d="M13 129v9m164-9v9" />
    {index === 0 && <g><path d="m32 132 17-24 24 24Z" fill="#f2c04c"/><path d="m49 108 5 24m-12 0 7-15 5 15"/><path d="M78 111h24v21H78z" fill="#fffbed"/><path d="M84 116h12m-12 6h12"/></g>}
    {index === 1 && <g><path d="M43 132V91h24v41Z" fill="#ff9bad"/><path d="M43 91h24l-12-11Z" fill="#8edfd2"/><path d="M55 103q-12-13-16 2 11 3 16 12 5-9 16-12-4-15-16-2Z" fill="#80b59a"/></g>}
    {index === 2 && <g><circle cx="55" cy="58" r="18" fill="#f2c04c"/><path d="M55 77v55M34 113h43"/><path d="m87 132 14-24 14 24Z" fill="#8edfd2"/><path d="M94 119h14M97 114h8"/></g>}
    {index === 3 && <g><path d="M35 132h72"/><rect x="42" y="91" width="57" height="35" rx="2" fill="#fffbed"/><path d="M49 98h43M61 111l8-6 8 4 12-9"/><path d="M68 126v6m9-6v6"/></g>}
    {index === 4 && <g><rect x="42" y="91" width="55" height="41" fill="#ff9bad"/><path d="M53 101h33M53 110h19M53 119h27"/><path d="M108 132V98h25v34Z" fill="#f2c04c"/><path d="M114 104h13m-13 7h13m-13 7h8"/></g>}
    {index === 5 && <g><path d="M125 25V1"/><path d="M126 2q12-7 26 0l-8 10q-10-5-18 0Z" fill="#ff9bad"/><path d="M39 132v-25h25v25Z" fill="#8edfd2"/><path d="M45 107v-12h13v12M52 95v-9"/><circle cx="52" cy="83" r="4" fill="#f2c04c"/></g>}
  </svg>;
}

export const Experience = () => (
  <section id="experience" aria-labelledby="journey-title" className="journey-section neo-grid">
    <div className="journey-inner">
      <header className="journey-heading">
        <span className="journey-eyebrow">EDUCATION & EXPERIENCE</span>
        <h2 id="journey-title"><span>My experience trail</span></h2>
      </header>
      <div className="journey-trail">
        <svg className="journey-road" viewBox="0 0 1200 300" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 275Q50 280 100 241C170 175 220 297 300 266S420 160 500 226 620 300 700 251 830 135 900 196 1010 220 1100 171Q1150 135 1200 151" className="journey-road-edge" />
          <path d="M0 275Q50 280 100 241C170 175 220 297 300 266S420 160 500 226 620 300 700 251 830 135 900 196 1010 220 1100 171Q1150 135 1200 151" className="journey-road-fill" />
          <path d="M0 275Q50 280 100 241C170 175 220 297 300 266S420 160 500 226 620 300 700 251 830 135 900 196 1010 220 1100 171Q1150 135 1200 151" className="journey-road-dashes" />
        </svg>
        <ol className="journey-map" aria-label="Education and work experience in chronological order">
          {stops.map((stop,index)=>{
            const experience="experience" in stop ? EXPERIENCES[stop.experience!] : undefined;
            return <li key={stop.title} className="journey-stop" style={{"--stop-color":stop.color, "--trail-rise":`${[70,95,55,80,25,0][index]}px`} as CSSProperties}>
              <div className="journey-scene">
                <span className="journey-category">{stop.category}</span>
                <TrailScenery index={index} />
              </div>
              <span className="journey-stop-marker" aria-hidden="true">{index+1}</span>
              <article className="journey-card">
                <span className="journey-date">{stop.date}</span>
                <h3>{stop.title}</h3>
                <p className="journey-role">{stop.role}</p>
                <p className="journey-description">{stop.description}</p>
                {experience && <details className="journey-details"><summary>Work details</summary><ul>{experience.highlights.map(highlight=><li key={highlight}>{highlight.split(/\*\*(.+?)\*\*/g).map((part,i)=>i%2 ? <strong key={i}>{part}</strong> : part)}</li>)}</ul></details>}
                {stop.title==="Freelancing" && <details className="journey-details"><summary>Client recommendation</summary><blockquote><p>“Quick delivery, quality work, and knew just the right questions to ask.”</p><a href="https://www.linkedin.com/in/sangini-kaul-writer/" target="_blank" rel="noreferrer noopener">Sangini Kaul <FiArrowUpRight aria-hidden="true" /></a><small>July 23, 2021</small></blockquote></details>}
              </article>
            </li>;
          })}
        </ol>
      </div>
    </div>
  </section>
);
