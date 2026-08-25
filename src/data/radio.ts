export type RadioEpisode = {
  number: number;
  date: string; // YYYY.MM.DD
  title: string;
  description: string;
};

// FM高知で放送中の番組アーカイブ。最新回を先頭に。
export const RADIO_EPISODES: RadioEpisode[] = [
  {
    number: 65,
    date: '2024.04.22',
    title: '第65回放送',
    description: '健康づくりのヒントを代表がお届け。FMKOCHIにて放送された最新回です。',
  },
  {
    number: 64,
    date: '2024.04.15',
    title: '第64回放送',
    description: '運動と食事、そして休養。日々の暮らしに活きる健康の話題をお届けしました。',
  },
  {
    number: 63,
    date: '2024.04.08',
    title: '第63回放送',
    description: '初心者の方からよくいただくご質問に、代表がラジオでお答えしました。',
  },
];
