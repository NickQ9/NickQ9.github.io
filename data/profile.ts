// ============================================================
//  サイトに表示する内容はすべてこのファイルで管理しています。
//  文言の修正・実績の追加はここだけ編集すればOKです。
//
//  ※ 住所・電話番号・生年月日・希望単価・在籍企業名などは
//    公開サイトに載せない方針のため、意図的に入れていません。
// ============================================================

export interface Work {
  title: string
  summary: string
  role: string[]
  stack: string[]
  period?: string
  url?: string
  repo?: string
  /** true の間は本番ビルドに表示されません（下書き用） */
  draft?: boolean
}

export interface Skill {
  group: string
  items: string[]
  /** 経験年数・レベルなどの補足（コメントとして表示） */
  note?: string
}

export interface CareerItem {
  period: string
  title: string
  detail: string
}

export const profile = {
  nameJa: '中井 峻一',
  nameEn: 'Shunichi Nakai',
  title: 'Freelance Full-Stack Engineer',
  status: 'open-to-work',
  lead: 'Vue / Nuxt / TypeScript を軸に、画面づくりから API・バックエンドまで一気通貫で対応します。',
  about: [
    'Vue.js / Nuxt.js / TypeScript を軸としたフロントエンド開発を主軸に、API・バックエンドまで一気通貫で対応するフリーランスのWebエンジニアです。コンポーネント設計や状態管理から、CSS による緻密な UI 実装、Go や Prisma を使った API・DB 設計まで担当してきました。',
    '既存コードへの適応力も強みです。Riot.js やプレーンな JavaScript、Salesforce など初めて触れる環境でも、公式ドキュメントと既存コードから短期間でキャッチアップし、影響範囲を調べたうえで改修を進めます。担当者 1 名で自走が求められる現場でも、継続して成果を出してきました。',
    '完全フルリモートでの稼働は 3 年以上。非同期コミュニケーション中心のチームに慣れており、中長期で改善を積み重ねる関わり方を得意としています。Claude Code などの AI コーディング支援も、コード調査・影響範囲の確認・テスト作成の補助に取り入れ、スピードと品質の両立を図っています。',
  ],
  stats: [
    { value: '9年+', label: 'Web・ソフトウェア開発の実務経験（2017〜）' },
    { value: '3年+', label: 'フリーランス・完全フルリモートでの稼働' },
    { value: '19か月', label: '同一サービスへの継続参画（業務委託）' },
  ],
  strengths: [
    '既存コード調査・影響範囲調査',
    '画面設計・実装',
    'API / DB 設計・開発',
    'バージョン移行・性能改善',
    '自動テスト',
    '保守・運用',
  ],
  education: '沖縄職業能力開発大学校 専門課程 電子情報技術科',
  email: 'nakai111moko@gmail.com',
  github: 'NickQ9',
  contactNote: '中長期での継続参画のご相談を歓迎しています。お仕事のご相談・ご質問は、メールまたは GitHub からお気軽にどうぞ。',
}

export const skills: Skill[] = [
  { group: 'languages', items: ['TypeScript', 'JavaScript'], note: 'JavaScript 5年 / TypeScript 3年以上・設計とコードレビューまで' },
  { group: 'frontend', items: ['Vue 2 / 3', 'Nuxt 2 / 3'], note: '3年以上・新規構築、バージョン移行、性能改善まで' },
  { group: 'backend', items: ['Go', 'Prisma'], note: 'Go 1年以上・要件に応じた API 実装、既存機能の改修' },
  { group: 'database', items: ['PostgreSQL', 'MySQL'], note: 'テーブル設計・スキーマ作成' },
  { group: 'cloud', items: ['AWS', 'Google Cloud', 'Docker'] },
  { group: 'testing', items: ['Cypress', 'Lighthouse'] },
  { group: 'tools', items: ['Git / GitHub', 'Backlog', 'JIRA', 'Notion', 'Slack', 'Claude Code'] },
  { group: 'also', items: ['Riot.js', 'Python', 'C++', 'C#', 'Java (Android)'], note: '前職・個別案件での実務経験' },
]

