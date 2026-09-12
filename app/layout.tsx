import type { Metadata } from 'next';
import './globals.css';
import './theme.css';

export const metadata: Metadata = {
  title: 'Isameldin Ahmed | Mechatronics Engineering Graduate',
  description: 'My portfolio as a mechatronics engineering graduate working across mechanical design, robotics, automation, embedded systems, and control.',
  metadataBase: new URL('https://isameldin.eldeenisam.workers.dev'),
  keywords: ['Isameldin Ahmed', 'mechatronics engineering', 'robotics', 'automation', 'embedded systems', 'mechanical design'],
  openGraph: {
    title: 'Isameldin Ahmed | Mechatronics Engineering Graduate',
    description: 'Engineering projects and experience across robotics, automation, embedded systems, electronics, and mechanical design.',
    url: 'https://isameldin.eldeenisam.workers.dev',
    siteName: 'Isameldin Ahmed',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Isameldin Ahmed | Mechatronics Engineering Graduate',
    description: 'Engineering projects and experience across robotics, automation, embedded systems, electronics, and mechanical design.',
  },
  icons: { icon: '/images/isameldin-logo.jpg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
