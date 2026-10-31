<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <SectionShell id="about" file="about.ts" heading="about">
    <ul class="stats">
      <li v-for="s in profile.stats" :key="s.label" class="stat">
        <span class="value mono">{{ s.value }}</span>
        <span class="label">{{ s.label }}</span>
      </li>
    </ul>

    <p v-for="(text, i) in profile.about" :key="i" class="para">{{ text }}</p>

    <p class="sub mono"><span class="prop">strengths</span><span class="punc">: [</span></p>
    <ul class="strengths">
      <li v-for="s in profile.strengths" :key="s" class="mono str">"{{ s }}"</li>
    </ul>
    <p class="sub mono punc">],</p>

    <dl class="facts mono">
      <div>
        <dt class="prop">workstyle:</dt>
        <dd class="str">"Full Remote（3年以上）"</dd>
      </div>
      <div>
        <dt class="prop">education:</dt>
        <dd class="str">"{{ profile.education }}"</dd>
      </div>
    </dl>
  </SectionShell>
</template>

<style scoped>
.stats {
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 14px 16px;
  background: var(--bg-deep);
  border: 1px solid var(--line);
  border-radius: 6px;
}
.value {
  color: var(--type);
  font-size: 26px;
  font-weight: 700;
  line-height: 1.2;
}
.label {
  color: var(--muted);
  font-size: 12.5px;
  line-height: 1.5;
}
.para {
  margin: 0 0 12px;
  max-width: 42em;
}
.sub {
  margin: 16px 0 0;
  font-size: 14px;
}
.sub.punc {
  margin-top: 0;
}
.strengths {
  list-style: none;
  margin: 0;
  padding: 0 0 0 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 2px 14px;
  font-size: 14px;
}
.facts {
  margin: 16px 0 0;
  font-size: 14px;
}
.facts div {
  display: flex;
  flex-wrap: wrap;
  gap: 0 10px;
}
.facts dt,
.facts dd {
  margin: 0;
}
</style>
