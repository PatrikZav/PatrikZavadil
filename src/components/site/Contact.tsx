import { useState } from "react";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/patrik.zav/" },
  { label: "YouTube", href: "https://youtube.com/@pazaxcz" },
  { label: "Facebook", href: "https://www.facebook.com/patrik.cz.11/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/patrik-zavadil/" },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:patrik.zavadil@email.cz?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="relative px-6 py-32 text-center md:py-48">
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 text-[10px] uppercase tracking-[0.5em] text-primary/80">
          04 — Get in Touch
        </p>
        <h2 className="font-display text-5xl leading-tight md:text-7xl">
          Let's build<br />something real.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Reach out on any of the channels below — I'm always open to collaboration,
          a chat, or a new idea.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 max-w-xl space-y-4 text-left"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              required
              maxLength={100}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b border-border/60 bg-transparent px-1 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
            />
            <input
              type="email"
              required
              maxLength={255}
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-border/60 bg-transparent px-1 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
            />
          </div>
          <textarea
            required
            maxLength={2000}
            rows={4}
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full resize-none border-b border-border/60 bg-transparent px-1 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
          />
          <div className="flex flex-col items-center gap-3 pt-4">
            <button
              type="submit"
              className="border border-primary px-10 py-3 text-[11px] uppercase tracking-[0.4em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Send Message
            </button>
          </div>
        </form>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group relative text-[11px] uppercase tracking-[0.4em] text-foreground"
              >
                {s.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}