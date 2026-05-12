import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kamolaogun.com"),
  title: "Kam Olaogun — B2B Marketing Leader",
  description:
    "Revenue-driven B2B marketing leader with 10+ years building GTM engines across SaaS, cybersecurity, fintech, and identity verification.",
  openGraph: {
    title: "Kam Olaogun — B2B Marketing Leader",
    description:
      "10+ years building demand generation engines and GTM strategies that create categories and convert pipeline into revenue.",
    type: "website",
    url: "https://kamolaogun.com",
    images: [
      {
        url: "/headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Kam Olaogun — B2B Marketing Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kam Olaogun — B2B Marketing Leader",
    description:
      "10+ years building demand generation engines and GTM strategies that create categories and convert pipeline into revenue.",
    images: ["/headshot.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="bg-zinc-950 text-zinc-50 font-sans antialiased">
        <Nav />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
