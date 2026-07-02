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
  return children;
}
