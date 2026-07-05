import Image from "next/image";
import Link from "next/link";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { CausticOverlay } from "@/app/components/CausticOverlay";

const workflow = [
  {
    step: "01",
    title: "Import from the dive day",
    body: "Plug in your GoPro while the app is open and it detects the SD card automatically. Pick the recording date, bring in the footage, then eject the card — all without leaving the app or touching Finder. Multi-chapter GoPro files are grouped into one clip.",
    image: "/video-debriefs/import.png",
    alt: "Video Debriefs import screen showing GoPro footage import options",
  },
  {
    step: "02",
    title: "Review, trim, and annotate",
    body: "Open each clip, set in and out points, add timed teaching notes, mark student names and titles, reorder clips if needed, and decide what belongs in the presentation.",
    image: "/video-debriefs/review.png",
    alt: "Video Debriefs review screen showing clip playback, trimming, and notes",
  },
  {
    step: "03",
    title: "Present with a clicker",
    body: "Run a fullscreen debrief in front of your students with automatic pauses before each clip. Students can control playback from the keyboard while you stand back and navigate with a Bluetooth clicker. Title cards, marker overlays, audio fades, and AirPlay output included.",
    image: "/video-debriefs/present.png",
    alt: "Video Debriefs presentation screen showing fullscreen debrief playback",
  },
];

const controls = [
  {
    icon: "/video-debriefs/10.arrow.trianglehead.counterclockwise.png",
    iconClassName: "h-9 w-9",
    keys: ["⇧", "←"],
    title: "Seek back",
  },
  {
    icon: "/video-debriefs/10.arrow.trianglehead.clockwise.png",
    iconClassName: "h-9 w-9",
    keys: ["⇧", "→"],
    title: "Seek forward",
  },
  {
    icon: "/video-debriefs/backward.frame.fill.png",
    iconClassName: "h-6 w-10",
    keys: ["←", "←"],
    title: "Previous marker",
  },
  {
    icon: "/video-debriefs/forward.frame.fill.png",
    iconClassName: "h-6 w-10",
    keys: ["→", "→"],
    title: "Next marker",
  },
  {
    icon: "/video-debriefs/backward.end.fill.png",
    iconClassName: "h-5 w-9",
    keys: ["↑"],
    title: "Previous clip",
  },
  {
    icon: "/video-debriefs/forward.end.fill.png",
    iconClassName: "h-5 w-9",
    keys: ["↓"],
    title: "Next clip",
  },
];

