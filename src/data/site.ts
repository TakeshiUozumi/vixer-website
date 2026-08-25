export const SITE = {
  name: 'Life Design ViXer',
  shortName: 'ViXer',
  tagline: '健康を通じて、人生を豊かに。',
  taglineEn: 'Work out at Life Design ViXer and be the new you',
  description:
    '高知市筆山町のパーソナルジム＆24時間ジム「Life Design ViXer」。完全個室×オープンジムのハイブリッド型。パーソナルトレーニング・ピラティス・ヘッドスパで、あなたの健康をトータルサポートします。まずは30日間無料お試しから。',
  url: 'https://vixer.jp',
  tel: '088-832-8668',
  telHref: 'tel:0888328668',
  fax: '088-832-8679',
  address: '〒780-8013 高知県高知市筆山町8-8',
  addressShort: '高知県高知市筆山町8-8',
  hours: '24時間365日営業',
  staffHours: 'スタッフ常駐：平日 10:00–21:00／土日祝 10:00–18:30',
  parking: '無料駐車場完備（1階・近隣）',
  line: 'https://page.line.me/?accountId=874vkmrc',
  instagram: 'https://instagram.com/life_design_vixer',
  memberPortal: 'https://life-design-vixer.hacomono.jp',
  // 外部フォームサービスのURLに差し替えてください（Googleフォーム / formrun 等）
  contactForm: 'https://vixer.jp/contact',
  mapEmbed:
    'https://www.google.com/maps?q=%E9%AB%98%E7%9F%A5%E7%9C%8C%E9%AB%98%E7%9F%A5%E5%B8%82%E7%AD%86%E5%B1%B1%E7%94%BA8-8&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=高知県高知市筆山町8-8+Life+Design+ViXer',
} as const;

export const NAV = [
  { label: '施設・設備', href: '/facility/' },
  { label: 'サービス', href: '/#services' },
  { label: '料金プラン', href: '/price/' },
  { label: 'スタッフ', href: '/staff/' },
  { label: 'ブログ', href: '/blog/' },
  { label: 'よくある質問', href: '/faq/' },
  { label: 'アクセス', href: '/access/' },
] as const;
