<script setup lang="ts">
defineProps<{ id: string; file: string; heading: string }>()
</script>

<template>
  <section :id="id" class="section">
    <p class="path mono">
      <span class="cm">// src/{{ file }}</span>
    </p>
    <h2 class="heading mono">
      <span class="kw">export</span> <span class="kw">const</span>
      <span class="fn"> {{ heading }}</span> <span class="punc">= {</span>
    </h2>
    <div class="body">
      <slot />
    </div>
    <p class="close mono punc">}</p>
  </section>
</template>

<style scoped>
.section {
  padding: 40px 24px 0 24px;
}
.path {
  margin: 0;
  font-size: 13px;
}
.heading {
  margin: 4px 0 16px;
  font-size: 18px;
  font-weight: 500;
}
.body {
  margin-left: 12px;
  padding-left: 20px;
  border-left: 1px solid var(--line);
}
.close {
  margin: 12px 0 0;
  font-size: 18px;
}
@media (max-width: 600px) {
  .section { padding: 32px 16px 0; }
  .heading { font-size: 16px; }
  .body { margin-left: 4px; padding-left: 14px; }
}
</style>
