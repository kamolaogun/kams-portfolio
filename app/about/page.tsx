"use client";

import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

// ─── EDITABLE CONTENT ────────────────────────────────────────────────────────

const PERSONAL = {
  photo: "/photo.jpg",
  intro:
    "Outside of work, you'll usually find me in the kitchen experimenting with a new recipe, out on the golf course, or planning the next trip somewhere near or far. I'm a firm believer that understanding history and human nature makes you a better marketer, so I read a lot. I recently got a 3.5-month-old aussiedoodle named Iggy who loves frisbee more than anything. Getting married at the end of May, and I love hosting, including an annual Holiday Tiki Party that somehow gets bigger every year.",
  interests: [
    { emoji: "🍳", label: "Cooking" },
    { emoji: "⛳", label: "Golf" },
    { emoji: "✈️", label: "Travel" },
    { emoji: "🐾", label: "Iggy" },
    { emoji: "📚", label: "Reading" },
    { emoji: "🚴", label: "Cycling" },
    { emoji: "🏝️", label: "Hosting" },
    { emoji: "🏛️", label: "History" },
  ],
};

// To update: change title, author, coverUrl, and synopsis below.
// coverUrl tip: https://covers.openlibrary.org/b/isbn/<ISBN>-M.jpg works for most books.
const CURRENTLY_READING = {
  title: "Chip War",
  author: "Chris Miller",
  coverUrl: "https://covers.openlibrary.org/b/isbn/9781982172008-M.jpg",
  synopsis:
    "The definitive account of how the microchip became the world's most critical resource — and the geopolitical battle to control it. A gripping lens on tech, power, and the hidden architecture of the modern economy.",
};

const ABOUT = {
  label: "About",
  headline: ["Marketing leader.", "Revenue obsessive.", "Category builder."],
  bio: [
    "Most of my career has happened at companies mid-build: the category wasn't quite defined, the pipeline wasn't adding up, or the marketing function didn't exist yet. I kept ending up in those situations. Eventually I stopped wondering why and just got good at them.",
    "My best results have come from lean budgets and high bars. At Cariina I generated $76 in pipeline for every dollar spent. At Socure I built AI workflows that made a small team operate like a much bigger one. I'm not the marketer who needs a large agency retainer and a maxed-out stack to do good work. I'm the one who figures out how to do more with what's there.",
    "On the AI front: I'm genuinely deep on it, not in the 'we're exploring tools' sense but in the built-production-workflows-that-moved-a-real-number sense. At Socure I deployed AI agents for targeting, content, and sales enablement that cut GTM overhead by 50%. I think about AI the way I think about any channel: does it actually help close deals?",
    "Boston. Colby College. Getting married at the end of May. And genuinely looking for the next hard problem.",
  ],
  strengths: [
    "Demand Generation and ABM",
    "GTM Strategy",
    "Category Creation",
    "AI Workflow Automation",
    "Pipeline Attribution",
    "Team Building",
    "Sales Alignment",
    "Field and Event Marketing",
    "Performance Marketing",
    "Brand and Narrative",
    "MarTech and RevOps",
    "Product Marketing",
  ],
  contact: {
    email: "kam.olaogun@gmail.com",
    linkedin: "https://www.linkedin.com/in/kam-olaogun-a4a17465/",
    location: "Boston, MA",
    availability: "Open to Director and CMO-track roles",
  },
};

// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(ABOUT.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      {/* ── About ── */}
      <section className="border-b border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-4">
            {ABOUT.label}
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-zinc-50 mb-12 leading-[1.05]">
            {ABOUT.headline.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          <div className="grid md:grid-cols-[1fr_300px] gap-16">
            {/* Bio */}
            <div className="space-y-5">
              {ABOUT.bio.map((para, i) => (
                <p key={i} className="text-base md:text-lg text-zinc-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-3">
                  Core Strengths
                </p>
                <div className="flex flex-wrap gap-2">
                  {ABOUT.strengths.map((s) => (
                    <Badge key={s} variant="outline">{s}</Badge>
                  ))}
                </div>
              </div>

              <div className="divide-y divide-zinc-800">
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-xs text-zinc-600 uppercase tracking-wide font-medium">Location</span>
                  <span className="text-sm text-zinc-300">{ABOUT.contact.location}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-xs text-zinc-600 uppercase tracking-wide font-medium">Status</span>
                  <span className="text-sm text-zinc-300 text-right max-w-[180px]">{ABOUT.contact.availability}</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-xs text-zinc-600 uppercase tracking-wide font-medium">Focus</span>
                  <span className="text-sm text-zinc-300">Cybersecurity, Fintech</span>
                </div>
                <div className="py-3 flex justify-between gap-4">
                  <span className="text-xs text-zinc-600 uppercase tracking-wide font-medium">Education</span>
                  <span className="text-sm text-zinc-300 text-right">Colby College, BA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Beyond the Work ── */}
      <section className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-10">
            Beyond the Work
          </p>

          {/* Top row: Photo + Intro/Interests */}
          <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start mb-14">
            {/* Photo */}
            <div className="w-full aspect-square rounded-2xl bg-zinc-800 border border-zinc-700 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PERSONAL.photo}
                alt="Kam Olaogun and Iggy"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Intro + Interests */}
            <div className="flex flex-col gap-8">
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
                {PERSONAL.intro}
              </p>
              <div>
                <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-3">
                  Outside the Office
                </p>
                <div className="flex flex-wrap gap-2">
                  {PERSONAL.interests.map((interest) => (
                    <span
                      key={interest.label}
                      className="inline-flex items-center gap-1.5 text-sm text-zinc-300 bg-zinc-800 border border-zinc-700 rounded-full px-3.5 py-1.5"
                    >
                      <span>{interest.emoji}</span>
                      {interest.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row: Reading + Vinyl — full page width */}
          <div className="grid md:grid-cols-2 gap-6 items-start">

            {/* Currently Reading */}
            <div>
              <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-3">
                Currently Reading
              </p>
              <div className="bg-zinc-800/50 border border-zinc-700/60 rounded-xl p-5 hover:border-zinc-600 transition-colors">
                <div className="flex gap-6 items-start">
                  {/* Large book cover */}
                  <div className="shrink-0 w-32 rounded-lg overflow-hidden bg-zinc-700 ring-1 ring-zinc-600 shadow-xl"
                       style={{ aspectRatio: "2/3" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={CURRENTLY_READING.coverUrl}
                      alt={`${CURRENTLY_READING.title} cover`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <p className="text-lg font-semibold text-zinc-100 leading-tight">{CURRENTLY_READING.title}</p>
                    <p className="text-sm text-zinc-500">{CURRENTLY_READING.author}</p>
                    <p className="text-sm text-zinc-400 leading-relaxed mt-2">{CURRENTLY_READING.synopsis}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Rotation */}
            <div>
              <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-3">
                Current Rotation
              </p>
              <div className="rounded-xl overflow-hidden border border-zinc-800">
                <iframe
                  src="https://open.spotify.com/embed/playlist/1Uv0AQTDcf2H5sGv6BA23d?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="block"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── How This Was Built ── */}
      <section className="bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-5">
            About This Site
          </p>
          <div className="grid md:grid-cols-[1fr_280px] gap-10 md:gap-16">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 mb-4">
                Built with AI. On purpose.
              </h2>
              <p className="text-base text-zinc-400 leading-relaxed mb-4">
                I built this portfolio from scratch using Claude Code, Anthropic&apos;s AI-powered coding environment — no templates, no page builders, no agency. Every component, design decision, and line of copy was created collaboratively in a single session.
              </p>
              <p className="text-base text-zinc-400 leading-relaxed">
                I talk a lot about AI as a force multiplier. This site is a live example of that. A full-stack portfolio that would have taken weeks to spec, design, and build was done in hours — without compromising on craft. That&apos;s the leverage I try to bring to every marketing function I build.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-4">
                The Stack
              </p>
              <ul className="space-y-2.5">
                {[
                  { name: "Claude Code",    desc: "AI coding environment (Anthropic)" },
                  { name: "Next.js 14",     desc: "React framework, App Router"       },
                  { name: "Tailwind CSS",   desc: "Utility-first styling"             },
                  { name: "TypeScript",     desc: "Type safety throughout"            },
                  { name: "Lucide React",   desc: "Icon library"                      },
                  { name: "Google Fonts",   desc: "Inter + Caveat typefaces"          },
                  { name: "Vercel",         desc: "Deployment and hosting"            },
                ].map((tool) => (
                  <li key={tool.name} className="flex items-start gap-3">
                    <span className="mt-[3px] w-1 h-1 rounded-full bg-zinc-600 shrink-0" />
                    <span className="text-sm text-zinc-300">
                      {tool.name}{" "}
                      <span className="text-zinc-600">{tool.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <p className="text-sm font-medium text-zinc-600 uppercase tracking-widest mb-5">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-zinc-50 mb-4 max-w-xl leading-tight">
            My inbox is open. Use it.
          </h2>
          <p className="text-base text-zinc-400 mb-12 max-w-lg leading-relaxed">
            Potential hire, advisory work, or you just want to talk through a GTM problem.
            I respond to everything that seems like a real conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button
              onClick={copyEmail}
              className="group flex items-center gap-3 bg-zinc-800/60 border border-zinc-700 rounded-xl px-5 py-4 hover:bg-zinc-800 hover:border-zinc-600 transition-all text-left"
            >
              <Mail size={18} className="text-zinc-500 shrink-0" />
              <div>
                <p className="text-xs text-zinc-600 mb-0.5">Email</p>
                <p className="text-sm font-medium text-zinc-200">
                  {copied ? "Copied to clipboard!" : ABOUT.contact.email}
                </p>
              </div>
            </button>

            <a
              href={ABOUT.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-zinc-800/60 border border-zinc-700 rounded-xl px-5 py-4 hover:bg-zinc-800 hover:border-zinc-600 transition-all"
            >
              <Linkedin size={18} className="text-zinc-500 shrink-0" />
              <div>
                <p className="text-xs text-zinc-600 mb-0.5">LinkedIn</p>
                <p className="text-sm font-medium text-zinc-200 flex items-center gap-1">
                  /in/kamolaogun
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </div>
            </a>
          </div>

          <div className="border-t border-zinc-800 pt-12">
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Hiring?",
                  body: "Open to Director and CMO-track roles at Series A to C SaaS companies in cybersecurity or fintech. I want to own pipeline and build the team.",
                },
                {
                  title: "Advisory?",
                  body: "I take on a small number of fractional and advisory engagements per year for early-stage teams that need GTM strategy and demand gen expertise.",
                },
                {
                  title: "Just connecting?",
                  body: "Always happy to talk B2B GTM, demand generation, ABM, or the state of marketing in cybersecurity and fintech. Reach out anytime.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm font-semibold text-zinc-200 mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
