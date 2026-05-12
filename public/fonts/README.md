# 사용자 정의 폰트

본문(Sans) / 제목(Serif) 폰트는 두 가지 방법 중 편한 것으로 적용할 수 있습니다.

| 방법 | 언제 쓰나요? | 파일 위치 |
| --- | --- | --- |
| **A. 폰트 파일 (woff2)** | 라이선스 파일을 직접 받아 호스팅할 때, 가장 빠른 로딩 | `public/fonts/` 에 파일 + `app/globals.css` `@font-face` |
| **B. 웹폰트 링크 (CDN)** | Google Fonts / Adobe Fonts / 눈누 등 CDN 으로 받을 때 | `app/layout.tsx` `<head>` 의 `<link>` 슬롯 |

두 방법은 함께 써도 됩니다 (예: 본문은 파일, 제목은 웹폰트).

---

## 방법 A — 폰트 파일 직접 사용 (woff2)

### 1) 파일 두기

폰트 파일 이름을 아래 두 가지 중 하나로 맞춰서 이 폴더에 복사하세요.
이름만 맞추면 자동으로 사이트 전반에 반영됩니다.

| 용도 | 권장 파일명 | 적용되는 곳 |
| --- | --- | --- |
| 본문 (Sans) | `sans.woff2` | 페이지 전체 본문 텍스트 |
| 제목 (Serif) | `serif.woff2` | 모든 섹션 헤드라인, 카드 제목 |

```bash
cp ~/Downloads/MyPretendard-Variable.woff2 public/fonts/sans.woff2
cp ~/Downloads/MyNotoSerif-Variable.woff2 public/fonts/serif.woff2
```

dev 서버 새로고침 → 즉시 반영.

### 2) 파일명을 바꾸고 싶다면

[`app/globals.css`](../../app/globals.css) 상단의 `@font-face` 블록을 열어 `src: url("/fonts/…")` 부분만 본인 파일명으로 바꾸면 됩니다.

```css
@font-face {
  font-family: "Brand Sans";
  src: url("/fonts/MyCustom-Bold.woff2") format("woff2");  /* ← 여기만 변경 */
  font-weight: 100 900;
  font-display: swap;
}
```

### 3) 굵기별 파일이 여러 개라면

가변 폰트(Variable Font) 가 아닌 Regular/Bold 분리 폰트는 굵기마다 `@font-face` 블록을 추가하세요.

```css
@font-face {
  font-family: "Brand Sans";
  src: url("/fonts/MyFont-Regular.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Brand Sans";
  src: url("/fonts/MyFont-Bold.woff2") format("woff2");
  font-weight: 700;
  font-display: swap;
}
```

---

## 방법 B — 웹폰트 링크 사용 (Google Fonts / Adobe Fonts / 기타 CDN)

폰트 파일을 직접 호스팅하지 않고 외부 CDN 으로 받아오는 방법입니다.

### 1) `<link>` 추가

[`app/layout.tsx`](../../app/layout.tsx) 의 `<head>` 안 **"웹폰트 링크 슬롯"** 주석 블록을 찾아 아래처럼 추가하세요.

```tsx
{/* Google Fonts 예시 */}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Playfair+Display:wght@400;700&display=swap"
/>
```

### 2) 폰트 스택에 연결

`<link>` 만 추가해서는 아직 사용되지 않습니다. 받아온 폰트의 `font-family` 이름을 사이트 폰트 스택에 연결해야 합니다. 두 가지 방법이 있어요.

**(i) 빠른 방법 — globals.css 의 `@font-face` `src` 만 갈아끼우기**

웹폰트가 이미 사이트의 가상 폰트명 (`Brand Sans` / `Brand Serif`) 으로 동작하게 만들고 싶다면, [`app/globals.css`](../../app/globals.css) 의 `@font-face` 를 통째로 주석 처리하고, 그 자리에 웹폰트 `font-family` 이름이 폰트 스택의 가장 앞에 오도록 `body { font-family: ... }` 등을 직접 수정합니다. (직관적이지 않으면 (ii) 를 권장합니다.)

**(ii) 권장 방법 — Tailwind 스택 맨 앞에 추가**

[`tailwind.config.ts`](../../tailwind.config.ts) 의 `fontFamily.sans` / `fontFamily.serif` 배열 맨 앞에 새 폰트 이름을 추가하세요.

```ts
fontFamily: {
  sans: [
    "Inter",                  // ← 추가 (Google Fonts 에서 받은 이름)
    "Brand Sans",
    "Pretendard Variable",
    "Pretendard",
    "system-ui",
    "sans-serif",
  ],
  serif: [
    "Playfair Display",       // ← 추가
    "Brand Serif",
    "Noto Serif KR",
    "serif",
  ],
},
```

저장 → dev 서버가 자동 갱신.
폰트 이름은 Google Fonts / Adobe Fonts 의 안내 페이지에 적힌 정확한 이름을 그대로 사용해야 합니다 (대소문자·공백 포함).

### 3) Adobe Fonts (Typekit) 예시

```tsx
<link rel="stylesheet" href="https://use.typekit.net/abcd1234.css" />
```

Adobe Fonts 는 한 줄 `<link>` 로 여러 폰트가 한꺼번에 들어옵니다. Tailwind 스택에 각 폰트 이름을 추가하면 됩니다.

### 4) 한글 무료 폰트 사이트 (눈누 등)

[눈누](https://noonnu.cc) 에서 골라 "웹 폰트 사용하기" 의 `<link>` / `<style>` 코드를 그대로 `<head>` 슬롯에 붙여 넣으세요. 폰트 이름은 거기 안내된 `font-family` 값을 사용합니다.

---

## 폰트를 다시 기본값으로 되돌리기

1. `public/fonts/` 의 파일 삭제 (방법 A 사용 시)
2. `app/layout.tsx` 에서 추가한 `<link>` 제거 (방법 B 사용 시)
3. (선택) [`app/globals.css`](../../app/globals.css) 의 `@font-face` 블록 주석 처리 — 콘솔의 404 경고 제거용

자동 폴백 순서:
- 본문: Brand Sans → **Pretendard Variable / Pretendard (CDN 기본 로드)** → 시스템 한글 폰트
- 제목: Brand Serif → **Noto Serif KR (CDN 기본 로드)** → 시스템 serif

---

## 권장 포맷·사양 (방법 A 기준)

- **포맷**: WOFF2 (가장 가벼움). TTF/OTF 도 사용 가능하지만 용량이 큽니다.
- **가변 폰트**: 한 파일로 100–900 weight 모두 커버. `font-weight: 100 900;` 으로 한 번에 처리.
- **한글 지원**: 한글 자소(2,350자 이상) 포함 여부 확인 (Pretendard, Noto Sans KR, Spoqa Han Sans 등).
- **용량**: 1MB 이하 권장. WOFF2 가변 폰트는 보통 200–500KB.

## 추천 한글 폰트 소스

- [Pretendard](https://github.com/orioncactus/pretendard) — 깔끔한 산세리프, 가변 폰트 제공
- [Noto Sans KR / Serif KR](https://fonts.google.com/noto/specimen/Noto+Sans+KR) — Google Fonts
- [눈누 (noonnu.cc)](https://noonnu.cc) — 상업용 가능 한글 무료 폰트 모음
