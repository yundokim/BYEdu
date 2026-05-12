# 백양에듀 (Baekyang Edu) — 송도 1:1 비대면 입시 컨설팅 사이트

송도 학부모님을 위한 1:1 비대면 입시 컨설팅 백양에듀의 공식 랜딩 페이지.
Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui 기반.

---

## 빠른 시작

```bash
npm install
npm run dev    # http://localhost:3000
```

빌드 / 타입 체크:

```bash
npm run build
npm run type-check
```

---

## 콘텐츠 편집 시스템 — 한 곳에서 모든 텍스트와 이미지를 관리

이 사이트는 **`content/site.ts`** 파일 하나에 모든 문구·이미지 경로·링크를 모아 두는 구조로 설계되어 있습니다.
컴포넌트 코드를 수정하지 않고도 사이트 전반을 바꿀 수 있습니다.

### 1. 문구 수정하기

`content/site.ts` 를 열고, 해당 섹션의 필드를 수정 → 저장하면 dev 서버가 자동 갱신합니다.

| 섹션 | 키 | 위치 |
| --- | --- | --- |
| 메타 / SEO | `meta` | [content/site.ts](content/site.ts) |
| 브랜드 (이름·로고) | `brand` | 〃 |
| 연락처 (전화·이메일·카카오) | `contact` | 〃 |
| 글로벌 네비/CTA | `nav`, `ctaShort` | 〃 |
| 히어로 | `hero` | 〃 |
| Why 백양에듀 | `why` | 〃 |
| 컨설턴트 소개 | `consultants` | 〃 |
| 컨설팅 프로그램 | `programs` | 〃 |
| 관리 프로세스 | `process` | 〃 |
| 성과 / 사례 | `results` | 〃 |
| 학부모 후기 | `testimonials` | 〃 |
| FAQ | `faq` | 〃 |
| CTA (무료 상담) | `cta` | 〃 |
| 상담 운영 방식 | `sessions` | 〃 |
| 푸터 | `footer` | 〃 |

> 💡 **TypeScript 가 도와줍니다.** VSCode 에서 자동완성과 타입 체크가 동작하므로, 필드를 빼먹거나 잘못 입력하면 바로 빨간 줄이 그어집니다.

### 2. 로고 교체하기

1. 로고 파일을 [public/brand/](public/brand/) 에 복사 — 예: `public/brand/logo.svg`
2. `content/site.ts` 의 `brand.logo.src` 에 경로 입력:
   ```ts
   brand: {
     logo: { src: "/brand/logo.svg", alt: "백양에듀 로고" },
   }
   ```
3. 저장 → 헤더와 푸터에 자동 반영. 로고를 비우면 (`src: ""`) 한자(白) 폴백 마크가 다시 노출됩니다.

자세한 권장 사양: [public/brand/README.md](public/brand/README.md)

### 3. 컨설턴트 사진 추가하기

1. 사진 파일을 [public/consultants/](public/consultants/) 에 복사 — 예: `public/consultants/lee-jihoon.jpg`
2. `content/site.ts` → `consultants.list` 에서 해당 컨설턴트의 `photo` 필드에 경로 입력:
   ```ts
   {
     name: "이지훈",
     photo: "/consultants/lee-jihoon.jpg",
     // ...
   }
   ```
3. 저장 → 카드의 사진 자리에 자동 반영. 사진을 비우면 한자 + 그라디언트 폴백이 노출됩니다.

권장: 4:3 가로형, 500KB 이하. 자세한 사양: [public/consultants/README.md](public/consultants/README.md)

### 4. 컨설턴트 추가/제거

`content/site.ts` 의 `consultants.list` 배열에 객체를 추가하거나 삭제하면 됩니다.
필요한 필드:

```ts
{
  name: "홍길동",                // 한글 이름
  nameRoman: "Hong Gil-dong",     // 영문 이름
  track: "예술계 컨설팅 담당",     // 담당 트랙
  photo: "/consultants/hong.jpg", // (선택) 사진 경로
  initial: "洪",                   // 사진이 없을 때 표시할 한자
  accent: "from-[#5A4A3F] to-[#3A3733]",  // 폴백 그라디언트 (Tailwind classes)
  glow: "rgba(201,168,120,0.35)",          // 폴백 글로우 (CSS color)
  nameShade: "text-brand-cream/85",        // 폴백 한자 색상
  bio: [
    "약력 1",
    "약력 2",
    "약력 3",
    "약력 4",
  ],
}
```

3명 이상이 되어도 그리드는 자동으로 1→2→N 열로 적응합니다.

### 5. FAQ / 후기 / 사례 추가

각각 `faq.list`, `testimonials.list`, `results.cases` 배열에 객체를 추가하면 됩니다.
객체 형태는 기존 항목을 복사해 채우는 것이 가장 빠릅니다.

### 6. 연락처·운영시간 수정

`contact` 객체 한 곳만 수정하면 헤더·풋터·CTA 채널이 모두 동기화됩니다.

```ts
contact: {
  phone: { display: "0507-1234-5678", tel: "tel:050712345678" },
  email: "hello@baekyang-edu.kr",
  kakao: "@백양에듀",
  hours: { weekday: "...", saturday: "...", sunday: "..." },
}
```

### 7. 아이콘 교체

각 섹션에서 사용하는 아이콘은 [components/icons.ts](components/icons.ts) 의 레지스트리에 등록된 키만 사용 가능합니다.
새 아이콘이 필요하면:
1. `components/icons.ts` 에 lucide 아이콘 추가
2. `iconRegistry` 객체에 등록
3. `content/site.ts` 의 `IconName` 유니온 타입에 키 추가

