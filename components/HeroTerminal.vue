<script setup lang="ts">
import { profile } from '~/data/profile'

const command = 'whoami'
const typed = ref(command) // SSR / JS 無効時は全文表示
const done = ref(true)

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  typed.value = ''
  done.value = false
  let i = 0
  const timer = window.setInterval(() => {
    typed.value = command.slice(0, ++i)
    if (i >= command.length) {
      window.clearInterval(timer)
      window.setTimeout(() => (done.value = true), 250)
    }
  }, 110)
})
</script>

<template>
  <section class="hero" aria-label="プロフィール">
    <div class="terminal mono">
      <p class="line">
        <span class="prompt">~/portfolio $</span> {{ typed }}<span v-if="!done" class="caret" aria-hidden="true">█</span>
      </p>
      <div class="output" :class="{ show: done }">
        <h1 class="name">
          <span class="en">{{ profile.nameEn }}</span>
          <span class="ja">{{ profile.nameJa }}</span>
        </h1>
        <p class="title cm">/** {{ profile.title }} */</p>
        <p class="lead">{{ profile.lead }}</p>
        <p class="line">
          <span class="prompt">~/portfolio $</span> <span class="caret blink" aria-hidden="true">█</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 56px 24px 16px;
}
.terminal {
  background: var(--bg-deep);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 24px 28px;
}
.line {
  margin: 0;
  font-size: 14px;
}
.prompt {
  color: var(--type);
}
.output {
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.output.show {
  opacity: 1;
  transform: none;
}
.name {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 16px;
  margin: 20px 0 4px;
  line-height: 1.3;
}
.en {
  color: var(--text-strong);
  font-size: clamp(28px, 6vw, 44px);
  font-weight: 700;
  letter-spacing: -0.01em;
}
.ja {
  color: #c8c8c8;
  font-family: var(--sans);
  font-size: clamp(16px, 3vw, 20px);
  font-weight: 500;
}
.title {
  margin: 0 0 16px;
  font-size: 15px;
}
.lead {
  margin: 0 0 24px;
  font-family: var(--sans);
  font-size: 15px;
  max-width: 40em;
}
.caret {
  color: var(--text);
}
.blink {
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
@media (max-width: 600px) {
  .hero { padding: 32px 16px 8px; }
  .terminal { padding: 20px 18px; }
}
</style>
