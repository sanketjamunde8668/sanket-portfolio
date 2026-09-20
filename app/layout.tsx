import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanket Jamunde — Web Developer × AI Automation",
};

export default function LumenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}