// 守秘義務のため、案件はサービスの種類で記載しています。
export const works: Work[] = [
  {
    title: 'コンテンツ販売・配信サービス Vue 3 / Nuxt 3 移行',
    summary: 'PHP + Vue 2 構成から Vue 3 / Nuxt 3 への移行を担当。移行後は Lighthouse を使ったパフォーマンスチューニングまで行い、移行と高速化を完遂しました。',
    role: ['フロントエンド移行', 'パフォーマンス改善'],
    stack: ['Vue 3', 'Nuxt 3', 'Lighthouse'],
    period: '2023.09 — 2023.11',
  },
  {
    title: 'ふるさと納税 返礼品・顧客管理システム 新規開発',
    summary: '詳細設計をもとに画面を新規開発。共通コンポーネント化と定数化で 10 名体制での保守性を改善し、結合テストと Cypress による自動テストまで担当しました。',
    role: ['画面開発', '共通化・設計改善', '自動テスト'],
    stack: ['Vue / Nuxt', 'TypeScript', 'Cypress'],
    period: '2024.04 — 2024.07',
  },
  {
    title: '労務情報ポータルサイト フルスクラッチ開発',
    summary: 'フロントエンド担当 1 名で約 10 画面を構築。検索、サイドナビ、スライダー、コメント機能などを実装しました。',
    role: ['フロントエンド全般（1名）'],
    stack: ['Vue / Nuxt', 'TypeScript'],
    period: '2024.08 — 2024.09',
  },
  {
    title: '脱炭素化管理サイト フルスタック改修',
    summary: 'Google Cloud と Prisma を用いた API 開発からフロントエンド連携までを一貫して担当。1 画面の実装に必要な複数の API と DB スキーマの設計・作成まで行いました。',
    role: ['API・DB 設計', 'バックエンド実装', 'フロント結合'],
    stack: ['Nuxt 2', 'TypeScript', 'Prisma', 'PostgreSQL', 'Google Cloud'],
    period: '2024.10 — 2024.12',
  },
  {
    title: 'コンテンツサブスク配信・販売サイト 機能追加・改修',
    summary: 'フロントエンド担当 1 名として、既存機能への追加開発と新規機能開発を一人称で担当。クライアントの要望に応じた技術調査も行い、19 か月にわたって継続参画しました。',
    role: ['フロントエンド全般（1名）', '技術調査'],
    stack: ['JavaScript', 'HTML / CSS'],
    period: '2024.09 — 2026.03',
  },
  {
    title: '学習支援アプリ 開発（小中高生向け）',
    summary: 'Vue + TypeScript による画面設計・開発から検証・保守までを担当。別プロジェクトでは Go + PostgreSQL によるバックエンド・API 開発も担当し、要件定義から検証まで参画しました。',
    role: ['フロントエンド主担当', 'API 開発', 'サブリーダー'],
    stack: ['Vue', 'TypeScript', 'Go', 'PostgreSQL'],
    period: '2020.01 — 2022.02',
  },
]

export const career: CareerItem[] = [
  {
    period: '2023.07 —',
    title: 'フリーランス（個人事業主）',
    detail: 'Web サービスの新規開発・移行・改修を中心に、フロントエンドからバックエンドまで担当。完全フルリモートで稼働中。',
  },
  {
    period: '2022.07 — 2023.06',
    title: 'Web エンジニア',
    detail: '行楽施設企業向けの社内システム開発。基本設計での画面モック作成から、新規画面の設計・実装、保守まで担当。ほかに社内システムのデータ移行も担当。',
  },
  {
    period: '2017.04 — 2022.06',
    title: 'ソフトウェアエンジニア（正社員）',
    detail: '県外顧客向けの受託開発。学習支援アプリのフロントエンド・API 開発のほか、組み込み開発（C++ / C# / Android Java）や Python（Django）も経験。',
  },
  {
    period: '2017.03',
    title: '沖縄職業能力開発大学校 専門課程 電子情報技術科 卒業',
    detail: '',
  },
]
