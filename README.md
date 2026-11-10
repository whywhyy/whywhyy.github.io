# whywhyy.github.io

김강산의 개발 블로그. **Astro 7 + AstroPaper v7** 기반 정적 사이트로, GitHub Pages에 자동 배포됩니다.

- 사이트: https://whywhyy.github.io

---

## 빠른 시작

```bash
npm install
npm run dev        # http://localhost:4321 (개발 서버, 핫 리로드)
npm run build      # dist/ 생성 (astro check + build + pagefind 검색 인덱스)
npm run preview    # 빌드 결과를 로컬에서 서빙
```

Node **22.23.4 이상** 필요 (`package.json`의 `engines`).

---

## 글 추가하기

1. `src/content/posts/` 에 `.mdx` 파일을 만듭니다. 파일명이 URL이 됩니다.
   예: `my-new-post.mdx` → `/posts/my-new-post/`

2. frontmatter를 채웁니다.

```yaml
---
title: 글 제목
pubDatetime: 2026-11-10T14:00:00
featured: false
draft: false
tags:
  - python
  - backend
description: 목록과 검색 결과에 보일 한 줄 요약
# 선택: 목록 카드 + 글 상단에 표시할 이미지
thumbnail: "../../assets/images/my-image.jpg"
# 선택: SNS 공유 썸네일 (없으면 thumbnail 사용 권장)
ogImage: "../../assets/images/my-image.jpg"
---
```

3. 본문을 작성합니다. 이미지는 `src/assets/images/`에 넣고
   `![설명](../../assets/images/파일명.jpg)` 로 참조합니다.

4. `npm run dev`로 확인 → 커밋 → `astro` 브랜치에 push 하면 자동 배포.

### frontmatter 필드

| 필드 | 필수 | 설명 |
| --- | --- | --- |
| `title` | ✅ | 제목 |
| `pubDatetime` | ✅ | 발행일 (`YYYY-MM-DDTHH:mm:ss`) |
| `description` | ✅ | 요약. 목록/검색/OG에 사용 |
| `tags` | | 문자열 배열. 비우면 `others` |
| `draft` | | `true`면 빌드에서 제외 |
| `featured` | | `true`면 홈 상단 추천 영역 |
| `thumbnail` | | 목록 카드 + 글 상단 이미지 |
| `ogImage` | | SNS 공유 이미지 |
| `modDatetime` | | 수정일 (있으면 표시) |
| `hideToc` | | `true`면 목차 숨김 |
| `canonicalURL` | | 외부 원문이 있을 때 |

---

## 구조

```
src/
├─ content/
│  ├─ posts/          # 글 (.mdx)
│  └─ pages/          # about.md 등 고정 페이지
├─ assets/images/     # 글 이미지 (빌드 시 최적화)
├─ components/
│  ├─ PostArticle.astro   # 글 본문 (모든 글 라우트 공용)
│  ├─ ImageLightbox.astro # 이미지 확대 + 읽기 진행바
│  └─ Card.astro          # 목록 카드 (썸네일, 읽는 시간)
├─ layouts/           # Layout, PostLayout
├─ pages/
│  ├─ posts/[...slug]/    # 표준 글 경로 /posts/<slug>/
│  ├─ projects/           # 프로젝트 목록
│  ├─ tags/, archives/, search/, about
│  └─ rss.xml.ts, robots.txt.ts, og.png.ts
├─ i18n/lang/         # ko.ts, en.ts (UI 문구)
└─ utils/             # readingTime, slugify, 정렬/경로 유틸
```

### 글 경로

모든 글은 `/posts/<slug>/` 한 곳에만 존재합니다.
예전 Gatsby 주소(`/blog/YYYY/MM/DD/...`)는 호환 라우트를 두지 않았습니다
(유입이 거의 없고, 글마다 페이지가 두 개 생기는 비용이 더 컸습니다).

본문 마크업은 `components/PostArticle.astro` 하나에 모여 있으므로,
디자인을 바꿀 때 한 곳만 고치면 됩니다.

---

## 디자인/설정 바꾸기

- 사이트 제목·설명·소셜 링크·페이지당 글 수: `astro-paper.config.ts`
- 색상·폰트: `src/styles/`
- UI 문구(한국어): `src/i18n/lang/ko.ts`
- 프로젝트 목록: `src/pages/projects/index.astro` 상단 `projects` 배열

---

## 배포

`.github/workflows/deploy.yml` — `astro` 브랜치에 push하면
GitHub Actions가 빌드 후 GitHub Pages로 배포합니다.

> ⚠️ 저장소 설정 필요
> - Settings → Pages → **Source: GitHub Actions**
> - Settings → Environments → `github-pages` → Deployment branches 에 `astro` 허용

---

## 라이선스

테마는 [AstroPaper](https://github.com/satnaing/astro-paper) (MIT) 기반입니다.
