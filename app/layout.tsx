import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knock Knock",
  description: "생각이 깊은 사람들과 함께하는 프리미엄 커뮤니티 독서 경험",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full bg-bg-main antialiased">
      <body className="flex min-h-full flex-col bg-bg-main font-body text-primary-text">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
