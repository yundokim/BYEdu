# 컨설팅 예시 — Before / After 사진

Examples 섹션에 노출되는 "수정 전 / 수정 후" 비교 사진을 두는 폴더입니다.
한 예시당 사진 두 장(before, after) 이 필요합니다.

## 적용 방법

1. 두 장의 사진을 이 폴더에 복사합니다.
   ```bash
   cp ~/Downloads/seteok-before.jpg public/examples/before-1.jpg
   cp ~/Downloads/seteok-after.jpg  public/examples/after-1.jpg
   ```

2. [`content/site.ts`](../../content/site.ts) 의 `examples.list` 배열에서 해당 항목의 `before.src` / `after.src` 에 경로 입력:
   ```ts
   examples: {
     list: [
       {
         label: "고2 인문계열 / 자율 활동 세특",
         before: { src: "/examples/before-1.jpg", alt: "수정 전 생기부 예시 1" },
         after:  { src: "/examples/after-1.jpg",  alt: "수정 후 생기부 예시 1" },
         note: "탐구 키워드를 ‘도시 사회학’으로 정렬해…",
       },
       // ...
     ],
   }
   ```

3. 저장 → dev 서버에서 즉시 반영됩니다.

## ⚠️ 개인정보 보호 — 업로드 전 필수 작업

실제 생기부 캡처에는 학생 식별 정보가 포함될 수 있습니다. 업로드 전 반드시 가리세요.

- **학생 이름 / 학번 / 학교명** → 모자이크 또는 검정 처리
- **반·번호 / 출석번호** → 가리기
- **민감한 평가 코멘트** → 학생·학부모 사전 동의 받은 부분만 노출
- 가능하면 **생기부 일부 발췌·각색본**을 사용하는 것이 가장 안전합니다.

## 권장 사양

- **비율**: 4:5 세로형 (예: 1200×1500) — 생기부 한 페이지에 어울리는 비율
- **포맷**: JPG / PNG / WebP. 텍스트 가독성이 중요하므로 화질은 80% 이상 권장.
- **용량**: 1장당 500KB 이하 권장 ([Squoosh](https://squoosh.app) 등으로 압축)
- **before / after 톤 일관성**: 같은 조명·각도로 촬영하거나, 화면 캡처라면 동일 줌·해상도로 잘라 비교 가독성을 높이세요.

## 예시 추가/삭제

`examples.list` 배열에 객체를 추가/삭제하면 됩니다. 항목마다 자동으로 BEFORE → AFTER 1행 2열 그리드 (모바일에서는 세로 stack, 화살표는 90도 회전) 가 생성됩니다.

## 사진을 비워두면

`src: ""` 로 두면 같은 위치에 placeholder 카드(아이콘 + 경로 안내) 가 노출됩니다. 사진을 준비하기 전이라도 디자인이 깨지지 않습니다.
