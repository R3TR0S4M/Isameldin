import type { Metadata } from 'next';
import './globals.css';
import './theme.css';

export const metadata: Metadata = {
  title: 'Isameldin Ahmed | Mechatronics Engineering Graduate',
  description: 'My portfolio as a mechatronics engineering graduate working across mechanical design, robotics, automation, embedded systems, and control.',
  icons: { icon: '/favicon.svg' },
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
