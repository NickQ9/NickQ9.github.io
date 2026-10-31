<script setup lang="ts">
import { profile } from '~/data/profile'
</script>

<template>
  <SectionShell id="contact" file="contact.ts" heading="contact">
    <p class="para">{{ profile.contactNote }}</p>
    <ul class="list mono">
      <li>
        <span class="prop">email</span><span class="punc">: </span>
        <a :href="`mailto:${profile.email}`" class="str">"{{ profile.email }}"</a><span class="punc">,</span>
      </li>
      <li>
        <span class="prop">github</span><span class="punc">: </span>
        <a :href="`https://github.com/${profile.github}`" target="_blank" rel="noopener" class="str">"github.com/{{ profile.github }}"</a><span class="punc">,</span>
      </li>
    </ul>
    <a :href="`mailto:${profile.email}`" class="cta mono">
      <span class="kw">$</span> npm run hire-me
    </a>
  </SectionShell>
</template>

<style scoped>
.para {
  margin: 0 0 12px;
}
.list {
  list-style: none;
  margin: 0 0 24px;
  padding: 0;
  font-size: 14px;
  word-break: break-all;
}
.list a.str {
  color: var(--str);
}
.cta {
  display: inline-block;
  padding: 10px 18px;
  border: 1px solid var(--accent-hi);
  border-radius: 6px;
  color: var(--text-strong);
  font-size: 14px;
}
.cta:hover {
  background: rgba(79, 193, 255, 0.12);
  text-decoration: none;
}
</style>
