import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anusha Kudupudi - Full Stack Developer | Portfolio',
  description: 'B.Tech graduate and Full Stack developer specializing in React, JavaScript, and modern web technologies. Currently interning at NIVSEE Technology working on client projects.',
  keywords: 'Anusha Kudupudi, Full Stack Developer, React Developer, Web Development, JavaScript, HTML, CSS, Bootstrap, Portfolio',
  authors: [{ name: 'Anusha Kudupudi' }],
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Anusha Kudupudi - Full Stack Developer Portfolio',
    description: 'Passionate Full Stack developer with experience in client projects and modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className} style={{ backgroundColor: '#FAFAFA' }}>
        {children}
      </body>
    </html>
  );
}
