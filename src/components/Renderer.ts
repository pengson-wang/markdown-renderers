import { defineCustomElement } from 'vue'
import Renderer from './Renderer.ce.vue'

const MyVueElement = defineCustomElement(Renderer)

function setup(tagName: string) {
  // Register the custom element.
  // After registration, all `<my-vue-element>` tags
  // on the page will be upgraded.
  customElements.define(tagName, MyVueElement)
}

if (typeof window === 'object') {
  //@ts-ignore
  window.setup_markdown_renderer = setup
}

export { setup }

