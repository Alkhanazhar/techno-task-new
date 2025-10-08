import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/hero/Navbar";
import Footer from "@/components/hero/Footer";

const sora = localFont({
  src: "../fonts/sora.ttf",
  variable: "--font-sora",
  display: "swap",
  src: "../fonts/sora.ttf",
  variable: "--font-sora",
  display: "swap",
});

export const metadata = {
  title: "Convoze",
  description: "Convoze - AI-Powered Conversation Intelligence",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora?.variable} w-full antialiased bg-gradient-to-tl to-[#21082b] from-[#27022e]`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
