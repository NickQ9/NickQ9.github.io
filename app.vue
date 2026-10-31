<script setup lang="ts">
import { profile } from '~/data/profile'

const sections = [
  { id: 'about', file: 'about.ts' },
  { id: 'skills', file: 'skills.ts' },
  { id: 'works', file: 'works.ts' },
  { id: 'career', file: 'career.ts' },
  { id: 'contact', file: 'contact.ts' },
]

const active = ref('about')
let observer: IntersectionObserver | undefined

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.value = entry.target.id
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  )
  for (const s of sections) {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  }
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <div class="window">
    <header class="chrome">
      <div class="titlebar">
        <span class="dots" aria-hidden="true"><i /><i /><i /></span>
        <span class="title">{{ profile.nameEn }} — portfolio</span>
      </div>
      <nav class="tabs" aria-label="セクション">
        <a
          v-for="s in sections"
          :key="s.id"
          :href="`#${s.id}`"
          class="tab mono"
          :class="{ active: active === s.id }"
          :aria-current="active === s.id ? 'true' : undefined"
        >{{ s.file }}</a>
      </nav>
    </header>

    <main class="editor">
      <HeroTerminal />
      <SectionAbout />
      <SectionSkills />
      <SectionWorks />
      <SectionCareer />
      <SectionContact />
    </main>

    <footer class="statusbar mono">
      <span>⎇ {{ profile.status }}</span>
      <span>© {{ new Date().getFullYear() }} {{ profile.nameEn }}</span>
      <span class="hide-sm">TypeScript</span>
    </footer>
  </div>
</template>

<style scoped>
.window {
  max-width: 980px;
  min-height: 100vh;
  margin: 0 auto;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--line);
  border-right: 1px solid var(--line);
}
.chrome {
  position: sticky;
  top: 0;
  z-index: 10;
}
.titlebar {
  position: relative;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--panel);
  color: var(--muted);
  font-size: 13px;
}
.dots {
  position: absolute;
  left: 16px;
  display: flex;
  gap: 8px;
}
.dots i {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff5f57;
}
.dots i:nth-child(2) { background: #febc2e; }
.dots i:nth-child(3) { background: #28c840; }
.tabs {
  display: flex;
  overflow-x: auto;
  background: var(--tabbar);
  scrollbar-width: none;
}
.tabs::-webkit-scrollbar { display: none; }
.tab {
  flex: none;
  padding: 10px 18px;
  font-size: 13px;
  color: var(--muted);
  border-top: 2px solid transparent;
  border-right: 1px solid var(--bg-deep);
}
.tab:hover {
  color: var(--text);
  text-decoration: none;
}
.tab.active {
  background: var(--bg);
  color: var(--text-strong);
  border-top-color: var(--accent-hi);
}
.editor {
  flex: 1;
  padding: 0 0 48px;
}
.statusbar {
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 4px 16px;
  background: var(--accent);
  color: #fff;
  font-size: 12px;
}
@media (max-width: 600px) {
  .hide-sm { display: none; }
  .window { border: 0; }
}
</style>
