import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ─── EDITABLE CONTENT ────────────────────────────────────────────────────────

const PAGE_HEADER = {
  label: "Work",
  headline: "Give me a hard problem. Here's what I built.",
  subheadline:
    "What I was handed. What I did with it. What happened next.",
};

// Company logo placeholder: swap `initials` for a real logo by replacing the
// <span> inside CompanyLogo with an <img src={`/logos/${company}.svg`} /> tag.
const CASE_STUDIES = [
  {
    initials: "SC",
    logoSrc: "/logos/socure.png",
    company: "Socure",
    period: "2023 – 2025",
    vertical: "Identity Verification, Fintech",
    headline:
      "Turned a $1.9M budget into $49M in pipeline, and redefined how the GTM team operates.",
    context:
      "Socure is the market-leading identity verification and fraud prevention platform — a late-stage, high-growth company processing hundreds of millions of identity decisions annually for the largest banks, fintechs, and government agencies in the US. When I joined, the demand gen motion was solid in core segments but hadn't yet cracked newer enterprise verticals, and the team was running manual, high-effort ABM plays that weren't scaling.",
    approach: [
      "Rebuilt the ABM program around intent signals and executive-level account mapping, unlocking $5M in net-new pipeline from accounts that had been dormant",
      "Built AI-driven agents and workflows for targeting, content, and sales enablement, cutting GTM overhead by 50% and giving reps sharper, faster tools",
      "Launched vertical-specific ABM programs with product marketing, moving from broad campaigns to precise, segment-driven plays",
    ],
    metrics: [
      { value: "$49M", label: "Marketing-Sourced Pipeline" },
      { value: "$18M", label: "Closed Revenue (2025, +50% YoY)" },
      { value: "90%", label: "YoY Growth in Emerging Verticals" },
    ],
  },
  {
    initials: "SL",
    logoSrc: "/logos/sumo-logic.jpg",
    company: "Sumo Logic",
    period: "2021 – 2023",
    vertical: "Cybersecurity, Log Management",
    headline:
      "$120M in pipeline from a global demand gen rebuild, including a segment no one had touched.",
    context:
      "Sumo Logic was a post-IPO cybersecurity and observability platform with ~$200M in ARR and a global customer base spanning enterprises and mid-market. I inherited a demand gen function that was generating volume but leaving key segments, especially public sector, entirely untouched. The ask was scale and diversification.",
    approach: [
      "Launched Sumo Logic's first-ever FED and SLED ABM initiative in collaboration with field, product marketing, and partner teams, a net-new motion built from zero",
      "Redesigned ABX programs for Tier 1 accounts with more personalization and tighter SDR alignment, winning a premier $2.7M ARR deal",
      "Identified and implemented MarTech improvements that automated weak-performing nurtures and saved $390K in SDR working hours, freeing the team to focus on high-intent accounts",
    ],
    metrics: [
      { value: "$120M", label: "Pipeline Generated" },
      { value: "$15.6M", label: "Marketing-Sourced Revenue" },
      { value: "625%", label: "YoY Increase in Key Segment Opps" },
    ],
  },
  {
    initials: "CA",
    logoSrc: "/logos/cariina.jpg",
    company: "Cariina",
    period: "2025 – 2026",
    vertical: "EdTech, SaaS",
    headline:
      "Built an entire marketing engine (team, stack, category, and pipeline) on $21K a month.",
    context:
      "Cariina was a pre-Series A EdTech startup with no marketing function, no brand infrastructure, and no defined category. I was the first marketing hire. Beyond demand gen, I was deeply involved in modernizing the company's sales and marketing infrastructure — standing up reporting, defining KPIs, and building the operational foundation that made growth measurable. The mandate: build everything, prove marketing can drive revenue, and do it lean.",
    approach: [
      "Built and led a 12-person marketing and BDR team from scratch, defining KPIs, pipeline targets, and the sales alignment process that ultimately influenced 92% of company revenue",
      "Defined the product category from the ground up, developing messaging, positioning, and 50+ GTM assets while simultaneously launching a digital acquisition engine that drove 38x inbound growth",
      "Ran field marketing across 20+ events and scaled Google PPC from zero to a core channel at $110 CPL, delivering $76 in pipeline per $1 spent",
    ],
    metrics: [
      { value: "$9.66M", label: "Net-New Pipeline Generated" },
      { value: "$76", label: "Pipeline Per $1 Spent" },
      { value: "498%", label: "Average Event ROI" },
    ],
  },
];

const EARLIER_CAREER = [
  {
    initials: "PT",
    logoSrc: "/logos/putnam.jpg",
    company: "Putnam",
    period: "2019 – 2021",
    vertical: "Life Science Management Consulting",
    summary:
      "Putnam is a boutique life science management consulting firm advising biopharma and medtech leaders on strategy, commercial, and market access. Launched the firm's first inbound marketing program, generating $8M in sourced revenue through content, SEO, and PPC. Grew web leads 66% in year one and 145% in year two. Also spearheaded a rebrand initiative across Putnam and its sister portfolio companies under Ashfield Advisory, aligning brand architecture and visual identity across the group.",
    tags: ["Inbound Marketing", "SEO and PPC", "$8M Sourced Revenue", "Rebrand and Brand Architecture"],
  },
  {
    initials: "WL",
    logoSrc: "/logos/williamson.png",
    company: "Williamson",
    period: "2015 – 2019",
    vertical: "Manufacturing Tech and SaaS",
    summary:
      "Williamson is a manufacturing technology and SaaS company building industrial sensing and process control solutions for large-scale manufacturers. First marketing hire. Built the entire function from zero and grew company revenue from $1.6M to $12M over four years — an 8x increase — through foundational inbound, ABM, and digital programs. Defined the customer acquisition framework still used across sales and product today.",
    tags: ["0 to 1 Build", "8x Revenue Growth", "ABM and Inbound"],
  },
];

