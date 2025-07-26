import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhura Shanthini - Privacy Law Expert & Legal Professional in Chennai",
  description: "Madhura Shanthini is a privacy law expert and legal professional based in Chennai, specializing in data protection, intellectual property, and commercial contracts. ~4 years PQE with expertise in technology law and regulatory compliance.",
  keywords: [
    "Madhura Shanthini",
    "privacy law expert",
    "Chennai lawyer",
    "data protection lawyer",
    "intellectual property lawyer",
    "technology law",
    "commercial contracts",
    "legal consultant Chennai",
    "privacy compliance",
    "GDPR consultant India",
    "legal professional Chennai",
    "Bar Council India",
    "technology contracts",
    "IP law specialist"
  ],
  authors: [{ name: "Madhura Shanthini" }],
  creator: "Madhura Shanthini",
  publisher: "Madhura Shanthini",
  metadataBase: new URL('https://madhurashanthini.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Madhura Shanthini - Privacy Law Expert & Legal Professional",
    description: "Expert legal services in privacy law, data protection, intellectual property, and technology contracts. Based in Chennai with ~4 years PQE.",
    url: 'https://madhurashanthini.com',
    siteName: 'Madhura Shanthini - Legal Professional',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Madhura Shanthini - Privacy Law Expert'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Madhura Shanthini - Privacy Law Expert Chennai",
    description: "Expert legal services in privacy law, data protection, and technology contracts in Chennai, India.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f59e0b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Madhura Shanthini",
              "jobTitle": "Legal Professional",
              "description": "Privacy law expert and legal professional specializing in data protection, intellectual property, and commercial contracts",
              "url": "https://madhurashanthini.com",
              "image": "https://madhurashanthini.com/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "India"
              },
              "email": "madhurashanthini@gmail.com",
              "telephone": "+91-9445269043",
              "knowsAbout": [
                "Privacy Law",
                "Data Protection",
                "Intellectual Property",
                "Technology Law",
                "Commercial Contracts",
                "Regulatory Compliance"
              ],
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Dr. Ambedkar Law University"
              },
              "worksFor": {
                "@type": "Organization",
                "name": "KRIA Law"
              },
              "sameAs": [
                "https://www.linkedin.com/in/madhura-shanthini/"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
