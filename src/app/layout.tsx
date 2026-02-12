import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "PULSE FITNESS | Anti-Gravity Wellness",
  description: "Experience the future of fitness with our neon-lit, zero-gravity training facility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-dark text-white antialiased">
        <div className="scanlines" />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
