import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UrteilDB – Deutsche Gerichtsurteile durchsuchbar per API",
  description:
    "10.000+ Gerichtsurteile durchsuchbar, strukturiert und per API verfügbar. Für Legal-Tech, Kanzleien und Mietervereine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
