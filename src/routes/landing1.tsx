import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import bookMockup from "@/assets/book-mockup.png";

export const Route = createFileRoute("/landing1")({
  head: () => ({
    meta: [
      { title: "Master Automation System Guide — The AI Content Gold Rush" },
      { name: "description", content: "How faceless digital real estate is minting a new generation of digital entrepreneurs. Claim your share of the AI systems economy for $27." },
      { property: "og:title", content: "Master Automation System Guide" },
      { property: "og:description", content: "The AI Content Gold Rush has started. Claim your share." },
    ],
  }),
  component: LandingPage,
});

const chartData = [
  { year: "2023", traditional: 78, ai: 22 },
  { year: "2024", traditional: 61, ai: 42 },
  { year: "2025", traditional: 44, ai: 71 },
  { year: "2026", traditional: 28, ai: 96 },
];

const oldEconomy = [
  "Trade your face & identity for views",
  "Burn out chasing the algorithm daily",
  "Compete with millions of creators",
  "Demonetization risk on every upload",
  "Income tied to a single platform",
  "No leverage — you ARE the product",
];

const newEconomy = [
  "Faceless systems that scale silently",
  "AI does the heavy lifting 24/7",
  "Own digital real estate, not content",
  "Multi-platform monetization stack",
  "Compounding portfolio of assets",
  "Leveraged ownership of cashflow",
];

const painPoints = [
  { n: "01", title: "Robotic Demonetization", body: "Generic AI voiceovers get flagged by YouTube within weeks — torching months of work overnight." },
  { n: "02", title: "Low-RPM Niches", body: "Beginners pile into saturated, low-paying niches and earn pennies per thousand views." },
  { n: "03", title: "AdSense Dependency", body: "One policy change vaporizes the entire business. No second income stream, no safety net." },
  { n: "04", title: "No Standard SOPs", body: "Random YouTube tutorials, no system, no repeatable workflow. Effort without compounding." },
];

const blueprintItems = [
  "The Faceless Niche Selection Matrix (high-RPM filtered)",
  "AI Voice Cloning Stack that passes monetization review",
  "Long-form script architecture (retention-optimized)",
  "Thumbnail-to-CTR engineering framework",
  "End-to-end automated production SOPs",
  "Multi-platform syndication system (YT, TikTok, IG)",
  "Monetization stack beyond AdSense (3 layers)",
  "Outsourcing playbook with vetted contractor templates",
  "Scaling protocol from 1 channel to a portfolio",
  "90-day execution roadmap with weekly milestones",
];

const bonuses = [
  { n: "Bonus #1", name: "100+ AI Prompt Vault", value: "$47" },
  { n: "Bonus #2", name: "Faceless Niche Database (Excel)", value: "$29" },
  { n: "Bonus #3", name: "Thumbnail Templates (PSD Pack)", value: "$19" },
  { n: "Bonus #4", name: "AI Voice Cloning Cheatsheet", value: "$37" },
  { n: "Bonus #5", name: "Private Discord Community Access", value: "$23" },
];

const testimonials = [
  { initials: "JD", name: "Jordan D.", role: "First $4K month", color: "from-amber-400 to-orange-500", body: "I spent eighteen months trying random YouTube tutorials. The Blueprint replaced all of that with one clean system — my second channel hit $4K in month three. Faceless, automated, finally repeatable." },
  { initials: "SK", name: "Sasha K.", role: "Built 3-channel portfolio", color: "from-violet-400 to-fuchsia-500", body: "What surprised me was how unsexy the SOPs are — and that's exactly why they work. I now run three channels with two part-time editors. The leverage is real." },
];

const faqs = [
  { q: "Is this just another ebook?", a: "No. The Master Automation System Guide is a complete operating system — frameworks, SOPs, templates, prompt vault, niche matrix, and a 90-day execution roadmap. The PDF is just the entry point." },
  { q: "Will my channel get demonetized?", a: "Demonetization happens when creators use generic AI voices and recycled stock footage. The Blueprint includes the exact voice-cloning stack and originality protocols that pass YouTube's monetization review." },
  { q: "Do I need to show my face?", a: "Never. The entire system is built around faceless digital real estate. You own the asset, the audience, and the cashflow — without trading your identity for views." },
];

function LandingPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <SalesLetter />
      <DataChart />
      <WhyPeopleFail />
      <ProductShowcase />
      <BonusStack />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-[#070913]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-extrabold tracking-tight">
          <span className="text-gradient-gold drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]">AI</span>
          <span className="ml-2 text-foreground/90">AUTOMATION</span>
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#blueprint" className="transition hover:text-foreground">Blueprint</a>
          <a href="#bonuses" className="transition hover:text-foreground">Bonuses</a>
          <a href="#faq" className="transition hover:text-foreground">FAQ</a>
        </nav>
        <a href="#cta" className="btn-gold rounded-full px-5 py-2.5 text-sm">
          Secure Your Blueprint
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.18),transparent_60%)]" />
      <div className="mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-glow" />
          The Systems Economy Is Here
        </div>
        <h1 className="mt-8 font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
          The <span className="text-gradient-gold">AI Content</span><br />
          <span className="text-gradient-gold">Gold Rush</span> Has Started
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          How <em className="text-amber-300 not-italic font-semibold">"Faceless"</em> digital real estate is minting a new generation of digital entrepreneurs — and how you can claim your share.
        </p>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="glass-panel relative rounded-3xl p-8 md:p-14">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(245,158,11,0.18),transparent_70%)]" />
            <div className="relative flex items-center justify-center">
              <img
                src={bookMockup}
                alt="Master Automation System Guide — 3D book mockup"
                width={1024}
                height={1536}
                className="h-auto w-[260px] md:w-[340px] animate-float drop-shadow-[0_30px_60px_rgba(245,158,11,0.35)]"
              />
              <button
                aria-label="Play video"
                className="group absolute flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-[0_0_60px_rgba(251,191,36,0.6)] transition hover:scale-110 md:h-24 md:w-24"
              >
                <span className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping" />
                <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-amber-600" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
            <p className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Watch the 4-minute system breakdown
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground sm:flex-row">
          <a href="#cta" className="btn-gold rounded-full px-8 py-4 text-base">
            Secure Your Blueprint — $27
          </a>
          <span className="text-xs">Instant digital delivery · 30-day guarantee</span>
        </div>
      </div>
    </section>
  );
}

function SalesLetter() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-amber-300/80">A Letter From The Front Lines</p>
        <h2 className="mt-4 text-center font-display text-4xl font-bold leading-tight md:text-5xl">
          The largest wealth transfer of the decade<br />
          <span className="text-gradient-gold">is happening right now.</span>
        </h2>
        <div className="mt-12 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>Every two or three decades, a quiet door opens. The internet in '95. Mobile in '08. Crypto in '17. Each one minted a new class of operators who saw the door and walked through it before the masses even noticed it existed.</p>
          <p>The door right now is <span className="font-semibold text-foreground">faceless AI content systems</span> — automated, asset-style media properties producing watch-time at industrial scale while their owners sleep.</p>
          <p>This isn't a "post more on TikTok" play. It's the quiet acquisition of <span className="text-amber-300">digital real estate</span> — channels, properties and pipelines that pay rent monthly, forever, without your face attached.</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <ComparisonCard tone="red" eyebrow="The Old Way" title="The Old Creator Economy" items={oldEconomy} />
          <ComparisonCard tone="gold" eyebrow="The New Way" title="The New Systems Economy" items={newEconomy} />
        </div>
      </div>
    </section>
  );
}

