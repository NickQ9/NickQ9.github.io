<script setup lang="ts">
import { skills } from '~/data/profile'
</script>

<template>
  <SectionShell id="skills" file="skills.ts" heading="skills">
    <ul class="groups mono">
      <li v-for="g in skills" :key="g.group" class="group">
        <p v-if="g.note" class="note cm">// {{ g.note }}</p>
        <span class="prop">{{ g.group }}</span><span class="punc">: [</span>
        <ul class="items">
          <li v-for="(item, i) in g.items" :key="item">
            <span class="str">"{{ item }}"</span><span v-if="i < g.items.length - 1" class="punc">,</span>
          </li>
        </ul>
        <span class="punc">],</span>
      </li>
    </ul>
  </SectionShell>
</template>

<style scoped>
.groups,
.items {
  list-style: none;
  margin: 0;
  padding: 0;
}
.groups {
  display: grid;
  gap: 14px;
  font-size: 14px;
}
.note {
  margin: 0;
  font-size: 12.5px;
}
.items {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 4px 8px;
  margin: 0 4px;
}
</style>
