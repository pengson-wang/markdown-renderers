<script setup lang="ts">
import { marked } from "marked";
import Prism from 'prismjs'
import { reactive, computed } from "vue";
const props = defineProps({ markdown: String });

const renderer = {
  code(code: string, infostring: string, escaped: boolean) {
    if (!infostring || escaped) {
      return `<pre><code>${code}</code></pre>`;
    }
    const language = infostring ? infostring.trim() : 'clike';
    const html = Prism.highlight(code, Prism.languages[language], language);
    return `<pre><code class="language-${language}">${html}</code></pre>`;
  }
}

marked.use({ renderer })

const html = computed(() => {
  if (props.markdown) {
    return marked(props.markdown);
  }
});
</script>
<template>
  <div v-html="html"></div>
</template>
<style lang="sass">
@import 'prismjs/themes/prism.css'

h1
  text-align: center
  color: #3f3f3f
  line-height: 1
  font-size: 24px
  margin: 80px 0 40px 0
  font-weight: normal

h2 
  text-align: left
  color: #3f3f3f
  line-height: 1.5
  font-size: 18px
  margin: 40px 0 20px 0
  font-weight: bold

a 
  text-align: left
  color: #ff3502
  line-height: 1.5
  font-size: 16px

blockquote 
  text-align: left
  color: rgb(91, 91, 91)
  line-height: 1.5
  font-size: 16px
  margin: 20px 0 20px 0
  padding: 1px 0 1px 10px
  background: rgba(158, 158, 158, 0.1)
  border-left: 3px solid rgb(158, 158, 158)

p 
  text-align: left
  color: #3f3f3f
  line-height: 1.6
  font-size: 16px
  margin: 20px 0 20px 0

  code 
    text-align: left
    color: #ff3502
    font-size: 16px
    line-height: 1.5

pre 
  background-color: rgba(0, 0, 0, 0.03)
  border: 1px solid #f0f0f0
  color: #333
  border-radius: 2px
  line-height: 26px
  font-size: 14px
  padding: 1em
  overflow: auto

img 
  max-width: 100%

table
  border-spacing: 0
  thead 
    text-align: left
    color: #3f3f3f
    line-height: 1.5
    font-size: 16px
    background-color: rgba(0, 0, 0, 0.05)

    th 
      font-size: 80%
      border: 1px solid #dfdfdf
      padding: 4px 8px
      
  tbody 
    text-align: left
    color: #3f3f3f
    line-height: 1.5
    font-size: 16px
    td 
      font-size: 80%
      border: 1px solid #dfdfdf
      padding: 4px 8px

ol,
ul 
  text-align: left
  color: #3f3f3f
  line-height: 1.5
  font-size: 16px
  margin: 20px 0 20px 0
  padding-left: 20px
  list-style: initial
  li 
    text-align: left
    color: #352a2a
    line-height: 1.5
    font-size: 16px

ol 
  list-style: decimal



</style>
