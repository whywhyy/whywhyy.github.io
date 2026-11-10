import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://whywhyy.github.io/",
    title: "whywhyy",
    description: "개발하며 배운 것들을 기록하는 블로그",
    author: "Kangsan Kim",
    profile: "https://github.com/whywhyy",
    ogImage: "default-og.jpg",
    lang: "ko",
    timezone: "Asia/Seoul",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 8,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/whywhyy/whywhyy.github.io/edit/astro/",
    },
    search: "pagefind",
    toc: true,
  },
  socials: [
    { name: "github", url: "https://github.com/whywhyy" },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/kangsan-kim-01-ln",
    },
    { name: "mail", url: "mailto:whywhyy@users.noreply.github.com" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
