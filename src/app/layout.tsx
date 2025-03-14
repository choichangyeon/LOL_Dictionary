import type { Metadata } from "next";
import "@app/globals.css";
import Link from "next/link";
import Provider from "@app/provider";

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
    <html lang="en">
      <body>
        <header className="flex h-[80px] w-full min-w-[500px] flex-row items-center justify-around bg-green-300 text-[25px] font-bold">
          <Link href={"/"}>홈</Link>
          <Link href={"/champions"}>챔피언 목록</Link>
          <Link href={"/items"}>아이템 목록</Link>
          <Link href={"/rotation"}>챔피언 로테이션</Link>
        </header>
        <main className="w-full">
          <Provider>{children}</Provider>
        </main>
      </body>
    </html>
  );
}
