// 差し替え前提のプレースホルダSVGを public/images/ に生成する。
// 実写真・AI生成画像が用意できたら、同名の .jpg/.webp を置いてパス参照を更新する。
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');
mkdirSync(outDir, { recursive: true });

const images = [
  { file: 'hero.svg', w: 1920, h: 1080, en: 'LIFE DESIGN VIXER', ja: '外観・トレーニング風景' },
  { file: 'concept.svg', w: 1200, h: 800, en: 'CONCEPT', ja: 'コンセプトイメージ' },
  { file: 'room-private.svg', w: 900, h: 600, en: 'PRIVATE ROOM', ja: '個室ジム（6部屋）' },
  { file: 'room-open.svg', w: 900, h: 600, en: 'OPEN GYM', ja: 'オープンジムエリア' },
  { file: 'esthetic.svg', w: 900, h: 600, en: 'SELF ESTHETIC', ja: 'セルフエステ' },
  { file: 'shower.svg', w: 900, h: 600, en: 'SHOWER ROOM', ja: 'シャワールーム' },
  { file: 'bodyscan.svg', w: 900, h: 600, en: '3D BODY SCAN', ja: '3Dボディスキャン' },
  { file: 'reception.svg', w: 900, h: 600, en: 'RECEPTION', ja: '受付' },
  { file: 'ba-1.svg', w: 900, h: 700, en: 'BEFORE / AFTER', ja: 'お客様の変化 01' },
  { file: 'ba-2.svg', w: 900, h: 700, en: 'BEFORE / AFTER', ja: 'お客様の変化 02' },
  { file: 'radio-jacket.svg', w: 800, h: 800, en: 'FM KOCHI', ja: 'ラジオ番組ジャケット' },
  { file: 'blog-sleep.svg', w: 900, h: 600, en: 'SLEEP', ja: '睡眠' },
  { file: 'blog-backpain.svg', w: 900, h: 600, en: 'BACK PAIN', ja: '腰痛' },
  { file: 'blog-diet.svg', w: 900, h: 600, en: 'DIET', ja: 'ダイエット' },
  { file: 'blog-meal.svg', w: 900, h: 600, en: 'MEAL', ja: '食事' },
  { file: 'blog-stress.svg', w: 900, h: 600, en: 'STRESS', ja: 'ストレス' },
];

const svg = ({ w, h, en, ja }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1b1812"/>
      <stop offset="1" stop-color="#0e0d0b"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect x="${w * 0.03}" y="${w * 0.03}" width="${w - w * 0.06}" height="${h - w * 0.06}" fill="none" stroke="#b8a06a" stroke-opacity="0.35" stroke-width="1.5"/>
  <circle cx="${w / 2}" cy="${h / 2 - h * 0.08}" r="${Math.min(w, h) * 0.09}" fill="none" stroke="#b8a06a" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="${w / 2}" y="${h / 2 + h * 0.1}" text-anchor="middle" fill="#b8a06a" font-family="Georgia, serif" font-size="${Math.min(w, h) * 0.045}" letter-spacing="${Math.min(w, h) * 0.012}">${en}</text>
  <text x="${w / 2}" y="${h / 2 + h * 0.2}" text-anchor="middle" fill="#7d776c" font-family="serif" font-size="${Math.min(w, h) * 0.038}">${ja}</text>
</svg>
`;

for (const img of images) {
  writeFileSync(join(outDir, img.file), svg(img));
  console.log('generated', img.file);
}
