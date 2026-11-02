import type { Metadata } from "next";
export const metadata: Metadata = { 
  title: "Litonsweet Forex Multi System - LS-882914 - Theme 20 Gold Rush Final - Premium 【entity-Exness¦canonical_name=Exness】 Dark", 
  description: "Final IP - 【entity-Exness¦canonical_name=Exness】 Web + Social + Litonsweet A+B - Theme 20 Gold Rush ID gold-rush - Premium",
  viewport: { width: "device-width", initialScale: 1, maximumScale: 1, userScalable: false }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body style={{margin:0,background:"#08080A",overflowX:"hidden"}}>{children}</body>
    </html>
  );
}
