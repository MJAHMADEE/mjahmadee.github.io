import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export const metadata = {
  title: 'Mohammad Javad Ahmadi - CTO & AI Engineer | MediversAI & ARAS Lab',
  description: 'CTO at MediversAI, Head of ARAS AI Lab. 8+ years architect of AI-driven healthcare solutions. Expertise in surgical video analysis, medical imaging, autonomous agents, and team leadership.',
  keywords: 'AI Engineer, CTO, Machine Learning, Computer Vision, Surgical AI, Medical Imaging, Robotics, Healthcare AI, Deep Learning, Leadership',
  authors: [{ name: 'Mohammad Javad Ahmadi' }],
  creator: 'Mohammad Javad Ahmadi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mjahmadee.github.io',
    title: 'Mohammad Javad Ahmadi - AI & Robotics Engineer',
    description: 'Dual-role executive (CTO & Head of AI Lab) with 8+ years architecting scalable AI solutions in MedTech and FinTech.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mohammad Javad Ahmadi Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Javad Ahmadi - CTO & AI Engineer',
    description: 'Dual-role executive with expertise in surgical AI, medical imaging, and team leadership.',
    creator: '@mjahmadi'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </body>
    </html>
  );
}
