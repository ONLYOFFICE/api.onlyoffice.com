import type {Element} from "hast"

interface DocumentBuilderContainerElement extends Element {}

export function documentBuilderContainer(): DocumentBuilderContainerElement {
  return {
    type: "element",
    tagName: "document-builder-container",
    properties: {},
    children: []
  }
}
