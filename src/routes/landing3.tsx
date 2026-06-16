import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import bookMockup from "@/assets/blueprint-mockup-alt.png";
import dashboardStats from "@/assets/dashboard-stats.png";

export const Route = createFileRoute("/landing3")({
  head: () => ({
    meta: [
      { title: "The Automation Framework — Playbook of Successful Channels" },
      { name: "description", content: "Copy and paste the exact 7-step system used to build, scale, and monetize automated digital media assets." },
      { property: "og:title", content: "The Automation Framework" },
      { property: "og:description", content: "Copy and paste the 7-step faceless channel system." },
    ],
  }),
  component: FrameworkPage,
});

const steps = [
  {
    num: "01",
    title: "Ideation & Title Engineering",
    desc: "Generate validated video concepts based on competitor outliers. Learn the exact CTR psychology to design titles and thumbnails *before* scripting."
  },
  {
    num: "02",
    title: "AI-Powered Research",
    desc: "Use our proprietary Perplexity and Claude prompts to analyze transcripts, find content gaps, and extract viral structures."
  },
  {
    num: "03",
    title: "High-Retention Scripting",
    desc: "Master the anatomy of a high-retention script. Hook formulas, pacing cues, and the 'open loops' that keep Average View Duration (AVD) above 50%."
  },
  {
    num: "04",
    title: "Voice Synthesis Humanization",
    desc: "Don't just paste text into ElevenLabs. Learn how to use punctuation, stability sliders, and style exaggeration to create indistinguishable-from-human narration."
  },
  {
    num: "05",
    title: "Automated Editing Workflows",
    desc: "Implement pattern interrupts, kinetic typography, and the Ken Burns effect using CapCut Pro and premium stock assets."
  },
  {
    num: "06",
    title: "Optimization & SEO",
    desc: "Metadata synergy, semantic keyword extraction, and the 'Suggested Video' targeting prompt to steal traffic from massive competitors."
  },
  {
    num: "07",
    title: "The 4-Pillar Monetization Matrix",
    desc: "Scale beyond AdSense immediately. Implement high-ticket software affiliates, lead magnets, digital products, and direct brand sponsorships."
  }
];

const pricingItems = [
  { name: "The Master Automation System Guide", sub: "The core 36-page tactical blueprint for systems building.", val: "$97.00" },
  { name: "Bonus 1: 100+ AI Prompts For Automation Success", sub: "The 64-page library of engineered prompts for Claude, ChatGPT, and Midjourney.", val: "$47.00" },
  { name: "Bonus 2: High RPM Niche Vault", sub: "Data-backed analysis of profitable niches across platforms.", val: "$27.00" },
  { name: "Bonus 3: Automation SOP Templates", sub: "Standard operating procedure handoff documents for virtual assistants.", val: "$37.00" },
  { name: "Bonus 4: AI Tool Stack Directory", sub: "The specific tools used by high-performance agencies.", val: "$27.00" },
  { name: "Bonus 5: 90-Day Action Plan", sub: "Week-by-week roadmap for zero-friction launch.", val: "$17.00" }
];

const faqs = [
  { q: "Are these just generic ChatGPT prompts?", a: "Absolutely not. The 100+ AI Prompts bonus contains deeply engineered, multi-layered prompts specifically designed for YouTube automation, scripting, and SEO. They bypass generic replies and deliver production-ready outputs." },
  { q: "What if I already have a channel?", a: "This framework will help you optimize your current workflow, increase your CTR and AVD, set up virtual assistant SOPs, and scale your monetization beyond standard AdSense views." }
];

function FrameworkPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#060913" }}>
      <Nav />
      <Hero />
      <DataSection />
      <FrameworkGrid />
      <ScalingSection />
      <PricingTable />
      <FAQ />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#060913]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display text-base font-extrabold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-blue-600/20 text-cyan-400 ring-1 ring-cyan-500/40">⚡</span>
          <span>SYSTEMS <span className="text-cyan-400">PLAYBOOK</span></span>
        </a>
        <nav className="hidden gap-8 text-sm text-slate-400 md:flex">
          <a href="#pipeline" className="hover:text-white">Pipeline</a>
          <a href="#framework" className="hover:text-white">Framework</a>
          <a href="#scaling" className="hover:text-white">Scaling</a>
          <a href="#purchase" className="hover:text-white">Pricing</a>
        </nav>
        <a href="#purchase" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(37,99,235,0.7)] transition hover:bg-blue-500">
          Unlock Playbook
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="pipeline" className="relative overflow-hidden px-6 pt-16 pb-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
            OPERATIONAL SYSTEMS MATRIX
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            The Automation Framework: Inside the Playbook of Successful Faceless Channels
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Copy and paste the exact 7-step system used to build, scale, and monetize automated digital media assets.
          </p>
        </div>

        {/* Interactive Flowchart */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-[#0d1222] p-8 shadow-2xl">
          <h3 className="text-center font-display text-lg font-bold text-white mb-8">The 7-Step Factory Pipeline</h3>
          
          <div className="flex flex-wrap items-center justify-between gap-3 md:flex-nowrap">
            {steps.map((s, idx) => (
              <div key={s.num} className="flex flex-1 items-center gap-2">
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`flex-1 rounded-xl border p-4 text-center transition ${
                    activeStep === idx
                      ? "bg-blue-600 border-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.4)] text-white"
                      : "bg-[#131a30] border-white/5 text-slate-400 hover:border-cyan-400/40 hover:text-white"
                  }`}
                >
                  <p className="font-display text-lg font-extrabold opacity-60 leading-none">{s.num}</p>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-wider">{s.title.split(" ")[0]}</p>
                </button>
                {idx < steps.length - 1 && (
                  <span className="hidden text-slate-700 font-bold text-lg md:block">➔</span>
                )}
              </div>
            ))}
          </div>

          {/* Explanation Panel */}
          <div className="mt-8 rounded-xl border border-white/5 bg-[#131a30] p-6">
            <h4 className="font-display text-lg font-bold text-cyan-400">{steps[activeStep].title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{steps[activeStep].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataSection() {
  return (
    <section className="border-t border-b border-white/5 bg-white/[0.005] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">Why Faceless Win</span>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Why Faceless Channels Win (The Data)</h2>
            <div className="space-y-4 text-base leading-relaxed text-slate-400">
              <p>There is a fundamental shift happening right now. The biggest channels on the internet are no longer driven by single personalities. They are driven by <span className="font-semibold text-white">systems</span>.</p>
              <p>An automated channel functions like a mini-television network. Instead of a single personality driving the brand, the value proposition (education, entertainment, news, relaxation) drives the brand.</p>
              <p>Because the content is faceless, the production process can be completely detached from the owner. You build the system, and the system builds your wealth.</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-2xl border border-white/10 bg-[#0d1222] p-4 shadow-xl">
              <img
                src={dashboardStats}
                alt="Viral Benchmark Dashboard Stats"
                width={500}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FrameworkGrid() {
  return (
    <section id="framework" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">The Blueprint System</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">The 7-Step Automation Framework</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((s) => (
            <div key={s.num} className="group rounded-2xl border border-white/5 bg-[#0d1222] p-8 transition hover:border-cyan-500/40">
              <div className="flex items-center gap-4">
                <span className="font-display text-2xl font-extrabold text-cyan-400">{s.num}</span>
                <h3 className="font-display text-xl font-bold text-white">{s.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScalingSection() {
  return (
    <section id="scaling" className="border-t border-b border-white/5 bg-white/[0.005] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Advanced scaling</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">The Scaling Blueprint</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">Once your first channel hits $3,000 - $5,000/month, you stop being the operator and become the agency owner.</p>
        </div>

        <div className="mt-12 space-y-6">
          <div className="flex gap-6 rounded-2xl border border-white/5 bg-[#0d1222] p-6 items-start">
            <span className="text-3xl">👥</span>
            <div>
              <h3 className="font-display text-lg font-bold text-white">Team Management & Hiring</h3>
              <p className="mt-1 text-sm text-slate-400">Hiring and managing freelance editors and scriptwriters via Upwork and OnlineJobs.ph.</p>
            </div>
          </div>

          <div className="flex gap-6 rounded-2xl border border-white/5 bg-[#0d1222] p-6 items-start">
            <span className="text-3xl">💻</span>
            <div>
              <h3 className="font-display text-lg font-bold text-white">Virtual Studio Architecture</h3>
              <p className="mt-1 text-sm text-slate-400">Setting up a virtual studio in Slack/Discord with seamless automated handoffs between team members.</p>
            </div>
          </div>

          <div className="flex gap-6 rounded-2xl border border-white/5 bg-[#0d1222] p-6 items-start">
            <span className="text-3xl">📈</span>
            <div>
              <h3 className="font-display text-lg font-bold text-white">System Duplication</h3>
              <p className="mt-1 text-sm text-slate-400">Duplicating your proven, automated framework into new, highly profitable CPM niches.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingTable() {
  return (
    <section id="purchase" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="relative rounded-3xl border border-white/10 bg-[#0d1222] p-8 shadow-2xl md:p-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-black">
            SPECIAL DISCOUNT
          </div>
          
          <h2 className="text-center font-display text-3xl font-extrabold text-white">The Master Automation Guide & Bonus Stack</h2>
          
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="pb-4 font-bold">Resource Blueprint</th>
                  <th className="pb-4 text-right font-bold">Value</th>
                </tr>
              </thead>
              <tbody>
                {pricingItems.map((item) => (
                  <tr key={item.name} className="border-b border-white/5">
                    <td className="py-4">
                      <p className="font-bold text-slate-200">{item.name}</p>
                      <span className="text-xs text-slate-500 mt-1 block">{item.sub}</span>
                    </td>
                    <td className="py-4 text-right font-mono font-bold text-slate-400">{item.val}</td>
                  </tr>
                ))}
                <tr className="border-b border-white/10 font-display text-base font-bold text-slate-400">
                  <td className="py-6">Total System Value</td>
                  <td className="py-6 text-right font-mono">$252.00</td>
                </tr>
                <tr className="font-display text-lg font-extrabold">
                  <td className="py-6 text-white">Instant Access Discount Price</td>
                  <td className="py-6 text-right font-mono text-emerald-400 text-3xl drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">$27.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center max-w-md mx-auto">
            <a href="#" className="block rounded-xl bg-blue-600 py-4 text-center font-display text-base font-extrabold uppercase tracking-wider text-white shadow-[0_12px_30px_-10px_rgba(37,99,235,0.8)] transition hover:bg-blue-500 hover:translate-y-[-1px]">
              Unlock The Automation Framework →
            </a>
            <p className="mt-4 text-xs text-slate-500">One-time billing. Direct download format. 30-Day Guarantee.</p>
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
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">Questions</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`overflow-hidden rounded-xl border transition ${isOpen ? "border-cyan-500/40 bg-cyan-500/[0.04]" : "border-white/5 bg-[#0d1222]"}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left" aria-expanded={isOpen}>
                  <span className="font-display text-base font-semibold text-white md:text-lg">{f.q}</span>
                  <span className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-cyan-400/40 text-cyan-300 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
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
      <p>© {new Date().getFullYear()} Systems Playbook. All rights reserved.</p>
    </footer>
  );
}
