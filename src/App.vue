<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive, ref } from "vue";
import { setup } from "./components/Renderer";

setup('markdown-gfm');

const state = reactive({
  markdown: "\n# AC\nAC 是一个简单的 json formater。\n\n\n![work-panel](assets/work-panel.JPG)\n\n\n![json-viewer](assets/json-output.JPG)\n\n## Contribution\nAC 是使用 [vuejs](http://cn.vuejs.org/) 开发的，组件使用了 [vue component](http://cn.vuejs.org/guide/application.html#单文件组件)。复制功能使用到 [ZeroClipboard.js](https://github.com/zeroclipboard/zeroclipboard)。\n\n```javascript\n// This is comments\nconsole.log(\'Hello World\')\nfunction log(msg) {\n  console.log(msg)\n}\n```\n\n|m|n1|\n|-|-|\n|1|2|\n\n### 搭建环境\n* 克隆项目到本地\n\n```\n$ git clone git@github.com:wangpin34/ac.git\n```\n也可以 fork 之后再克隆。\n\n*　安装依赖\n```\n$ npm install\n```\n\n*　启动开发模式\n```\nnpm run dev\n```\n\n在浏览器中打开 http://localhost:8080 可以看到 AC 。\n\n* 编译打包\n```\nnpm run build\n```\n\n## LICENSE\nMIT\n\n      ",
});

function handleChange(event: KeyboardEvent) {
  state.markdown = (event.target as HTMLTextAreaElement).value;
}
</script>

<template>
  <div class="container">
    <div class="full-height-box input">
      <textarea @keyup="handleChange">
        {{state.markdown}}
      </textarea>
    </div>
    <div class="full-height-box result">
      <markdown-gfm :markdown="state.markdown">
      </markdown-gfm>
    </div>
  </div>
</template>

<style lang="sass">
body
  margin: 0
div.container
  width: 100vw
  max-width: 100vw
  display: grid
  grid-template-columns: repeat(2, 1fr)
textarea
  border: none
  resize: none
  font-size: 16px
  font-family: monospace
  width: 100%
  height: calc(100% - 4px)
  background-color: #fafafa
  padding: 24px
  box-sizing: border-box
  &:focus
    outline: none

div.full-height-box
  height: 100vh
  max-height: 100vh
  overflow-y: auto
  background: #fafafa
  box-sizing: border-box
  border: 1px solid #dddddd
  &.result
    padding: 24px 32px
</style>
