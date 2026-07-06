import type { Metadata } from "next";
import Link from "next/link";
import { CausticOverlay } from "@/app/components/CausticOverlay";

export const metadata: Metadata = {
  title: "Download Video Debriefs",
  description:
    "Download Video Debriefs for macOS — an app for GUE dive instructors to run video debriefs from GoPro footage.",
};

const version = "0.4";
const dmgFilename = `Video Debriefs v${version}.dmg`;
const dmgUrl = `/video-debriefs/downloads/${encodeURIComponent(dmgFilename)}`;

export default function DownloadsPage() {
  return (
    <main
      className="min-h-dvh text-white"
      style={{
        background:
          "linear-gradient(to bottom, #6ecad8 0%, #1a5c7a 18%, #0a2e48 35%, #041828 55%, #020c18 75%, #010810 100%)",
      }}
    >
      <style>{`
        .btn-coral-neon:hover {
          background: linear-gradient(135deg, #ffe000 0%, #ffb300 100%) !important;
          box-shadow: 0 0 22px rgba(255,220,0,0.7), 0 0 50px rgba(255,200,0,0.35) !important;
          color: #1a0a00 !important;
        }
      `}</style>
      <CausticOverlay />
      {/* Nav */}
      <nav className="mx-auto flex w-[90%] items-center justify-between py-5">
        <Link
          href="/"
          className="text-base font-semibold uppercase tracking-[0.22em] text-white/60 transition hover:text-white"
        >
          2Prutsers
        </Link>
        <Link
          href="/video-debriefs"
          className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50 transition hover:text-white"
        >
          ← Video Debriefs
        </Link>
      </nav>

      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#7dd8e8]">
          macOS · v{version}
        </p>
        <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl">
          Download
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/65">
          Video Debriefs requires macOS 14 Sonoma or later.
        </p>

        <div className="mt-10">
          <a
            href={dmgUrl}
            download
            className="inline-flex h-14 items-center gap-3 rounded-full bg-[#ff6fcf] px-8 text-sm font-bold uppercase tracking-[0.16em] text-[#130c24] transition hover:bg-[#ff9dde]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 shrink-0"
              aria-hidden="true"
            >
              <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
              <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
            </svg>
            Download {dmgFilename}
          </a>
          <p className="mt-3 text-sm text-white/35">3.8 MB · macOS 14+</p>
        </div>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
          Or install with Homebrew
        </p>

        <div className="mt-3 rounded-xl border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-sm">
          <code className="font-mono text-base text-[#7dd8e8]">
            brew install --cask 2Prutsers/tap/video-debriefs
          </code>
          <p className="mt-3 text-sm text-white/40">
            Homebrew handles download, verification, and future upgrades via
            <br />
            <code className="text-white/60">brew upgrade --cask video-debriefs</code>
          </p>
        </div>

        <div className="mt-16 border-t border-white/10 pt-14">
          <h2 className="text-2xl font-black text-white">How to install</h2>
          <ol className="mt-6 space-y-6">
            <li className="flex gap-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff6fcf] text-sm font-black text-[#130c24]">
                1
              </span>
              <p className="leading-7 text-white/65">
                Double-click the downloaded{" "}
                <code className="rounded-md border border-white/10 bg-black/20 px-1.5 py-0.5 font-mono text-sm text-[#7dd8e8]">
                  {dmgFilename}
                </code>{" "}
                to mount it.
              </p>
            </li>
            <li className="flex gap-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff6fcf] text-sm font-black text-[#130c24]">
                2
              </span>
              <p className="leading-7 text-white/65">
                Drag <strong className="text-white">Video Debriefs.app</strong> into your{" "}
                <strong className="text-white">Applications</strong> folder.
              </p>
            </li>
            <li className="flex gap-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff6fcf] text-sm font-black text-[#130c24]">
                3
              </span>
              <p className="leading-7 text-white/65">
                Open the app. macOS will verify it and launch.
              </p>
            </li>
          </ol>
        </div>

        <div className="mt-16 border-t border-white/10 pt-14">
          <h2 className="text-2xl font-black text-white">Updates</h2>
          <p className="mt-4 leading-7 text-white/65">
            The app checks for updates automatically. You can also check manually
            at any time from <strong className="text-white">Video Debriefs → Check for Updates…</strong> in
            the menu bar. The current version is{" "}
            <strong className="text-white">v{version}</strong>.
          </p>
        </div>

        <div className="mt-16 border-t border-white/10 pt-14">
          <h2 className="text-2xl font-black text-white">
            Try it with sample footage
          </h2>
          <p className="mt-4 leading-7 text-white/65">
            No GoPro handy? Download the sample footage disk image. Double-click
            <code className="rounded-md border border-white/10 bg-black/20 px-1.5 py-0.5 font-mono text-sm text-[#7dd8e8]">Video Debriefs Samples.dmg</code> to mount it, and Video Debriefs will detect it as a GoPro SD
            card automatically — just open Import and the clips will be ready to
            bring in, and try reviewing, trimming, marking, and presenting them.
          </p>
          <div className="mt-6">
            <a
              href="/video-debriefs/downloads/Video%20Debriefs%20Samples.dmg"
              download
              className="btn-coral-neon inline-flex h-12 items-center gap-3 rounded-full px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #ff3f7a 0%, #ff6b3d 100%)",
                boxShadow: "0 0 18px rgba(255,80,80,0.55), 0 0 40px rgba(255,60,100,0.25)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
              Download Sample Footage
            </a>
            <p className="mt-3 text-sm text-white/35">8.3 MB · 8 sample clips · includes README</p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-14 pb-16">
          <p className="text-sm leading-7 text-white/40">
            Questions or issues?{" "}
            <a
              href="mailto:video-debriefs@2prutsers.com"
              className="text-white/60 underline transition hover:text-white"
            >
              video-debriefs@2prutsers.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
