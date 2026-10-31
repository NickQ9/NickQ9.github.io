// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },

  // 静的サイトとして出力（GitHub Pages / Vercel / Netlify どれでも配信可）
  ssr: true,

  app: {
    // GitHub Pages で「ユーザー名.github.io」以外のリポジトリに置く場合は
    // NUXT_APP_BASE_URL=/リポジトリ名/ を指定してビルドする
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'ja' },
      title: 'Shunichi Nakai — Portfolio',
      meta: [
        {
          name: 'description',
          content:
            '中井 峻一（Shunichi Nakai）のポートフォリオ。Vue / Nuxt / TypeScript を中心に、API・バックエンドまで対応するフリーランスのWebエンジニア。',
        },
        { name: 'theme-color', content: '#1e1e1e' },
        { property: 'og:title', content: 'Shunichi Nakai — Portfolio' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
})
