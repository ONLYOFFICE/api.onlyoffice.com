declare global {
  interface Window {
    ChapterNavigation: typeof ChapterNavigation
  }

  interface HTMLElementTagNameMap {
    "o-chapter-nav": ChapterNavigation
  }
}

function define(): void {
  if (window.customElements.get("o-chapter-nav")) {
    return
  }
  window.ChapterNavigation = ChapterNavigation
  window.customElements.define("o-chapter-nav", ChapterNavigation)
}

export class ChapterNavigation extends HTMLElement {
  connectedCallback(): void {
    this.addEventListener("click", (e) => {
      const b = e.target
      if (!(
        b instanceof HTMLButtonElement &&
        b.classList.contains("tree__fruit")
      )) {
        return
      }

      const d = b.parentElement
      if (!d) {
        return
      }
      if (!d.classList.contains("tree__twig")) {
        return
      }

      if (d.classList.contains("tree__twig_closed")) {
        d.classList.remove("tree__twig_closed")
      } else {
        d.classList.add("tree__twig_closed")
      }
    })

    const c = this.querySelector(".tree__leaf_current")
    if (c !== undefined && c instanceof HTMLElement) {
      this.parentElement.scrollTo({
        top: c.offsetTop - window.innerHeight / 6
      })
    }
  }
}

define()