function ComparisonCard({ tone, eyebrow, title, items }: { tone: "red" | "gold"; eyebrow: string; title: string; items: string[]; }) {
  const isGold = tone === "gold";
  return (
    <div className={`relative rounded-3xl border p-8 ${isGold ? "border-amber-400/30 bg-gradient-to-b from-amber-400/[0.06] to-transparent" : "border-red-500/20 bg-gradient-to-b from-red-500/[0.04] to-transparent"}`}>
      <p className={`text-xs uppercase tracking-[0.25em] ${isGold ? "text-amber-300" : "text-red-400"}`}>{eyebrow}</p>
      <h3 className="mt-3 font-display text-2xl font-bold">{title}</h3>
      <ul className="mt-6 space-y-4">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-sm md:text-base">
            <span className={`mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${isGold ? "bg-amber-400/20 text-amber-300" : "bg-red-500/20 text-red-400"}`}>
              {isGold ? "✓" : "✕"}
            </span>
            <span className={isGold ? "text-foreground/90" : "text-muted-foreground line-through decoration-red-500/40"}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DataChart() {
  const max = 100;
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Live Market Data</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            The Massive Rise of <span className="text-gradient-gold">AI Content</span> vs Traditional Media
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Consumption share, indexed. The crossover already happened — and it isn't slowing down.</p>
        </div>

        <div className="glass-panel mt-12 rounded-3xl p-8 md:p-12">
          <div className="flex items-end justify-between gap-4 md:gap-10" style={{ height: 360 }}>
            {chartData.map((d, i) => (
              <div key={d.year} className="flex flex-1 flex-col items-center gap-3">
                <div className="flex h-full w-full items-end justify-center gap-2 md:gap-3">
                  <Bar value={d.traditional} max={max} color="slate" delay={i * 120} label={`${d.traditional}`} />
                  <Bar value={d.ai} max={max} color="gold" delay={i * 120 + 60} label={`${d.ai}`} />
                </div>
                <span className="text-sm font-semibold text-muted-foreground">{d.year}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
            <Legend color="slate" label="Traditional Media" />
            <Legend color="gold" label="AI-Generated Content" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Bar({ value, max, color, delay, label }: { value: number; max: number; color: "slate" | "gold"; delay: number; label: string; }) {
  const h = `${(value / max) * 100}%`;
  const isGold = color === "gold";
  return (
    <div className="relative flex h-full w-8 flex-col items-center justify-end md:w-12">
      <span className={`mb-2 text-xs font-bold ${isGold ? "text-amber-300" : "text-slate-400"}`}>{label}</span>
      <div
        className={`w-full origin-bottom rounded-t-md transition-transform ${isGold ? "bg-gradient-to-t from-amber-500 to-amber-300 shadow-[0_0_24px_rgba(245,158,11,0.6)]" : "bg-gradient-to-t from-slate-800 to-slate-600"}`}
        style={{ height: h, animation: `bar-rise 900ms ease-out ${delay}ms both` }}
      />
    </div>
  );
}

function Legend({ color, label }: { color: "slate" | "gold"; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-muted-foreground">
      <span className={`h-3 w-3 rounded-sm ${color === "gold" ? "bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.7)]" : "bg-slate-600"}`} />
      {label}
    </span>
  );
}

function WhyPeopleFail() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-red-400/80">Why 97% Fail</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            The four traps quietly killing<br />most faceless channels.
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-amber-400/30 to-transparent md:block" />
          <div className="space-y-6">
            {painPoints.map((p) => (
              <div key={p.n} className="relative grid gap-6 md:grid-cols-[120px_1fr]">
                <div className="flex items-start gap-4 md:flex-col md:items-end">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-red-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    {p.n}
                  </span>
                </div>
                <div className="glass-panel rounded-2xl p-6">
                  <h3 className="font-display text-2xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-3xl border-2 border-amber-400/40 bg-gradient-to-br from-amber-400/10 via-transparent to-amber-400/5 p-10 text-center gold-glow">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300">The AI Opportunity</p>
          <h3 className="mt-3 font-display text-3xl font-bold md:text-4xl">
            Every trap above has a <span className="text-gradient-gold">documented system</span> inside the Blueprint.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">No theory, no guesswork. The exact SOPs, prompts, niches and monetization stack used by operators already in the door.</p>
        </div>
      </div>
    </section>
  );
}

function ProductShowcase() {
  return (
    <section id="blueprint" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">What's Inside</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Everything you get inside<br />
            <span className="text-gradient-gold">The Blueprint.</span>
          </h2>
          <ul className="mt-8 space-y-3">
            {blueprintItems.map((b, i) => (
              <li key={b} className="flex items-start gap-4 rounded-xl border border-border/40 bg-card/40 p-4 transition hover:border-amber-400/30">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-amber-400/15 text-xs font-bold text-amber-300">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(245,158,11,0.25),transparent_70%)]" />
          <img
            src={bookMockup}
            alt="Master Automation System Guide cover"
            width={1024}
            height={1536}
            loading="lazy"
            className="h-auto w-[320px] animate-float drop-shadow-[0_40px_80px_rgba(245,158,11,0.4)] md:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}

function BonusStack() {
  return (
    <section id="bonuses" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Ultimate Bonus Stack</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Five free bonuses worth<br />
            <span className="text-gradient-gold">$155.00</span> — yours today.
          </h2>
        </div>

        <div className="glass-panel mt-12 overflow-hidden rounded-3xl">
          <div className="grid grid-cols-[110px_1fr_100px] border-b border-border/50 px-6 py-4 text-xs uppercase tracking-widest text-muted-foreground">
            <span>Bonus</span>
            <span>Description</span>
            <span className="text-right">Value</span>
          </div>
          {bonuses.map((b) => (
            <div key={b.n} className="grid grid-cols-[110px_1fr_100px] items-center border-b border-border/30 px-6 py-5 transition hover:bg-amber-400/[0.04]">
              <span className="text-sm font-bold text-amber-300">{b.n}</span>
              <span className="text-foreground/90">{b.name}</span>
              <span className="text-right text-sm font-semibold text-muted-foreground line-through">{b.value}</span>
            </div>
          ))}
          <div className="grid grid-cols-[110px_1fr_100px] items-center bg-gradient-to-r from-amber-400/10 via-amber-400/15 to-amber-400/10 px-6 py-6">
            <span className="text-sm font-bold uppercase tracking-widest text-amber-300">Total</span>
            <span className="font-display text-lg font-bold">Total Bonus Value</span>
            <span className="text-right font-display text-2xl font-extrabold text-gradient-gold">$155.00</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">From Operators In The Door</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Quiet wins. Real systems.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.initials} className="glass-panel rounded-3xl p-8">
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.color} font-display text-base font-bold text-[#070913]`}>
                  {t.initials}
                </div>
                <figcaption>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
                <span className="ml-auto text-amber-400">★★★★★</span>
              </div>
              <blockquote className="mt-6 text-lg italic leading-relaxed text-foreground/85">
                "{t.body}"
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Frequently Asked</p>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Answers, before you ask.</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`overflow-hidden rounded-2xl border transition ${isOpen ? "border-amber-400/40 bg-amber-400/[0.04]" : "border-border/40 bg-card/40"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold md:text-xl">{f.q}</span>
                  <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-amber-400/40 text-amber-300 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(245,158,11,0.28),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-amber-300">The Cost of Waiting</p>
        <h2 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] md:text-7xl">
          Every day you wait,<br />
          someone else <span className="text-gradient-gold">claims your spot.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          The first movers in every gold rush kept the gold. The Blueprint is your map. The door is open right now.
        </p>

        <div className="mt-12 flex items-baseline justify-center gap-5">
          <span className="font-display text-2xl text-muted-foreground line-through md:text-3xl">$197.00</span>
          <span className="font-display text-6xl font-extrabold text-gradient-gold drop-shadow-[0_0_30px_rgba(245,158,11,0.5)] md:text-8xl">$27.00</span>
        </div>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-amber-300/80">One-time. No subscription. Lifetime access.</p>

        <a
          href="#"
          className="btn-gold mt-12 inline-flex items-center justify-center rounded-full px-10 py-5 font-display text-base font-extrabold uppercase tracking-wider md:text-lg"
        >
          Yes! I Want The Master Automation System →
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>✓ Instant digital delivery</span>
          <span>✓ 30-day money-back guarantee</span>
          <span>✓ Lifetime updates</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-10 text-center text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} AI Automation — Master Automation System Guide. All rights reserved.</p>
    </footer>
  );
}
