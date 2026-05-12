import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      fontFamily: {
        // 사용자 정의 폰트 → "Brand Sans" / "Brand Serif" 가 최우선.
        // public/fonts/ 에 파일을 두지 않으면 Pretendard / Noto Serif KR 로 자동 폴백.
        sans: [
          "Brand Sans",
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "sans-serif",
        ],
        // 제목용 스택 — Pretendard 우선 (Bold weight 700 사용 권장).
        // Brand Serif 파일이 있으면 그것이 우선, 없으면 Pretendard 가 자동으로.
        serif: [
          "Brand Serif",
          "Pretendard Variable",
          "Pretendard",
          "Noto Serif KR",
          "serif",
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ───────────────────────────────────────────────
        // 브랜드 팔레트 (White + Navy Accent)
        //
        // 의미상 역할:
        //   cream  → 메인 배경 (순백)
        //   ink    → 메인 텍스트/전경 (다크 네이비)
        //   accent → 포인트 컬러 (비비드 네이비)
        // ───────────────────────────────────────────────
        brand: {
          // 텍스트·전경
          ink: "#1B2947",        // 본문·제목 메인 텍스트 (다크 네이비)
          // 메인 배경
          cream: "#FFFFFF",      // 페이지 메인 배경 (순백)
          // 작은 다크 액센트 (라벨·태그·코드 등)
          deep: "#0A1330",       // 작은 영역에서 강한 콘트라스트를 줄 때
          // 살짝 톤다운된 라이트 (raised 카드/구역)
          paper: "#F4F6FB",      // 라이트 그레이·네이비 틴트
          // 중간 톤 (hover/보조 면)
          slate: "#6B7AA0",      // 중간 네이비-그레이
          // 포인트 컬러
          accent: "#1E3A8A",     // 비비드 네이비 (점·라인·강조 텍스트)
          accentSoft: "#4A5C8A", // 소프트 네이비 (보조 강조)
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(rgba(30,58,138,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
