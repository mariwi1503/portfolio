import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Ary | Problem Solver",
    template: "%s | Ary",
  },
  description: "Portofolio profesional Ary, seorang Backend Engineer dengan pengalaman hampir 5 tahun membangun sistem aplikasi yang cepat, aman, dan mudah dirawat.",
  keywords: ["Portofolio", "Ary", "Backend Engineer", "Web Developer", "Next.js", "Node.js", "NestJS"],
  icons: {
    icon: "/web.ico",
  },
  authors: [{ name: "Ary", url: "https://ary.dev" }],
  creator: "Ary",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ary.dev",
    title: "Ary | Backend Engineer",
    description: "Portofolio profesional Ary, seorang Backend Engineer dengan pengalaman hampir 5 tahun membangun sistem backend yang cepat, aman, dan mudah dirawat.",
    siteName: "Ary.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ary | Backend Engineer",
    description: "Portofolio profesional Ary, seorang Backend Engineer dengan pengalaman hampir 5 tahun membangun sistem backend yang cepat, aman, dan mudah dirawat.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
