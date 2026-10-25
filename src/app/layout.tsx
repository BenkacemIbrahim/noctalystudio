import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Ibrahim Benkacem — Full-Stack Engineer",
  description:
    "Full-Stack Engineer from Morocco, passionate about building clean, efficient web applications. Angular, Spring Boot, Next.js, TypeScript, PostgreSQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-midnight text-ivory antialiased selection:bg-coral selection:text-midnight">
        <SmoothScrollProvider>
          <ScrollProgress />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
