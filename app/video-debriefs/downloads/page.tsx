import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Video Debriefs",
  description:
    "Download Video Debriefs for macOS — a native app for GUE dive instructors to run video debriefs from GoPro footage.",
};

const version = "0.3";
const dmgFilename = `Video Debriefs v${version}.dmg`;
const dmgUrl = `/video-debriefs/downloads/${encodeURIComponent(dmgFilename)}`;

export default function DownloadsPage() {
  return (
    <main className="min-h-dvh bg-[#07111f] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-24 lg:px-16">
        <Link
          href="/video-debriefs"
          className="mb-12 inline-flex text-sm font-semibold uppercase tracking-[0.22em] text-[#9fb4d1] transition hover:text-white"
        >
          ← Video Debriefs
        </Link>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#74d3ff]">
          macOS · v{version}
        </p>
        <h1 className="text-5xl font-black leading-[0.95] tracking-normal text-[#f6f8ff] sm:text-6xl">
          Download
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#c3cede]">
          Video Debriefs requires macOS 14 Sonoma or later.
        </p>

        <div className="mt-10">
          <a
            href={dmgUrl}
            download
            className="inline-flex h-14 items-center gap-3 bg-[#ff6fcf] px-8 text-sm font-bold uppercase tracking-[0.16em] text-[#130c24] transition hover:bg-[#ff9dde]"
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
          <p className="mt-3 text-xs text-[#6b7f97]">3.8 MB · macOS 14+</p>
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#6b7f97]">
          Or install with Homebrew
        </p>

        <div className="mt-3 rounded border border-[#1c314f] bg-[#0b1728] px-5 py-4">
          <code className="font-mono text-sm text-[#74d3ff]">
            brew install --cask 2Prutsers/tap/video-debriefs
          </code>
          <p className="mt-3 text-xs text-[#6b7f97]">
            Homebrew handles download, verification, and future upgrades via{" "}
            <code className="text-[#9fb4d1]">brew upgrade --cask video-debriefs</code>.
          </p>
        </div>

        <div className="mt-16 border-t border-[#1c314f] pt-14">
          <h2 className="text-2xl font-black text-[#f6f8ff]">How to install</h2>
          <ol className="mt-6 space-y-6">
            <li className="flex gap-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#ff6fcf] text-sm font-black text-[#130c24]">
                1
              </span>
              <p className="leading-7 text-[#b7c4d7]">
                Double-click the downloaded{" "}
                <code className="rounded bg-[#0b1728] px-1.5 py-0.5 font-mono text-sm text-[#74d3ff]">
                  {dmgFilename}
                </code>{" "}
                to mount it.
              </p>
            </li>
            <li className="flex gap-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#ff6fcf] text-sm font-black text-[#130c24]">
                2
              </span>
              <p className="leading-7 text-[#b7c4d7]">
                Drag <strong className="text-white">Video Debriefs.app</strong> into your{" "}
                <strong className="text-white">Applications</strong> folder.
              </p>
            </li>
            <li className="flex gap-5">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#ff6fcf] text-sm font-black text-[#130c24]">
                3
              </span>
              <p className="leading-7 text-[#b7c4d7]">
                Open the app. macOS will verify it and launch.
              </p>
            </li>
          </ol>
        </div>

        <div className="mt-16 border-t border-[#1c314f] pt-14">
          <h2 className="text-2xl font-black text-[#f6f8ff]">Updates</h2>
          <p className="mt-4 leading-7 text-[#b7c4d7]">
            New releases are published here. The current version is{" "}
            <strong className="text-white">v{version}</strong>. When a new
            version is available, re-download from this page and drag the new
            app into Applications, replacing the old one.
          </p>
          <p className="mt-4 font-mono text-xs text-[#6b7f97]">
            Update metadata:{" "}
            <a
              href="/video-debriefs/downloads/latest.json"
              className="underline transition hover:text-[#9fb4d1]"
            >
              /video-debriefs/downloads/latest.json
            </a>
          </p>
        </div>

        <div className="mt-16 border-t border-[#1c314f] pt-14">
          <h2 className="text-2xl font-black text-[#f6f8ff]">
            Try it with sample footage
          </h2>
          <p className="mt-4 leading-7 text-[#b7c4d7]">
            No GoPro handy? Download the sample footage disk image. Mount it and
            Video Debriefs will detect it as a GoPro SD card automatically —
            just open Import and the clips will be ready to bring in.
          </p>
          <div className="mt-6">
            <a
              href="/video-debriefs/downloads/Video%20Debriefs%20Samples.dmg"
              download
              className="inline-flex h-12 items-center gap-3 border border-[#375273] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[#d9e7ff] transition hover:border-[#74d3ff] hover:text-white"
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
            <p className="mt-3 text-xs text-[#6b7f97]">8.3 MB · 8 sample clips · includes README</p>
          </div>
        </div>

        <div className="mt-16 border-t border-[#1c314f] pt-14">
          <p className="text-sm leading-7 text-[#6b7f97]">
            Questions or issues?{" "}
            <a
              href="mailto:video-debriefs@2prutsers.com"
              className="text-[#9fb4d1] underline transition hover:text-white"
            >
              video-debriefs@2prutsers.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
