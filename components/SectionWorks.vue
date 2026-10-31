<script setup lang="ts">
import { works } from '~/data/profile'

// 開発中（npm run dev）は下書きも表示、本番ビルドでは draft: true を除外
const visible = computed(() => (import.meta.dev ? works : works.filter((w) => !w.draft)))
</script>

<template>
  <SectionShell id="works" file="works.ts" heading="works">
    <p class="confidential mono cm">// 守秘義務のため、案件はサービスの種類で記載しています</p>
    <p v-if="visible.length === 0" class="empty mono cm">
      // 実績は準備中です。詳しくはお気軽にお問い合わせください。
    </p>
    <ul v-else class="cards">
      <li v-for="w in visible" :key="w.title" class="card">
        <p v-if="w.draft" class="draft mono">draft — 本番ビルドでは非表示</p>
        <h3 class="title">{{ w.title }}</h3>
        <p v-if="w.period" class="period mono muted">{{ w.period }}</p>
        <p class="summary">{{ w.summary }}</p>
        <p class="meta mono">
          <span class="prop">role</span><span class="punc">: </span>
          <span class="str">{{ w.role.join(' / ') }}</span>
        </p>
        <p class="meta mono">
          <span class="prop">stack</span><span class="punc">: </span>
          <span class="ty">{{ w.stack.join(', ') }}</span>
        </p>
        <p v-if="w.url || w.repo" class="links mono">
          <a v-if="w.url" :href="w.url" target="_blank" rel="noopener">→ site</a>
          <a v-if="w.repo" :href="w.repo" target="_blank" rel="noopener">→ repo</a>
        </p>
      </li>
    </ul>
  </SectionShell>
</template>

<style scoped>
.empty {
  margin: 0;
  font-size: 14px;
}
.confidential {
  margin: 0 0 12px;
  font-size: 12.5px;
}
.cards {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
}
.card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 18px 20px;
}
.draft {
  display: inline-block;
  margin: 0 0 8px;
  padding: 0 8px;
  border: 1px dashed var(--str);
  border-radius: 4px;
  color: var(--str);
  font-size: 11px;
}
.title {
  margin: 0;
  color: var(--text-strong);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
}
.period {
  margin: 2px 0 0;
  font-size: 12px;
}
.summary {
  margin: 10px 0 12px;
  font-size: 14px;
}
.meta {
  margin: 0;
  font-size: 12.5px;
}
.links {
  display: flex;
  gap: 16px;
  margin: 12px 0 0;
  font-size: 13px;
}
</style>
