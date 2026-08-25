export const CATEGORIES = {
  sleep: '睡眠',
  diet: 'ダイエット',
  backpain: '腰痛',
  meal: '食事',
  stress: 'ストレス',
} as const;

export type CategoryId = keyof typeof CATEGORIES;
