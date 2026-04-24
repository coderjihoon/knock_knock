import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://knock-books-app.vercel.app"),
  title: "Knock Knock 독서모임",
  description: "결국 남는 건, 어떤 사람과 함께 읽었는가",
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.svg",
  },
  openGraph: {
    title: "Knock Knock 독서모임",
    description: "결국 남는 건, 어떤 사람과 함께 읽었는가",
    url: "https://knock-books-app.vercel.app",
    siteName: "Knock Knock 독서모임",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/features/features-2.png",
        width: 1078,
        height: 1078,
        alt: "Knock Knock 독서모임 링크 대표 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knock Knock 독서모임",
    description: "결국 남는 건, 어떤 사람과 함께 읽었는가",
    images: ["/features/features-2.png"],
  },
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
