import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/shortcut")({
  head: () => ({
    meta: [
      { title: "System Core — The Shortcut to Algorithmic Success" },
      { name: "description", content: "Stop wasting months on trial & error. Build a profitable faceless channel in 90 days with the System Core shortcut." },
      { property: "og:title", content: "System Core — The Shortcut" },
      { property: "og:description", content: "Build a profitable faceless channel in 90 days." },
    ],
  }),
  component: ShortcutPage,
});

const mistakes = [
  { n: "MISTAKE #1", title: "The Quantity Over Quality Trap", body: "Pumping out 5 low-effort videos a week trains the algorithm that your channel is low-value. Retention tanks, impressions vanish, and you blame yourself instead of the system." },
  { n: "MISTAKE #2", title: "Chasing Trends Instead of Niches", body: "Every viral trend you chase resets your topical authority. The algorithm can never figure out who to recommend you to — so it stops recommending you at all." },
  { n: "MISTAKE #3", title: "Ignoring the First 30 Seconds", body: "Without a benchmarked hook structure, 60% of viewers leave before second 30. AVD collapses, the algorithm caps your reach, and the cycle restarts on the next upload." },
];

const tabs = [
  {
    key: "niche",
    label: "Niche Framework",
    title: "The D.C.M.S Niche Matrix",
    body: "A four-axis scoring matrix — Demand, Competition, Monetization, Stamina — that filters thousands of niches down to the 3-5 that actually pay. No more guessing.",
    bullets: ["Pre-scored database of 180+ faceless niches", "RPM bands by geography and platform", "Saturation index updated quarterly"],
    visual: "matrix",
  },
  {
    key: "factory",
    label: "Factory Pipeline",
    title: "The 7-Step Production Factory",
    body: "From idea to published upload in under 90 minutes — without you touching the timeline. Each step has a documented SOP, a template, and a contractor brief.",
    bullets: ["Ideation → script → voice → visuals → edit → thumb → publish", "Vetted contractor rate cards included"],
    visual: "pipeline",
  },
  {
    key: "algo",
    label: "Algorithm Benchmarks",
    title: "Numbers That Trigger Reach",
    body: "The exact CTR and AVD bands the algorithm rewards in 2026 — by niche, by length, by platform. Stop optimizing in the dark.",
    bullets: ["CTR 6%+ on long-form, 8%+ on shorts", "AVD floor of 45% for sustained push", "Session-time multiplier playbook"],
    visual: "stats",
  },
  {
    key: "money",
    label: "Monetization",
    title: "Three-Layer Revenue Stack",
    body: "AdSense is layer one — and the smallest. The bundle includes the affiliate, sponsorship, and digital-product layers most creators never build.",
    bullets: ["Affiliate stack: 12 evergreen programs", "Sponsorship outreach scripts (5-touch)", "Digital product launch checklist"],
    visual: "money",
  },
];

const bundle = [
  "Master Automation System Guide (PDF + workbook)",
  "Bonus #1 — 100+ AI Prompt Vault",
  "Bonus #2 — D.C.M.S Niche Database (Excel)",
  "Bonus #3 — Voice Cloning Cheatsheet",
];

const faqs = [
  { q: "I'm a complete beginner. Is this for me?", a: "Yes — the system is sequenced for day-one beginners. Each module starts with the absolute fundamentals and walks you through, click by click, until you publish your first automated upload." },
  { q: "How much money do I need to start?", a: "You can launch the entire pipeline for under $40/month using the free and freemium tools in the stack. Outsourcing comes later, only once a channel is already generating revenue." },
  { q: "How long until I see results?", a: "Most operators hit their first 1,000 watch-hours between weeks 6 and 10. The 90-day roadmap is built around that benchmark, with weekly checkpoints so you always know if you're on track." },
];

function ShortcutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0b0f17" }}>
      <Nav />
      <Hero />
      <BurnoutStory />
      <Mistakes />
      <FeatureTabs />
      <PricingCard />
      <Guarantee />
      <FAQ />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0f17]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display text-base font-extrabold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-teal-600/20 text-teal-400 ring-1 ring-teal-500/40">◆</span>
          <span>SYSTEM <span className="text-teal-400">CORE</span></span>
        </a>
        <nav className="hidden gap-8 text-sm text-slate-400 md:flex">
          <a href="#mistakes" className="hover:text-white">Mistakes</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <a href="#pricing" className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(13,148,136,0.7)] transition hover:bg-teal-500">
          Get The Shortcut
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(13,148,136,0.18),transparent_60%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-rose-300">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            The Shortcut To Algorithmic Success
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Stop wasting months learning automation through <span className="text-rose-400">trial & error.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Build a profitable faceless channel in <span className="font-semibold text-teal-400">90 days</span> using the same operating system used by operators already past their first $5K month.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="rounded-md bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(13,148,136,0.8)] transition hover:bg-teal-500">
              Get The Shortcut — $27
            </a>
            <a href="#features" className="rounded-md border border-white/10 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5">
              See what's inside
            </a>
          </div>
          <div className="mt-6 flex items-center gap-5 text-xs text-slate-500">
            <span>✓ 30-day guarantee</span>
            <span>✓ Instant access</span>
            <span>✓ Lifetime updates</span>
          </div>
        </div>

        <SplitVisual />
      </div>
    </section>
  );
}

function SplitVisual() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#141b2d] p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-3">
        {/* Stressed */}
        <div className="relative overflow-hidden rounded-xl border border-rose-500/20 bg-gradient-to-br from-rose-950/40 to-[#141b2d] p-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400">Before</span>
          <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/20 text-2xl">😵</div>
          <p className="mt-3 text-sm font-semibold text-rose-200">Trial & Error</p>
          <div className="mt-4 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-rose-500/30" />
            <div className="h-1.5 w-1/2 rounded-full bg-rose-500/20" />
            <div className="h-1.5 w-2/3 rounded-full bg-rose-500/20" />
          </div>
          <div className="mt-5 rounded-md bg-black/30 p-3">
            <p className="text-[10px] uppercase text-rose-300/70">Revenue</p>
            <p className="font-display text-xl font-bold text-rose-300">$0.04</p>
          </div>
        </div>

        {/* Relaxed */}
        <div className="relative overflow-hidden rounded-xl border border-teal-500/30 bg-gradient-to-br from-teal-950/40 to-[#141b2d] p-5">
          <span className="text-[10px] font-bold uppercase tracking-widest text-teal-300">After</span>
          <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/20 text-2xl">😎</div>
          <p className="mt-3 text-sm font-semibold text-teal-100">Systems Operator</p>

          <div className="mt-4 flex items-end gap-1.5" style={{ height: 60 }}>
            {[35, 50, 42, 70, 65, 88, 95].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-teal-600 to-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.5)]" style={{ height: `${h}%` }} />
            ))}
          </div>

          <div className="mt-5 rounded-md bg-black/30 p-3">
            <p className="text-[10px] uppercase text-teal-300/70">Monthly</p>
            <p className="font-display text-xl font-bold text-teal-300">$5,180</p>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#0b0f17] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
        90 days
      </div>
    </div>
  );
}

function BurnoutStory() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-teal-400">A familiar story</p>
        <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">Six months. Forty-two uploads. Nothing.</h2>
        <p className="mt-6 leading-relaxed text-slate-400">
          Most creators don't quit because they're lazy. They quit because they followed the loudest advice on YouTube — "post consistently, the algorithm will reward you" — and the algorithm never did. By month six, the camera roll is full, the bank account is empty, and the doubt is louder than the dream.
        </p>
        <blockquote className="mt-10 rounded-xl border-l-4 border-rose-500 bg-rose-500/5 px-8 py-8">
          <p className="font-display text-2xl font-bold italic leading-snug text-white md:text-3xl">
            "Zero views. Zero revenue. Complete exhaustion."
          </p>
        </blockquote>
        <p className="mt-8 text-slate-400">The shortcut isn't working harder. It's working from a system someone else already paid the trial-and-error tax for.</p>
      </div>
    </section>
  );
}

