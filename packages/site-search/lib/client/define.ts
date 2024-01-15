import {SearchContainer} from "./element.ts"

declare global {
  interface Window {
    SearchContainer: typeof SearchContainer
  }

  interface HTMLElementTagNameMap {
    "search-container": SearchContainer
  }

  namespace preact {
    namespace JSX {
      interface IntrinsicElements {
        "search-container": HTMLAttributes<SearchContainer>
      }
    }
  }
}

export function define(): void {
  if (window.customElements.get(SearchContainer.tagName)) {
    return
  }
  window.SearchContainer = SearchContainer
  window.customElements.define(SearchContainer.tagName, SearchContainer)
}
