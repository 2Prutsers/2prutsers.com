import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Debriefs",
  description:
    "A macOS app for GUE dive instructors to import GoPro footage, annotate clips, and present fullscreen video debriefs.",
};

export default function VideoDebriefsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <style>{`
        html { background: #010810; }
        @keyframes body-bg {
          from { background: #6ecad8; }
          to   { background: #010810; }
        }
        html body {
          animation: body-bg linear both;
          animation-timeline: scroll(root);
        }
      `}</style>
      {children}
    </>
  );
}