function MacBookFrame({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full" style={{ aspectRatio: "3400 / 2240" }}>
      <div
        className="absolute overflow-hidden bg-transparent"
        style={{ top: "8.80%", left: "12.30%", width: "75.36%", height: "82.40%" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          priority={priority}
        />
      </div>
      <Image
        src="/video-debriefs/macbook-silver-13.png"
        alt=""
        fill
        loading="eager"
        className="pointer-events-none select-none"
        style={{ zIndex: 10 }}
        priority={priority}
      />
    </div>
  );
}

export default function VideoDebriefsPage() {
  return (
    <main className="relative min-h-dvh text-white" style={{
      background: "linear-gradient(to bottom, #6ecad8 0%, #1a5c7a 18%, #0a2e48 35%, #041828 55%, #020c18 75%, #010810 100%)"
    }}>
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
          href="/video-debriefs/downloads"
          className="inline-flex h-10 items-center rounded-full bg-[#ff6fcf] px-5 text-sm font-bold uppercase tracking-[0.14em] text-[#130c24] transition hover:bg-[#ff9dde]"
        >
          Download
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto w-[90%] pb-8 pt-8 text-center">
        <div className="relative mb-6 flex justify-center">
          <Image
            src="/video-debriefs/app-icon.svg"
            alt="Video Debriefs"
            width={80}
            height={80}
            className="rounded-[20px] shadow-xl shadow-black/30"
            priority
          />
        </div>

        <p className="relative mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-white/60">
          macOS app for GUE instructors
        </p>

        <h1 className="relative mb-6 text-6xl font-black leading-[0.93] tracking-tight text-white sm:text-7xl lg:text-8xl">
          Video debriefs built around
          <br className="hidden sm:block" /> the teaching workflow.
        </h1>

        <p className="relative mx-auto mb-10 max-w-2xl text-lg leading-8 text-white/70">
          Import GoPro footage, prepare each student clip, add timed notes, and
          present the whole session fullscreen with Bluetooth clicker controls.
        </p>

        <div className="relative mb-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/video-debriefs/downloads"
            className="inline-flex h-13 items-center rounded-full bg-[#ff6fcf] px-8 text-base font-bold uppercase tracking-[0.14em] text-[#130c24] transition hover:bg-[#ff9dde]"
          >
            Download for macOS
          </Link>
        </div>

        <div className="relative mb-12 flex justify-center">
          <div className="rounded-xl border border-white/15 bg-black/20 px-5 py-3 text-left backdrop-blur-sm">
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-white/40">
              Or install with Homebrew
            </p>
            <code className="font-mono text-base text-[#7dd8e8]">
              brew install --cask 2Prutsers/tap/video-debriefs
            </code>
          </div>
        </div>

        {/* Hero MacBook mockup */}
        <div className="relative drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
          <MacBookFrame
            src="/video-debriefs/hero.png"
            alt="Video Debriefs in presentation mode on a MacBook"
            priority
          />
        </div>
      </section>

      {/* Feature strip */}
      <section className="border-y border-white/10 bg-black/20 py-14 backdrop-blur-sm">
        <div className="mx-auto grid w-[90%] gap-10 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Import",
              body: "SD-card detection, date-based imports, and GoPro chapter grouping.",
            },
            {
              n: "02",
              title: "Prepare",
              body: "Trims, markers, inline note editing, metadata, and clip ordering.",
            },
            {
              n: "03",
              title: "Debrief",
              body: "Fullscreen playback, clicker taps, AirPlay, and timed note overlays.",
            },
          ].map(({ n, title, body }) => (
            <div key={n} className="flex gap-5">
              <span className="text-4xl font-black leading-none text-[#ff6fcf]/50">
                {n}
              </span>
              <div>
                <h2 className="text-lg font-bold text-white">{title}</h2>
                <p className="mt-2 text-base leading-7 text-white/60">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section className="mx-auto w-[90%] py-24">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#7dd8e8]">
          Product flow
        </p>
        <h2 className="mb-20 text-5xl font-black text-white sm:text-6xl">
          One session. SD card to classroom.
        </h2>

        <div className="flex flex-col gap-24">
          {workflow.map((item, i) => (
            <div
              key={item.title}
              className="grid gap-10 lg:grid-cols-2 lg:items-center"
            >
              {i % 2 === 1 && (
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className="w-full rounded-xl object-contain"
                />
              )}

              <div className={i % 2 === 1 ? "lg:pl-8" : "lg:pr-8"}>
                <span className="text-8xl font-black leading-none text-[#ff6fcf]/20">
                  {item.step}
                </span>
                <h3 className="mt-2 text-4xl font-bold leading-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-white/65">
                  {item.body}
                </p>
              </div>

              {i % 2 === 0 && (
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  className="w-full rounded-xl object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Controls */}
      <section className="border-y border-white/10 bg-black/20 py-20 backdrop-blur-sm">
        <div className="mx-auto w-[90%]">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#7dd8e8]">
            Instructor controls
          </p>
          <h2 className="mb-4 text-5xl font-black text-white sm:text-6xl">
            Designed for presenting while teaching.
          </h2>
          <p className="mb-12 max-w-xl text-lg leading-8 text-white/65">
            Jump to markers, switch clips, pause, or exit — all from a keyboard
            or Bluetooth clicker, without touching the mouse.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((control) => (
              <div
                key={control.title}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/8 px-5 py-4"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/10">
                  <Image
                    src={control.icon}
                    alt=""
                    width={40}
                    height={40}
                    className={`${control.iconClassName} object-contain invert`}
                  />
                </span>
                <span className="min-w-0">
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-2">
                    <span className="text-base font-semibold text-white">
                      {control.title}
                    </span>
                    <KbdGroup>
                      {control.keys.map((key, index) => (
                        <Kbd
                          key={`${control.title}-${key}-${index}`}
                          className="border-white/20 bg-black/30 text-white/70"
                        >
                          {key}
                        </Kbd>
                      ))}
                    </KbdGroup>
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="relative overflow-hidden py-28 text-center">
        <p className="relative mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#7dd8e8]">
          Ready to start?
        </p>
        <h2 className="relative mb-10 text-5xl font-black text-white sm:text-6xl">
          Free to download. No account needed.
        </h2>
        <div className="relative flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/video-debriefs/downloads"
            className="inline-flex h-13 items-center rounded-full bg-[#ff6fcf] px-8 text-base font-bold uppercase tracking-[0.14em] text-[#130c24] transition hover:bg-[#ff9dde]"
          >
            Download for macOS
          </Link>
        </div>
      </section>
    </main>
  );
}