function Mistakes() {
  return (
    <section id="mistakes" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-rose-400">Hidden Mistakes</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            The three errors quietly capping 97% of channels.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {mistakes.map((m) => (
            <div key={m.n} className="group rounded-xl border border-white/5 bg-[#141b2d] p-7 transition hover:border-rose-500/40">
              <span className="inline-block rounded-md bg-rose-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-rose-300">{m.n}</span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">{m.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-rose-500/30 bg-gradient-to-r from-rose-500/10 via-rose-500/5 to-transparent p-6 md:flex-row md:p-8">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-rose-500/20 text-2xl text-rose-300">!</span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-rose-300">Cost of Trial and Error</p>
              <p className="mt-1 font-display text-xl font-bold text-white md:text-2xl">~14 months and $3,400 — the average price of figuring it out alone.</p>
            </div>
          </div>
          <a href="#pricing" className="rounded-md bg-white px-5 py-3 text-sm font-bold text-[#0b0f17] hover:bg-slate-100">
            Skip it — $27
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureTabs() {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-teal-400">What's Inside</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">A complete operating system, not another course.</h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 rounded-xl border border-white/5 bg-[#141b2d] p-2">
          {tabs.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => setActive(i)}
              className={`flex-1 min-w-[160px] rounded-lg px-4 py-3 text-sm font-semibold transition ${active === i ? "bg-teal-600 text-white shadow-[0_8px_24px_-10px_rgba(13,148,136,0.8)]" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 rounded-2xl border border-white/5 bg-[#141b2d] p-8 md:p-12 lg:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-teal-400">{t.label}</span>
            <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">{t.title}</h3>
            <p className="mt-4 leading-relaxed text-slate-400">{t.body}</p>
            <ul className="mt-6 space-y-3">
              {t.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-teal-500/20 text-xs text-teal-300">✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <TabVisual kind={t.visual as "matrix" | "pipeline" | "stats" | "money"} />
        </div>
      </div>
    </section>
  );
}

function TabVisual({ kind }: { kind: "matrix" | "pipeline" | "stats" | "money" }) {
  if (kind === "matrix") {
    const cells = [
      { l: "Demand", v: 92 }, { l: "Competition", v: 38 },
      { l: "Monetization", v: 88 }, { l: "Stamina", v: 76 },
    ];
    return (
      <div className="grid grid-cols-2 gap-3 rounded-xl bg-[#0b0f17] p-5">
        {cells.map((c) => (
          <div key={c.l} className="rounded-lg border border-white/5 bg-[#141b2d] p-4">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">{c.l}</p>
            <p className="mt-2 font-display text-3xl font-extrabold text-teal-300">{c.v}</p>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/5">
              <div className="h-full bg-teal-500" style={{ width: `${c.v}%` }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "pipeline") {
    const steps = ["Ideation", "Script", "Voice", "Visuals", "Edit", "Thumbnail", "Publish"];
    return (
      <div className="rounded-xl bg-[#0b0f17] p-5">
        <p className="text-[10px] uppercase tracking-widest text-slate-500">Pipeline · 87 min avg</p>
        <ol className="mt-4 space-y-2">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-3 rounded-md border border-white/5 bg-[#141b2d] px-4 py-3 text-sm">
              <span className="grid h-7 w-7 flex-none place-items-center rounded-md bg-teal-600/20 font-mono text-xs font-bold text-teal-300">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-slate-200">{s}</span>
              <span className="ml-auto text-xs text-slate-500">SOP →</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }
  if (kind === "stats") {
    return (
      <div className="grid grid-cols-2 gap-3 rounded-xl bg-[#0b0f17] p-5">
        {[
          { l: "Target CTR", v: "6.4%", s: "+ industry avg 3.1%" },
          { l: "Target AVD", v: "47%", s: "+ floor for push" },
          { l: "Session Time", v: "9:12", s: "multiplier zone" },
          { l: "RPM Band", v: "$18–32", s: "tier-1 finance" },
        ].map((s) => (
          <div key={s.l} className="rounded-lg border border-white/5 bg-[#141b2d] p-4">
            <p className="text-[10px] uppercase tracking-widest text-slate-500">{s.l}</p>
            <p className="mt-2 font-display text-2xl font-extrabold text-white">{s.v}</p>
            <p className="mt-1 text-xs text-teal-300">{s.s}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="rounded-xl bg-[#0b0f17] p-5">
      <p className="text-[10px] uppercase tracking-widest text-slate-500">Revenue Stack</p>
      <div className="mt-4 space-y-3">
        {[
          { l: "AdSense", v: "$1,240", w: 24 },
          { l: "Affiliate", v: "$2,180", w: 42 },
          { l: "Sponsorship", v: "$1,500", w: 29 },
          { l: "Digital Product", v: "$260", w: 5 },
        ].map((r) => (
          <div key={r.l} className="rounded-md border border-white/5 bg-[#141b2d] p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-300">{r.l}</span>
              <span className="font-display font-bold text-teal-300">{r.v}</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div className="h-full bg-gradient-to-r from-teal-600 to-teal-400" style={{ width: `${r.w * 2}%` }} />
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between rounded-md border border-teal-500/30 bg-teal-500/10 p-3 text-sm">
          <span className="font-semibold text-white">Monthly Total</span>
          <span className="font-display text-lg font-extrabold text-teal-300">$5,180</span>
        </div>
      </div>
    </div>
  );
}

function PricingCard() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="relative overflow-hidden rounded-3xl border border-teal-500/30 bg-[#141b2d] p-8 shadow-[0_30px_80px_-30px_rgba(13,148,136,0.5)] md:p-12">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
          <div className="text-center">
            <span className="inline-block rounded-full border border-teal-500/40 bg-teal-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-teal-300">The Complete Bundle</span>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-white md:text-4xl">System Core — Everything In One Drop</h2>
            <p className="mt-3 text-slate-400">One-time payment. Lifetime access. No upsells.</p>

            <div className="mt-8 flex items-baseline justify-center gap-4">
              <span className="font-display text-2xl text-slate-500 line-through">$210.00</span>
              <span className="font-display text-6xl font-extrabold text-teal-400 drop-shadow-[0_0_30px_rgba(20,184,166,0.45)] md:text-7xl">$27.00</span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-widest text-teal-300/80">89% off — launch pricing</p>
          </div>

          <ul className="mt-10 space-y-3">
            {bundle.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-lg border border-white/5 bg-black/20 px-4 py-3 text-sm text-slate-200">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-teal-500/20 text-xs text-teal-300">✓</span>
                {b}
              </li>
            ))}
          </ul>

          <a href="#" className="mt-8 block rounded-xl bg-teal-600 py-4 text-center font-display text-base font-extrabold uppercase tracking-wider text-white shadow-[0_18px_50px_-10px_rgba(13,148,136,0.8)] transition hover:bg-teal-500 hover:translate-y-[-1px]">
            Give Me The Shortcut Now →
          </a>

          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500">
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-teal-400" strokeWidth="2"><path d="M6 10V8a6 6 0 1112 0v2" /><rect x="4" y="10" width="16" height="10" rx="2" /></svg>
            Secure checkout · 256-bit SSL
          </div>
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-teal-500/20 bg-gradient-to-r from-teal-500/[0.06] via-transparent to-teal-500/[0.06] p-8 md:flex-row md:p-10">
          <div className="relative grid h-28 w-28 flex-none place-items-center rounded-full border-2 border-teal-400 bg-teal-500/10 shadow-[0_0_40px_rgba(13,148,136,0.4)]">
            <div className="absolute inset-2 rounded-full border border-teal-400/40" />
            <div className="text-center">
              <p className="font-display text-3xl font-extrabold text-teal-300 leading-none">30</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-teal-300/80">days</p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">Risk reversal — 30-day full refund.</h3>
            <p className="mt-3 text-slate-400">
              Read the guide, run the SOPs, install the niche matrix. If in the next 30 days you don't agree this is the cleanest shortcut to a faceless channel — reply to your receipt and get every cent back. No forms. No friction.
            </p>
          </div>
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
          <p className="text-xs uppercase tracking-[0.3em] text-teal-400">Questions</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">Everything you might be wondering.</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`overflow-hidden rounded-xl border transition ${isOpen ? "border-teal-500/40 bg-teal-500/[0.04]" : "border-white/5 bg-[#141b2d]"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left" aria-expanded={isOpen}>
                  <span className="font-display text-base font-semibold text-white md:text-lg">{f.q}</span>
                  <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-teal-400/40 text-teal-300 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-slate-400">{f.a}</p>
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

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10 text-center text-xs text-slate-500">
      <p>© {new Date().getFullYear()} System Core. All rights reserved.</p>
    </footer>
  );
}
