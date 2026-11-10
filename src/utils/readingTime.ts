/**
 * Rough reading-time estimate, tuned for mixed Korean/English posts.
 *
 * Korean text does not use spaces between every word, so a plain word count
 * underestimates it badly. We therefore count whitespace-separated tokens and
 * CJK characters separately, then blend the two speeds.
 */

const CJK = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af]/g;

export function getReadingTime(text: string): number {
  if (!text) return 1;

  // Strip fenced code blocks: code is skimmed, not read.
  const prose = text.replace(/```[\s\S]*?```/g, " ");

  const cjkCount = (prose.match(CJK) ?? []).length;
  const withoutCjk = prose.replace(CJK, " ");
  const wordCount = withoutCjk.split(/\s+/).filter(Boolean).length;

  // ~350 CJK chars/min, ~220 words/min for Latin script.
  const minutes = cjkCount / 350 + wordCount / 220;

  return Math.max(1, Math.round(minutes));
}
