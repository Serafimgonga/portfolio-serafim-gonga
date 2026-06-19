import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serafim Gonga — Fullstack Software Engineer",
  description:
    "Fullstack engineer building scalable web, mobile and desktop products with .NET, React and PostgreSQL. Based in Luanda, Angola.",
  keywords: [
    "Fullstack Software Engineer",
    "Software Engineer",
    "ASP.NET Core",
    "React",
    "Next.js",
    "Node.js",
    "APIs REST",
    "Angola",
    "Luanda",
    "Serafim Gonga",
  ],
  authors: [{ name: "Serafim Adão Gonga" }],
  openGraph: {
    title: "Serafim Gonga — Fullstack Software Engineer",
    description:
      "Building digital products that automate processes and scale with the business.",
    type: "website",
    locale: "pt_AO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Serafim Gonga — Fullstack Software Engineer",
    description:
      "Building digital products that automate processes and scale with the business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
