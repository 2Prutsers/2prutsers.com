import Image from "next/image";
import Link from "next/link";

const workflow = [
  {
    title: "Import from the dive day",
    body: "Detect a GoPro SD card, pick the recording date, and copy or link footage into a session library. Multi-chapter GoPro files are grouped into one clip.",
    image: "/video-debriefs/import.png",
    alt: "Video Debriefs import screen showing GoPro footage import options",
  },
  {
    title: "Review, trim, and annotate",
    body: "Open each clip, set in and out points, add timed teaching notes, mark student names and titles, and decide what belongs in the presentation.",
    image: "/video-debriefs/review.png",
    alt: "Video Debriefs review screen showing clip playback, trimming, and notes",
  },
  {
    title: "Present with a clicker",
    body: "Run a fullscreen debrief with title cards, marker overlays, audio fades, AirPlay output, and single, double, or triple clicker taps for navigation.",
    image: "/video-debriefs/present.png",
    alt: "Video Debriefs presentation screen showing fullscreen debrief playback",
  },
];

const controls = [
  "Space: play or pause",
  "Double right: next marker",
  "Triple right: next clip",
  "Double left: previous marker",
  "Triple left: start or previous clip",
  "Escape: end presentation",
];

export default function VideoDebriefsPage() {
  return (
    <main className="min-h-dvh bg-[#07111f] text-white">
      <section className="mx-auto grid min-h-dvh w-full max-w-7xl items-center gap-12 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_0.92fr] lg:px-16">
        <div>
          <Link
            href="/"
            className="mb-12 inline-flex text-sm font-semibold uppercase tracking-[0.22em] text-[#9fb4d1] transition hover:text-white"
          >
            2Prutsers
          </Link>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-[#74d3ff]">
            Native macOS app for GUE instructors
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-normal text-[#f6f8ff] sm:text-7xl lg:text-8xl">
            Video debriefs for dive training, built around the real teaching
            workflow.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#c3cede]">
            Import GoPro footage, prepare each student clip, add timed notes,
            and present the whole session fullscreen with Bluetooth clicker
            controls.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:video-debriefs@2prutsers.com"
              className="inline-flex h-12 items-center justify-center bg-[#ff6fcf] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[#130c24] transition hover:bg-[#ff9dde]"
            >
              Request access
            </a>
            <a
              href="#media-needed"
              className="inline-flex h-12 items-center justify-center border border-[#375273] px-6 text-sm font-bold uppercase tracking-[0.16em] text-[#d9e7ff] transition hover:border-[#74d3ff] hover:text-white"
            >
              Media placeholders
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-[#7a38ff]/20 blur-3xl" />
          <video
            className="relative aspect-video w-full border border-[#375273] bg-black object-cover shadow-2xl shadow-black/40"
            controls
            muted
            playsInline
            poster="/video-debriefs/hero-poster.svg"
          >
            <source
              src="/video-debriefs/walkthrough-placeholder.mp4"
              type="video/mp4"
            />
          </video>
          <p className="mt-4 text-sm leading-6 text-[#93a7c3]">
            Placeholder video: replace with a 60-90 second walkthrough showing
            import, review, marker editing, and presentation mode.
          </p>
        </div>
      </section>

      <section className="border-y border-[#1c314f] bg-[#0b1728] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div>
            <p className="text-4xl font-black text-[#ff6fcf]">01</p>
            <h2 className="mt-4 text-2xl font-bold">Import</h2>
            <p className="mt-3 leading-7 text-[#b7c4d7]">
              SD-card detection, date-based imports, safe eject, folder import,
              and optional copy-to-library behavior.
            </p>
          </div>
          <div>
            <p className="text-4xl font-black text-[#ff6fcf]">02</p>
            <h2 className="mt-4 text-2xl font-bold">Prepare</h2>
            <p className="mt-3 leading-7 text-[#b7c4d7]">
              Trims, marker shields, inline note editing, clip metadata,
              inclusion toggles, and saved ordering.
            </p>
          </div>
          <div>
            <p className="text-4xl font-black text-[#ff6fcf]">03</p>
            <h2 className="mt-4 text-2xl font-bold">Debrief</h2>
            <p className="mt-3 leading-7 text-[#b7c4d7]">
              Fullscreen title cards, timed note overlays, keyboard controls,
              clicker taps, timeline scrubbing, and AirPlay output.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#74d3ff]">
            Product flow
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            One session from SD card to classroom.
          </h2>
        </div>

        <div className="grid gap-8">
          {workflow.map((item) => (
            <article
              key={item.title}
              className="grid overflow-hidden border border-[#1c314f] bg-[#0b1728] lg:grid-cols-[minmax(0,1fr)_22rem]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                width={1200}
                height={760}
                className="w-full bg-[#07111f] object-contain"
              />
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#b7c4d7]">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f4f7fb] px-6 py-20 text-[#101827] sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#315d91]">
              Instructor controls
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Designed for presenting while teaching.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#516070]">
              The presentation mode hides chrome when the cursor is idle and
              lets the instructor stay with the students: jump to markers,
              move between clips, pause, reverse, or exit using a keyboard or
              Bluetooth clicker.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {controls.map((control) => (
              <div
                key={control}
                className="border border-[#cad6e4] bg-white px-5 py-4 text-base font-semibold"
              >
                {control}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="media-needed"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#74d3ff]">
            Placeholder media to replace
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Replace these files with real product media.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#c3cede]">
            The current files are intentionally fake. Keep the filenames below
            if you want to swap assets without touching code.
          </p>
        </div>

        <div className="mt-10 grid gap-4 text-[#c3cede] lg:grid-cols-2">
          <div className="border border-[#1c314f] bg-[#0b1728] p-6">
            <h3 className="text-xl font-bold text-white">Photos</h3>
            <ul className="mt-4 space-y-3 leading-7">
              <li>
                <code>import.png</code>: screenshot of SD-card or folder import
                with grouped GoPro chapters.
              </li>
              <li>
                <code>review.png</code>: screenshot of clip review, player,
                trim brackets, marker list, and metadata form.
              </li>
              <li>
                <code>present.png</code>: screenshot of fullscreen presentation
                with title card or timed note overlay.
              </li>
              <li>
                <code>hero-poster.svg</code>: poster frame for the walkthrough
                video.
              </li>
            </ul>
          </div>
          <div className="border border-[#1c314f] bg-[#0b1728] p-6">
            <h3 className="text-xl font-bold text-white">Video</h3>
            <p className="mt-4 leading-7">
              <code>walkthrough-placeholder.mp4</code>: replace with a short
              demo that opens on importing footage, shows marker/trim editing,
              then switches into presentation mode with clicker-style jumps.
            </p>
            <p className="mt-4 leading-7">
              Recommended export: 1920x1080 MP4, H.264, muted or lightly voiced,
              under 25 MB for quick loading from GitHub Pages.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
