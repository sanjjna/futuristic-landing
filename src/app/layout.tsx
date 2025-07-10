// src/app/layout.tsx
import "./globals.css";
import { Orbitron } from "next/font/google";
import Particles from '@/components/Particles';

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "My Landing Page",
  description: "With Orbitron Font",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={orbitron.className}>
        {children}
        <Particles/>
      </body>
    </html>
  );
}