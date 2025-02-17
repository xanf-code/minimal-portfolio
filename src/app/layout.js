import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { constructMetadata } from "@/lib/metadata";
import ReactQueryProvider from "@/lib/queryProvider";
import { Analytics } from "@vercel/analytics/react";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = constructMetadata();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark dark:text-white">
      <body className={cn("antialiased", ibmPlexSans.variable)}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
