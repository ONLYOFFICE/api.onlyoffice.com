import type {Element} from "hast"

export interface Template extends Element {
  tagName: "template"
}

export function template(): Template {
  return {
    type: "element",
    tagName: "template",
    properties: {},
    children: []
  }
}