const WHATS_NEXT = {
  label: "What I'm Looking For",
  headline: "The next chapter: early-stage SaaS in cybersecurity or fintech.",
  body: [
    "I don't want to be the tenth marketing leader at a company that already has it figured out. I want to be the person who helps figure it out. I've done it five times and it's the only context where I feel like I'm using everything I've got.",
    "Specifically: Head of Marketing, Head of Demand Gen, or Director-level at a Series A to C company in cybersecurity, fintech, or adjacent regulated SaaS. Give me pipeline ownership, a team to build, and a number to hit.",
  ],
  criteria: [
    { label: "Stage", value: "Series A to C (post-PMF, pre-scale)" },
    { label: "Vertical", value: "Cybersecurity, fintech, identity, or adjacent regulated SaaS" },
    { label: "Role", value: "Head of Marketing, Head of Demand Gen, or Director of Marketing" },
    { label: "What I own", value: "Full revenue marketing: demand gen, ABM, brand, pipeline, team" },
    { label: "Location", value: "Boston, MA, open to remote-first or hybrid" },
    { label: "Not a fit", value: "Large orgs where marketing is a support function, not a growth driver" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────

function CompanyLogo({ initials, company, logoSrc }: { initials: string; company: string; logoSrc?: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 overflow-hidden">
        {logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoSrc} alt={company} className="w-full h-full object-contain p-1.5" />
        ) : (
          <span className="text-sm font-bold text-zinc-800 tracking-tight">{initials}</span>
        )}
      </div>
      <span className="text-sm font-semibold text-zinc-200">{company}</span>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-4">
            {PAGE_HEADER.label}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-zinc-50 max-w-2xl mb-5 leading-tight">
            {PAGE_HEADER.headline}
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
            {PAGE_HEADER.subheadline}
          </p>
        </div>
      </section>

      {/* ── Featured Case Studies ── */}
      <section className="bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-10">
            Featured Work
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {CASE_STUDIES.map((cs, i) => (
              <div
                key={cs.company}
                className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-7 flex flex-col gap-6 hover:border-zinc-700 transition-colors ${
                  i === 2 ? "md:col-span-2" : ""
                }`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <CompanyLogo initials={cs.initials} company={cs.company} logoSrc={cs.logoSrc} />
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="default">{cs.vertical}</Badge>
                    <span className="text-xs text-zinc-600">{cs.period}</span>
                  </div>
                </div>

                {/* Impact headline */}
                <h2
                  className={`font-semibold text-zinc-50 leading-snug tracking-tight ${
                    i === 2 ? "text-xl md:text-2xl md:max-w-3xl" : "text-lg"
                  }`}
                >
                  {cs.headline}
                </h2>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="bg-zinc-950/60 rounded-xl p-4 border border-zinc-800">
                      <p className="text-2xl font-semibold tracking-tighter text-zinc-50 mb-1">
                        {m.value}
                      </p>
                      <p className="text-xs text-zinc-500 leading-snug">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-zinc-800" />

                {/* Context + approach */}
                <div className={`grid gap-6 ${i === 2 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                  <div>
                    <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-2">
                      Context
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed">{cs.context}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-3">
                      How I approached it
                    </p>
                    <ul className="space-y-3">
                      {cs.approach.map((a, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Earlier Career ── */}
      <section className="bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-8">
            Earlier Career
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {EARLIER_CAREER.map((ec) => (
              <div
                key={ec.company}
                className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-6 flex flex-col gap-4 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <CompanyLogo initials={ec.initials} company={ec.company} logoSrc={ec.logoSrc} />
                  <span className="text-xs text-zinc-600">{ec.period}</span>
                </div>
                <Badge variant="default" className="self-start">{ec.vertical}</Badge>
                <p className="text-sm text-zinc-400 leading-relaxed">{ec.summary}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {ec.tags.map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Next ── */}
      <section className="bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-5">
            {WHATS_NEXT.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-50 mb-6 max-w-2xl leading-tight">
            {WHATS_NEXT.headline}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              {WHATS_NEXT.body.map((para, i) => (
                <p key={i} className="text-base text-zinc-400 leading-relaxed">{para}</p>
              ))}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <Link href="/about#contact">
                  <Button variant="primary" size="lg" className="group">
                    Let&apos;s talk
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Link>
                <a href="https://www.linkedin.com/in/kam-olaogun-a4a17465/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="ghost">
                    LinkedIn <ArrowUpRight size={14} />
                  </Button>
                </a>
              </div>
            </div>
            <div className="divide-y divide-zinc-800">
              {WHATS_NEXT.criteria.map((c) => (
                <div key={c.label} className="py-4 flex gap-4">
                  <span className="text-xs font-medium text-zinc-600 w-24 shrink-0 pt-0.5 uppercase tracking-wide">
                    {c.label}
                  </span>
                  <span className="text-sm text-zinc-300 leading-relaxed">{c.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
