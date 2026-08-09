import type { Metadata } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "NoctalyStudio — sites, apps web & mobiles",
  description:
    "Des sites comme des œuvres, exposés avec soin. Sites vitrines premium, applis web & mobiles, refontes et lancements par Badr Khazzani.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
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
