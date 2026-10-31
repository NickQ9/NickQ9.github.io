<script setup lang="ts">
import { career } from '~/data/profile'
</script>

<template>
  <SectionShell id="career" file="career.ts" heading="career">
    <ol class="timeline">
      <li v-for="c in career" :key="c.period + c.title" class="item">
        <span class="period mono">{{ c.period }}</span>
        <div class="content">
          <h3 class="title">{{ c.title }}</h3>
          <p v-if="c.detail" class="detail">{{ c.detail }}</p>
        </div>
      </li>
    </ol>
  </SectionShell>
</template>

<style scoped>
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;
}
.item {
  display: grid;
  grid-template-columns: 9.5em 1fr;
  gap: 4px 20px;
}
.period {
  color: var(--type);
  font-size: 13px;
  line-height: 1.9;
  font-variant-numeric: tabular-nums;
}
.content {
  min-width: 0;
}
.title {
  margin: 0;
  color: var(--text-strong);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.7;
}
.detail {
  margin: 2px 0 0;
  font-size: 14px;
  max-width: 40em;
}
@media (max-width: 600px) {
  .item {
    grid-template-columns: 1fr;
  }
}
</style>
