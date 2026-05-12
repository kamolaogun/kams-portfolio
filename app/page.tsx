import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Lightbulb, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ─── EDITABLE CONTENT ────────────────────────────────────────────────────────

const HERO = {
  badge: "Actively looking · Sr. Manager, Director, and CMO-track roles",
  headline: ["The marketer", "who builds", "the engine."],
  subheadline:
    "I've spent 10 years being handed situations with no playbook: no team, no category, broken pipeline. I tend to like those problems. I've built $170M worth of pipeline solving them, mostly in cybersecurity and fintech.",
  cta_primary: { label: "View My Work", href: "/work" },
  cta_secondary: { label: "Get in Touch", href: "/about#contact" },
};

const METRICS = [
  { value: "$170M+", label: "Pipeline Generated" },
  { value: "10+", label: "Years in B2B Marketing" },
  { value: "8x", label: "Revenue Growth, Built from Scratch" },
  { value: "$76", label: "Pipeline Generated per $1 Spent" },
];

const CASE_STUDIES = [
  {
    tag: "Identity Verification, Cybersecurity",
    company: "Socure",
    initials: "SC",
    logoSrc: "/logos/socure.png",
    title: "ABM-Led GTM Strategy That Generated $49M in Pipeline",
    description:
      "Owned and scaled an ABM-led GTM strategy across digital, content, events, and partner channels. Built AI-driven agents and workflows that improved GTM efficiency and sales productivity by 50%.",
    results: [
      "$49M in marketing-sourced pipeline from a $1.9M budget",
      "$18M in closed revenue in 2025 (+50% YoY)",
      "90% YoY increase in sourced opportunities in emerging verticals",
    ],
  },
  {
    tag: "Cybersecurity, Log Management",
    company: "Sumo Logic",
    initials: "SL",
    logoSrc: "/logos/sumo-logic.jpg",
    title: "$120M in Pipeline From a Global Demand Gen Rebuild",
    description:
      "Managed a $63K monthly global budget across paid and integrated campaigns. Launched Sumo Logic's first-ever public sector ABM initiative and redesigned ABX programs for Tier 1 accounts.",
    results: [
      "$120M in pipeline and $15.6M in sourced revenue",
      "Won a premier $2.7M ARR deal via personalized ABM",
      "625% YoY increase in sourced opportunities in key segments",
    ],
  },
  {
    tag: "EdTech, SaaS",
    company: "Cariina",
    initials: "CA",
    logoSrc: "/logos/cariina.jpg",
    title: "Built a Full-Stack Marketing Engine From Zero",
    description:
      "First marketing hire. Built team, brand, category positioning, digital engine, and field program, all on a $21K monthly budget. Influenced 92% of company revenue.",
    results: [
      "$9.66M in net-new marketing-sourced pipeline",
      "$76 in pipeline generated per $1 spent",
      "38x inbound growth and 327% increase in direct traffic",
    ],
  },
];

const PRINCIPLES = [
  {
    icon: TrendingUp,
    title: "Pipeline is the product",
    body: "I've worked in orgs where marketing was a cost center and ones where it drove 37% of revenue. Same channels. Different ownership. I take ownership of the number, not just the leads.",
  },
  {
    icon: Users,
    title: "Know the buyer better than they know themselves",
    body: "Most demand gen fails because it targets a persona, not a person. I invest serious time understanding how buyers actually think, what they're scared of, and where they go when they're looking for a solution. That's what makes messaging land instead of getting ignored.",
  },
  {
    icon: Lightbulb,
    title: "Run the experiment. Then run another one.",
    body: "The best programs I've built started as small, fast tests, not polished decks. I have a strong bias toward trying things, measuring what happens, and doubling down on what works. Creativity without iteration is just a good idea. Iteration without creativity is just optimization.",
  },
  {
    icon: Zap,
    title: "AI as a force multiplier — used with intention",
    body: "I've deployed AI agents in production, not in a sandbox. At Socure, custom workflows for targeting, content, and enablement changed what a small team could actually produce. But the real skill isn't adoption — it's knowing what to hand off, what to validate, and what judgment AI still can't replace.",
  },
];

const TESTIMONIAL = {
  quote:
    "Kam has a very data-driven mindset and consistently approaches marketing decisions through the lens of performance, pipeline impact, and revenue outcomes.",
  name: "Lori Chavez",
  title: "CMO, Trustmi",
  subtitle: "Prior VP of Marketing, Sumo Logic",
  relationship: "Former Manager",
  photo: "/lori-chavez.jpg" as string | null,
};

const PLATFORMS = [
  "6sense", "Salesforce", "HubSpot", "Marketo", "LinkedIn Ads",
  "Google Ads", "ZoomInfo", "Clearbit", "Clay", "Outreach",
  "HighSpot", "Bizible", "Tableau", "Gong", "PathFactory", "Intellimize",
];

