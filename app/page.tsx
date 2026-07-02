export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col justify-between bg-[#f7f4ed] px-6 py-8 text-[#181512] sm:px-10 lg:px-16">
      <header className="flex items-center justify-between text-sm font-medium uppercase tracking-[0.2em] text-[#6a6258]">
        <span>2Prutsers</span>
        <span>2prutsers.com</span>
      </header>

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center py-20">
        <p className="mb-5 text-base font-medium uppercase tracking-[0.24em] text-[#9a3f2c]">
          Static site ready for GitHub Pages
        </p>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] sm:text-7xl">
          2Prutsers is configured for a custom-domain static deployment.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#4c4640]">
          Replace this starter page with the real site content. The production
          build exports plain HTML, CSS, and JavaScript into the
          <code className="mx-1 rounded bg-white/70 px-1.5 py-0.5 text-base">
            out
          </code>
          directory for GitHub Pages.
        </p>
      </section>
    </main>
  );
}
