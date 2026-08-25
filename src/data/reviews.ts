// Google口コミ。★値・件数・本文は公開前に実データへ差し替えてください。
export const GOOGLE_RATING = {
  score: 4.9,
  count: '100件以上',
};

export type Review = { name: string; body: string };

export const REVIEWS: Review[] = [
  {
    name: '40代・女性',
    body: '続けられました！運動が苦手で不安でしたが、トレーナーさんが優しくサポートしてくれるので楽しく続けられています。',
  },
  {
    name: '30代・男性',
    body: '肩こりが改善！デスクワークで慢性的な肩こりに悩んでいましたが、トレーニングとアドバイスで体が軽くなりました。',
  },
  {
    name: '50代・女性',
    body: 'スタッフが親切！施設も綺麗でスタッフさんも親切。初心者でも安心して通えるジムです。',
  },
];
