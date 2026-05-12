"use client";

import { useState } from "react";
import { ExternalLink, Pause, Play } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── EDITABLE CONTENT ────────────────────────────────────────────────────────
//
// HOW TO CONNECT YOUR SPOTIFY PLAYLIST:
//  1. Open Spotify → go to your playlist
//  2. Click the three dots → Share → Copy link to playlist
//     It'll look like: https://open.spotify.com/playlist/37i9dQZF1DX...
//  3. Paste the full URL as PLAYLIST_URL below
//  4. Copy just the ID (the part after /playlist/) into SPOTIFY_PLAYLIST_ID
//     When set, an embedded Spotify player will appear below the vinyl.
//
const PLAYLIST_URL = "https://open.spotify.com/playlist/1Uv0AQTDcf2H5sGv6BA23d";
const SPOTIFY_PLAYLIST_ID = "1Uv0AQTDcf2H5sGv6BA23d";

const TRACKS = [
  { id: 1, title: "Tej",                           artist: "The So Ons"                          },
  { id: 2, title: "I Adore You (feat. Daecolm)",   artist: "HUGEL, Topic, Arash, Daecolm"        },
  { id: 3, title: "Piece",                          artist: "Too Many Zooz"                       },
  { id: 4, title: "Lychee Martini",                 artist: "Lithe"                               },
  { id: 5, title: "Spacelab (2009 Remaster)",       artist: "Kraftwerk"                           },
  { id: 6, title: "What You Won't Do for Love",     artist: "Bobby Caldwell"                      },
  { id: 7, title: "OMOIDE",                         artist: "Suzuki Tsunekichi"                   },
];
// ─────────────────────────────────────────────────────────────────────────────

