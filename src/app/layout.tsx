import type { Metadata } from "next";
import "@app/globals.css";
import Link from "next/link";
import Provider from "@app/provider";
import { Navigation } from "@components/Navigation";

export const metadata: Metadata = {
  title: "LOL 백과사전",
  description: "최신 LOL 정보와 업데이트를 확인하는 LOL 백과사전입니다.",
  openGraph: {
    title: "LOL 백과사전",
    description: "최신 LOL 정보와 업데이트를 확인하세요.",
    url: "http://localhost:3000",
    siteName: "LOL 백과사전",
    // images: [
    //   {
    //     url: "https://your-domain.com/og-image.jpg",
    //     width: 800,
    //     height: 600,
    //   },
    // ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <header className="sticky top-0 z-50 flex h-[80px] w-full min-w-[500px] flex-row items-center justify-around border-b border-slate-800 bg-slate-900 text-[20px] font-bold shadow-md">
          <Navigation />
        </header>
        <main className="mx-auto w-full max-w-[1400px] px-4 py-6">
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
