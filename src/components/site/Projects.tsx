const projects = [
  {
    name: "YouTube — Pazaxcz",
    year: "2014",
    desc: "Game montages, car edits, and glimpses of my life including go-kart racing.",
    href: "https://www.youtube.com/@Pazaxcz",
  },
  {
    name: "First Personal Page",
    year: "2024",
    desc: "My very first website after three months of studying IT — the start of the journey.",
    href: "https://patrikzav.github.io/PatrikZav/Personal_page/firstpage.html",
  },
  {
    name: "BMW M4 Website",
    year: "2024",
    desc: "A school project after seven months of IT — my most sophisticated work in pure HTML/CSS.",
    href: "https://patrikzav.github.io/PatrikZav/BMWwebsite/index.html",
  },
  {
    name: "Second Personal Website",
    year: "2025",
    desc: "Hand-coded one year into my IT studies in pure HTML, CSS and JavaScript. Fully responsive and optimized — built on an older stack that I've since outgrown.",
    href: "https://patrikzav.github.io/PatrikZav/",
  },
  {
    name: "Budget App",
    year: "2025",
    desc: "My first team project and first JavaScript app — track income and expenses with Local Storage.",
    href: "https://patrikzav.github.io/PatrikZav/BudgetApp/index.html",
  },
  {
    name: "Bucket List App",
    year: "2025",
    desc: "First full-stack app on Node.js — create, edit, and manage personal goals. Responsive on every device.",
    href: "https://bucket-list-app-i6e6.onrender.com/",
  },
  {
    name: "Blogic Bazar",
    year: "2026",
    desc: "Internship project for Business Logic — an internal marketplace built with React, Next.js and TypeScript on a local SQLite database, using various libraries and APIs. Link goes to the GitHub README with screenshots and setup instructions.",
    href: "https://patrikzav.github.io/blum-bazar/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center md:mb-24">
          <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-primary/80">
            03 — Projects
          </p>
          <h2 className="font-display text-5xl leading-tight md:text-7xl">
            Things I've built.
          </h2>
        </div>

        <ul className="divide-y divide-border/40 border-y border-border/40">
          {projects.map((p, i) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-8 transition-colors md:gap-12 md:py-10"
              >
                <span className="font-display text-xl text-muted-foreground md:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-3xl text-foreground transition-colors group-hover:text-primary md:text-4xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm text-muted-foreground md:text-base">
                    {p.desc}
                  </p>
                </div>
                <span className="hidden text-[11px] uppercase tracking-[0.3em] text-muted-foreground md:block">
                  {p.year} ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}