function VinylDisc({ playing }: { playing: boolean }) {
  return (
    <div className="relative w-full aspect-square select-none">
      {/* Shadow beneath record */}
      <div className="absolute inset-0 rounded-full bg-black/60 blur-2xl scale-90 translate-y-4 pointer-events-none" />

      {/* Spinning record */}
      <div
        className="relative w-full h-full rounded-full"
        style={{
          animation: "spin 18s linear infinite",
          animationPlayState: playing ? "running" : "paused",
          willChange: "transform",
          transition: "animation-play-state 0.3s",
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id="vinyl-body" cx="50%" cy="50%" r="50%">
              <stop offset="0%"   stopColor="#1c1c1c" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </radialGradient>
            <radialGradient id="vinyl-sheen" cx="38%" cy="30%" r="52%">
              <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"    />
            </radialGradient>
          </defs>

          {/* Body */}
          <circle cx="100" cy="100" r="99" fill="url(#vinyl-body)" />
          <circle cx="100" cy="100" r="99" fill="url(#vinyl-sheen)" />

          {/* Minimal grooves — just four rings */}
          <circle cx="100" cy="100" r="90" fill="none" stroke="#222" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="76" fill="none" stroke="#1e1e1e" strokeWidth="0.7" />
          <circle cx="100" cy="100" r="62" fill="none" stroke="#1e1e1e" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="48" fill="none" stroke="#1e1e1e" strokeWidth="0.5" />

          {/* Label — clean, no text */}
          <circle cx="100" cy="100" r="28" fill="#18181b" />
          <circle cx="100" cy="100" r="28" fill="none" stroke="#3f3f46" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="22" fill="none" stroke="#2d2d2d" strokeWidth="0.4" />

          {/* Center hole */}
          <circle cx="100" cy="100" r="4.5" fill="#080808" />
          <circle cx="100" cy="100" r="2"   fill="#1c1c1c" />

          {/* Outer rim */}
          <circle cx="100" cy="100" r="99" fill="none" stroke="#1a1a1a" strokeWidth="1" />
        </svg>
      </div>

      {/* Tonearm — pivots over the record */}
      <div
        className="absolute top-[6%] right-[4%] origin-[14px_14px] pointer-events-none"
        style={{
          transform: playing ? "rotate(-22deg)" : "rotate(-6deg)",
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <svg width="52" height="88" viewBox="0 0 52 88">
          {/* Pivot circle */}
          <circle cx="14" cy="14" r="7" fill="#3f3f46" />
          <circle cx="14" cy="14" r="4" fill="#27272a" />
          <circle cx="14" cy="14" r="1.5" fill="#52525b" />
          {/* Arm */}
          <line x1="14" y1="18" x2="8" y2="80" stroke="#52525b" strokeWidth="1.5" strokeLinecap="round" />
          {/* Needle head */}
          <circle cx="8" cy="80" r="2.5" fill="#71717a" />
          <circle cx="8" cy="80" r="1"   fill="#a1a1aa" />
        </svg>
      </div>
    </div>
  );
}

function EqBars({ active }: { active: boolean }) {
  return (
    <div className={cn("flex gap-[2px] items-end h-3", !active && "opacity-0")}>
      {[60, 100, 40, 80, 55].map((h, i) => (
        <div
          key={i}
          className="w-[2px] bg-green-400 rounded-full"
          style={{
            height: `${h}%`,
            animation: active ? `bounce 0.${6 + i}s ease-in-out ${i * 0.1}s infinite alternate` : "none",
          }}
        />
      ))}
    </div>
  );
}

export function VinylPlayer() {
  const [activeTrack, setActiveTrack] = useState(0);
  const [playing, setPlaying] = useState(true);

  const current = TRACKS[activeTrack];

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-[200px_1fr]">

          {/* Left: vinyl */}
          <div className="p-5 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-zinc-800">
            <div
              className="cursor-pointer"
              onClick={() => setPlaying(!playing)}
              title={playing ? "Pause" : "Play"}
            >
              <VinylDisc playing={playing} />
            </div>

            {/* Play/pause + now playing */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <div className={cn(
                  "w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300",
                  playing ? "bg-green-400" : "bg-zinc-600"
                )} />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-zinc-200 truncate">{current.title}</p>
                  <p className="text-[10px] text-zinc-600 truncate">{current.artist}</p>
                </div>
              </div>
              <button
                onClick={() => setPlaying(!playing)}
                className="shrink-0 w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
              >
                {playing
                  ? <Pause size={11} className="text-zinc-300" />
                  : <Play  size={11} className="text-zinc-300 ml-0.5" />
                }
              </button>
            </div>
          </div>

          {/* Right: track list */}
          <div>
            <div className="px-4 py-2.5 border-b border-zinc-800 flex items-center justify-between">
              <span className="text-[10px] font-medium text-zinc-600 uppercase tracking-widest">
                Tracklist
              </span>
              <a
                href={PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[10px] text-zinc-600 hover:text-green-400 transition-colors"
              >
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify <ExternalLink size={8} />
              </a>
            </div>

            <div className="overflow-y-auto max-h-[248px] divide-y divide-zinc-800/40">
              {TRACKS.map((track, i) => (
                <button
                  key={track.id}
                  onClick={() => { setActiveTrack(i); setPlaying(true); }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors group",
                    i === activeTrack ? "bg-zinc-800/50" : "hover:bg-zinc-800/25"
                  )}
                >
                  {/* Number / EQ indicator */}
                  <div className="w-5 shrink-0 flex items-center justify-center">
                    {i === activeTrack
                      ? <EqBars active={playing} />
                      : <span className="text-[10px] text-zinc-600 group-hover:text-zinc-400 tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                    }
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className={cn(
                      "text-xs font-medium truncate transition-colors",
                      i === activeTrack ? "text-zinc-100" : "text-zinc-500 group-hover:text-zinc-300"
                    )}>
                      {track.title}
                    </p>
                    <p className="text-[10px] text-zinc-700 truncate mt-0.5">{track.artist}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spotify embed — click play to stream the playlist */}
      <div className="rounded-xl overflow-hidden border border-zinc-800">
        <iframe
          src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="block"
        />
      </div>
    </div>
  );
}