// ─────────────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 dot-grid opacity-100 dot-grid-fade" />
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36">
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">

            {/* Circle headshot — shows above text on mobile, left on desktop */}
            <div className="shrink-0 flex justify-start">
              <div className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-zinc-600/20 blur-xl scale-110" />
                {/* Photo */}
                <div className="relative rounded-full overflow-hidden w-full h-full ring-1 ring-zinc-700/60">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/headshot.jpg"
                    alt="Kam Olaogun"
                    className="w-full h-full object-cover object-[52%_8%]"
                    style={{ filter: "brightness(0.92) contrast(1.04) saturate(0.9)" }}
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <div className="mb-6">
                <Badge variant="blue">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
                  {HERO.badge}
                </Badge>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-50 leading-[1.05] mb-6">
                {HERO.headline.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-10">
                {HERO.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <Link href={HERO.cta_primary.href}>
                  <Button size="lg" variant="primary" className="group">
                    {HERO.cta_primary.label}
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
                <Link href={HERO.cta_secondary.href}>
                  <Button size="lg" variant="secondary">{HERO.cta_secondary.label}</Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Impact Metrics ── */}
      <section className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {METRICS.map((m) => (
              <div key={m.label} className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-50 mb-2">
                  {m.value}
                </p>
                <p className="text-sm text-zinc-500 leading-snug">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Selected Case Studies ── */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-3">
                Selected Work
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50">
                The approach. The numbers. The outcomes.
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-1.5 shrink-0 transition-colors"
            >
              Full case studies <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {CASE_STUDIES.map((cs) => (
              <div
                key={cs.company}
                className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 flex flex-col gap-4 hover:border-zinc-700 transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden">
                    {cs.logoSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={cs.logoSrc} alt={cs.company} className="w-full h-full object-contain p-1" />
                    ) : (
                      <span className="text-xs font-bold text-zinc-800">{cs.initials}</span>
                    )}
                  </div>
                  <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">{cs.company}</span>
                </div>
                <Badge variant="default" className="self-start">{cs.tag}</Badge>
                <h3 className="text-base font-semibold text-zinc-100 leading-snug">{cs.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1">{cs.description}</p>
                <ul className="space-y-1.5 border-t border-zinc-800 pt-4">
                  {cs.results.map((r) => (
                    <li key={r} className="text-sm text-zinc-300 flex items-start gap-2">
                      <span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I Think ── */}
      <section className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="mb-12">
            <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-3">
              How I Think
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 max-w-md">
              A few things I&apos;ve found to be true.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {PRINCIPLES.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex gap-4 p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors"
                >
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center mt-0.5">
                    <Icon size={16} className="text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 font-medium mb-1">0{i + 1}</p>
                    <h3 className="text-base font-semibold text-zinc-100 mb-2">{p.title}</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">{p.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-12 text-center">
            In Their Words
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10">
              <span className="text-5xl font-serif text-zinc-700 leading-none select-none block mb-5">&ldquo;</span>
              <p className="text-lg md:text-xl text-zinc-200 leading-relaxed mb-8">
                {TESTIMONIAL.quote}
              </p>
              <div className="border-t border-zinc-800 pt-6 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  {/* Headshot — shows initials until /public/lori-chavez.jpg is added */}
                  <div className="w-10 h-10 rounded-full bg-zinc-700 overflow-hidden shrink-0 ring-1 ring-zinc-600">
                    {TESTIMONIAL.photo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={TESTIMONIAL.photo} alt={TESTIMONIAL.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs font-bold text-zinc-400 select-none">
                        LC
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-200">{TESTIMONIAL.name}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{TESTIMONIAL.title}</p>
                    <p className="text-xs text-zinc-600">{TESTIMONIAL.subtitle}</p>
                  </div>
                </div>
                <Badge variant="outline">{TESTIMONIAL.relationship}</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tools & Platforms ── */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-8 text-center">
            Platforms and Tools
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {PLATFORMS.map((tool) => (
              <span
                key={tool}
                className="text-sm text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 font-medium hover:border-zinc-700 hover:text-zinc-300 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-5">
            Let&apos;s Talk
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-50 mb-6 max-w-2xl mx-auto leading-tight">
            Still reading? Let&apos;s talk.
          </h2>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Director and CMO-track roles at Series A to C companies in cybersecurity or fintech.
            Give me a hard pipeline problem and a team to build. That&apos;s where I do my best work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/about#contact">
              <Button size="lg" variant="primary" className="group">
                Get in Touch
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </Link>
            <Link href="/work">
              <Button size="lg" variant="ghost">View My Work</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
