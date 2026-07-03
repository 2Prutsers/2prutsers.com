import type { Metadata } from "next";

const spotifyUrl =
  "https://open.spotify.com/track/0ssiCrU06u2hlTplThFF0l?si=eXuj16NnSNKlx6_caRTLYQ";

export const metadata: Metadata = {
  title: "Redirecting to Spotify",
  alternates: {
    canonical: "/act",
  },
};

export default function ActRedirect() {
  return (
    <main className="grid min-h-dvh place-items-center bg-[#130c24] px-6 text-center text-white">
      <meta httpEquiv="refresh" content={`0; url=${spotifyUrl}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(spotifyUrl)});`,
        }}
      />
      <a
        className="font-semibold text-[#ff6fcf] underline underline-offset-4"
        href={spotifyUrl}
      >
        Open Spotify
      </a>
    </main>
  );
}
