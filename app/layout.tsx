import type { Metadata } from "next";

import { siteContent } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.meta.url),
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: [...siteContent.meta.keywords],
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    url: siteContent.meta.url,
    siteName: siteContent.meta.siteName,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: siteContent.meta.image,
        width: 1200,
        height: 630,
        alt: siteContent.meta.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    images: [siteContent.meta.image],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        {/* ============================================================
            웹폰트 링크 슬롯 (Google Fonts / Adobe Fonts / 기타 CDN)
            ------------------------------------------------------------
            폰트 파일(woff2) 을 직접 호스팅하지 않고 외부 웹폰트를 쓰고 싶다면
            아래 <link> 태그를 추가/수정하세요.

            예시 1) Google Fonts
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            />

            예시 2) Adobe Fonts (Typekit)
            <link rel="stylesheet" href="https://use.typekit.net/abcd1234.css" />

            예시 3) 눈누 / 기타 CDN
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/.../font.css" />

            ⚠️ 웹폰트의 font-family 이름을 app/globals.css 의 body / .font-serif
              스택 맨 앞 또는 @font-face 의 src 와 연결해야 실제로 적용됩니다.
              자세한 가이드: public/fonts/README.md
            ============================================================ */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