[lucide.dev/icons](https://lucide.dev/icons) 에서 사용할 아이콘을 먼저 골라 두세요.

### 8. 폰트 교체하기

본문(Sans) / 제목(Serif) 폰트를 본인 폰트 파일로 자유롭게 교체할 수 있습니다.

**가장 빠른 방법** — 파일명만 맞춰서 [public/fonts/](public/fonts/) 에 두세요.

```bash
cp ~/Downloads/MyPretendard.woff2 public/fonts/sans.woff2   # 본문
cp ~/Downloads/MyNotoSerif.woff2  public/fonts/serif.woff2  # 제목
```

dev 서버 새로고침 즉시 반영됩니다. 파일이 없으면 자동으로 Pretendard / Noto Serif KR (CDN) 으로 폴백됩니다.

**파일명을 다르게 쓰고 싶다면** — [`app/globals.css`](app/globals.css) 상단의 `@font-face { src: url("/fonts/...") }` 부분만 본인 파일명으로 바꾸면 됩니다.

자세한 가이드: [public/fonts/README.md](public/fonts/README.md)

### 9. 컬러 테마 변경하기

브랜드 컬러는 [`tailwind.config.ts`](tailwind.config.ts) 의 `theme.extend.colors.brand` 에 모여 있습니다. 이 값만 바꾸면 사이트 전체 색상이 즉시 적응합니다.

```ts
brand: {
  ink: "#F4F7FF",        // 본문·제목 텍스트
  cream: "#0E1A3A",      // 메인 페이지 배경
  deep: "#070D26",       // 더 깊은 강조 섹션 배경 (Process, CTA)
  paper: "#172551",      // 카드 배경 (raised)
  slate: "#243066",      // hover / 보조 면
  accent: "#FFFFFF",     // 메인 포인트 컬러 (현재 순백)
  accentSoft: "#C7D2EC", // 보조 포인트 (소프트 페일 블루)
},
```

토큰의 **역할**은 의미상 고정입니다:
- `cream` → 페이지 배경, `ink` → 그 위의 텍스트
- `deep` → 더 진한 섹션 배경, `paper` → 카드/패널 배경
- `accent` → 강조용 포인트, `accentSoft` → 보조 강조

값만 바꾸면 라이트 테마, 다른 컬러 테마로 자유롭게 전환할 수 있습니다.

---

## 디렉터리 구조

```
content/site.ts                 # ⭐ 모든 텍스트·이미지 경로의 단일 진실 원본
public/
  brand/                        # 로고 자산
  consultants/                  # 컨설턴트 사진
  fonts/                        # 사용자 정의 폰트 파일 (sans.woff2 / serif.woff2)
app/
  layout.tsx                    # <head>, 메타데이터
  page.tsx                      # 섹션 조립 (순서 변경 가능)
  globals.css                   # 디자인 토큰 / 폰트 @font-face 슬롯 / 베이스 스타일
components/
  icons.ts                      # 아이콘 레지스트리
  ui/                           # shadcn/ui 컴포넌트 (Button, Card, Accordion, Badge)
  site/
    header.tsx, footer.tsx, logo.tsx
  sections/
    hero.tsx, why.tsx, consultants.tsx,
    programs.tsx, process.tsx, results.tsx,
    testimonials.tsx, faq.tsx, cta.tsx
tailwind.config.ts              # brand 컬러 / 폰트 토큰
```

---

## 디자인 시스템

- **테마**: Navy + White (네이비 다크 테마, 흰색 포인트)
- **컬러 토큰** (Tailwind config 의 `brand.*`):
  - `brand.ink` — 본문 텍스트 (오프-화이트, #F4F7FF)
  - `brand.cream` — 메인 배경 (네이비, #0E1A3A)
  - `brand.deep` — 강조 섹션 배경 (#070D26)
  - `brand.paper` — 카드 배경 raised (#172551)
  - `brand.slate` — hover / 보조 면 (#243066)
  - `brand.accent` — 포인트 컬러 (순백, #FFFFFF)
  - `brand.accentSoft` — 보조 포인트 (페일 블루, #C7D2EC)
- **폰트**:
  - 본문(Sans): `Brand Sans` → Pretendard → 시스템 한글 fallback
  - 제목(Serif): `Brand Serif` → Noto Serif KR fallback
  - `public/fonts/` 에 파일을 두면 사용자 정의 폰트가 우선 적용됩니다.
- **반응형**: 모바일 퍼스트, 컨테이너 최대 1240px
- **컴포넌트**: shadcn/ui (`Button`, `Card`, `Accordion`, `Badge`)

---

## 자주 하는 작업 치트시트

| 하고 싶은 일 | 어디를 수정 |
| --- | --- |
| 회사 소개 문구 수정 | `content/site.ts` → `hero.description`, `why.description` |
| 컨설턴트 약력 수정 | `consultants.list[i].bio` |
| 컨설턴트 사진 교체 | `consultants.list[i].photo` + `public/consultants/` |
| 로고 교체 | `brand.logo.src` + `public/brand/` |
| 전화번호·이메일 변경 | `contact.phone`, `contact.email` |
| 운영시간 변경 | `contact.hours` |
| FAQ 추가 | `faq.list` 에 `{ q, a }` 추가 |
| 후기 추가 | `testimonials.list` 에 `{ parent, school, quote }` 추가 |
| 사례 추가 | `results.cases` 에 객체 추가 |
| 컨설턴트 추가/제거 | `consultants.list` 배열 편집 |
| 섹션 순서 변경 | [app/page.tsx](app/page.tsx) JSX 순서 변경 |
| 폰트 교체 | `public/fonts/sans.woff2` / `serif.woff2` 드롭 |
| 컬러 테마 변경 | [tailwind.config.ts](tailwind.config.ts) 의 `brand.*` 값 |

---

## 라이선스

이 코드는 백양에듀 프로젝트 전용으로 작성된 스캐폴딩입니다.
