import type {PagefindFragment, PagefindModule} from "@onlyoffice/pagefind-types"

// https://github.com/primer/react/blob/v36.14.0/packages/react/src/TextInput/TextInput.tsx
// todo: separate input logic into a separate search-container.
// todo: separate keydown logic into a separate keydown-container.
// todo: rename to pagefind-container.

export class SearchContainer extends HTMLElement {
  static get tagName(): string {
    return "search-container"
  }

  get #focused(): boolean {
    return this.getAttribute("focused") === ""
  }

  set #focused(f: boolean) {
    if (f) {
      this.setAttribute("focused", "")
      return
    }
    this.removeAttribute("focused")
  }

  get #filled(): boolean {
    return this.getAttribute("filled") === ""
  }

  set #filled(f: boolean) {
    if (f) {
      this.setAttribute("filled", "")
      return
    }
    this.removeAttribute("filled")
  }

  #pagefind: PagefindModule | undefined

  get #query(): string {
    const p = new URLSearchParams(window.location.search)
    const q = p.get("q")
    if (!q) {
      return ""
    }
    return decodeURIComponent(q)
  }

  set #query(q: string) {
    let u = window.location.origin + window.location.pathname

    const p = new URLSearchParams(window.location.search)
    if (!q) {
      if (p.has("q")) {
        p.delete("q")
      }
    } else {
      q = encodeURIComponent(q)
      p.set("q", q)
    }

    const s = p.toString()
    if (s) {
      u += `?${s}`
    }

    window.history.replaceState({}, "", u)
  }

  get #queryElement(): HTMLInputElement | null {
    return this.querySelector('input[name="q"]')
  }

  get #sitesElement(): HTMLInputElement | null {
    return this.querySelector('input[name="sites"]')
  }

  get #templateElement(): HTMLTemplateElement | null {
    return this.querySelector("template")
  }

  get #hidableElements(): NodeListOf<HTMLElement> {
    return document.querySelectorAll<HTMLElement>("[data-search-container-hidable]")
  }

  get #outputElement(): HTMLOutputElement | null {
    return document.querySelector("[data-search-container-output]")
  }

  get #counterElement(): HTMLElement | null {
    const o = this.#outputElement
    if (!o) {
      return null
    }
    return o.querySelector("[data-search-container-counter]")
  }

  get #resultsElement(): HTMLElement | null {
    const o = this.#outputElement
    if (!o) {
      return null
    }
    return o.querySelector("[data-search-container-results]")
  }

  async connectedCallback(): Promise<void> {
    await this.#setup()
    this.#listen()
  }

  async disconnectedCallback(): Promise<void> {
    await this.#desetup()
    this.#delisten()
  }

  async #setup(): Promise<void> {
    console.log(window.location.href)
    await this.#setupPagefind()
    this.#setupQuery()
    this.#setupSites()
    this.#setupOutput()
    this.#setupSelf()
  }

  async #setupPagefind(): Promise<void> {
    try {
      // todo: move path to the parameters (src)
      const p = await imp<PagefindModule>("/pagefind/pagefind.js")
      await p.init()
      this.#pagefind = p
    } catch {
      // todo: dispatch error event
    }
  }

  #setupQuery(): void {
    const e = this.#queryElement
    if (!e) {
      return
    }

    const q = this.#query
    e.value = q

    if (!q) {
      return
    }
  }

  #setupSites(): void {
    const e = this.#sitesElement
    if (!e) {
      return
    }
    e.setAttribute("value", window.location.host)
  }

  #setupOutput(): void {
    const q = this.#query
    if (!q) {
      return
    }

    // todo: temp solution

    const t = this.#templateElement
    if (!t) {
      return
    }

    this.#searchCallback()
  }

  #setupSelf(): void {
    const q = this.#query
    this.#focused = false
    this.#filled = Boolean(q)
  }

  async #desetup(): Promise<void> {
    const p = this.#pagefind
    if (p) {
      await p.destroy()
    }
  }

  #listen(): void {
    window.addEventListener("keydown", this)
    this.addEventListener("click", this)
    this.addEventListener("focusin", this)
    this.addEventListener("focusout", this)
    this.addEventListener("input", this)
    this.addEventListener("submit", this)
  }

  #delisten(): void {
    window.removeEventListener("keydown", this)
  }

  handleEvent(e: Event): void {
    switch (true) {
    case isClickEvent(e):
      this.#handleClick(e)
      break
    case isFocusinEvent(e):
      this.#handleFocusin(e)
      break
    case isFocusoutEvent(e):
      this.#handleFocusout(e)
      break
    case isInputEvent(e):
      this.#handleInput(e)
      break
    case isKeydownEvent(e):
      this.#handleKeydown(e)
      break
    case isSubmitEvent(e):
      this.#handleSubmit(e)
      break
    default:
      throw new Error(`Event '${e.type}' is not supported`)
    }
  }

  #handleClick(e: MouseEvent): void {
    switch (true) {
    case isClearElement(e.target):
      e.preventDefault()
      this.#clear()
      break
    }
  }

  #handleFocusin(e: FocusEvent): void {
    switch (true) {
    case isQueryElement(e.target):
      e.preventDefault()
      if (!this.#focused) {
        this.#focused = true
      }
      break
    }
  }

  #handleFocusout(e: FocusEvent): void {
    switch (true) {
    case isQueryElement(e.target):
      e.preventDefault()
      if (this.#focused) {
        this.#focused = false
      }
      break
    }
  }

  #handleInput(e: InputEvent): void {
    switch (true) {
    case isQueryElement(e.target):
      e.preventDefault()
      this.#query = e.target.value
      this.#filled = Boolean(this.#query)
      this.#search()
      break
    }
  }

  #handleKeydown(e: KeyboardEvent): void {
    switch (true) {
    case isWindowEvent(e) && isSlashKey(e.key):
      this.#handleSlash(e)
      break
    case isQueryElement(e.target) && isEnterKey(e.key):
      this.#handleEnter(e)
      break
    }
  }

  #handleSlash(e: KeyboardEvent): void {
    e.preventDefault()
    const q = this.#queryElement
    if (q) {
      q.focus()
    }
  }

  #handleEnter(e: KeyboardEvent): void {
    e.preventDefault()

    // todo: temp solution

    const qs = this.#query
    if (!qs) {
      return
    }

    const te = this.#templateElement
    if (te) {
      return
    }

    // todo: move path to the parameters
    window.location.href = `/search/?q=${encodeURIComponent(qs)}`
  }

  #handleSubmit(e: SubmitEvent): void {
    switch (true) {
    case isFormElement(e.target):
      e.preventDefault()
      break
    }
  }

  #searchId = -1

  #search(): void {
    window.clearTimeout(this.#searchId)
    this.#searchId = window.setTimeout(this.#searchCallback.bind(this), 180)
  }

  async #searchCallback(): Promise<void> {
    const pf = this.#pagefind
    if (!pf) {
      return
    }

    const qs = this.#query
    if (!qs) {
      this.#clear()
      return
    }

    const sr = await pf.search(qs)

    const ce = this.#counterElement
    if (ce) {
      ce.textContent = String(sr.results.length)
    }

    // todo: move the limit to the parameters
    // todo: rewrite with for loop
    const ae = await Promise.all(sr.results.slice(0, 100).map(async (r) => {
      const d = await r.data()
      return this.#createFragment(d)
    }))

    const re = this.#resultsElement
    if (re) {
      re.replaceChildren(...ae)
    }

    const oe = this.#outputElement
    const he = this.#hidableElements
    if (oe && he.length !== 0) {
      for (const e of he) {
        if (!e.hasAttribute("hidden")) {
          e.setAttribute("hidden", "")
        }
      }

      if (oe.hasAttribute("hidden")) {
        oe.removeAttribute("hidden")
      }
    }
  }

  #clear(): void {
    const qe = this.#queryElement
    if (qe) {
      qe.value = ""
    }

    const ce = this.#counterElement
    if (ce) {
      ce.textContent = ""
    }

    const re = this.#resultsElement
    if (re) {
      re.replaceChildren()
    }

    const oe = this.#outputElement
    const he = this.#hidableElements
    if (oe && he.length !== 0) {
      for (const e of he) {
        if (e.hasAttribute("hidden")) {
          e.removeAttribute("hidden")
        }
      }

      if (!oe.hasAttribute("hidden")) {
        oe.setAttribute("hidden", "")
      }
    }

    this.#query = ""
    this.#filled = false
  }

  #createFragment(d: PagefindFragment): DocumentFragment | undefined {
    const t = this.#templateElement
    if (!t) {
      return undefined
    }

    const f = document.importNode(t.content, true)

    const u = f.querySelector("[data-search-container-link]")
    if (u && u instanceof HTMLAnchorElement) {
      u.href = d.url
      if (!d.meta || !d.meta.title) {
        u.textContent = d.url
      } else {
        u.textContent = d.meta.title
      }
    }

    const m = f.querySelector("[data-search-container-matches]")
    if (m) {
      m.innerHTML = d.excerpt
        .replaceAll("<", "&lt;")
        .replaceAll("&lt;mark>", "<mark>")
        .replaceAll("&lt;/mark>", "</mark>")
    }

    return f
  }
}

function isFormElement(e: unknown): e is HTMLFormElement {
  return e instanceof HTMLFormElement
}

function isQueryElement(e: unknown): e is HTMLInputElement {
  return e instanceof HTMLInputElement && e.name === "q"
}

function isClearElement(e: unknown): e is HTMLButtonElement {
  return e instanceof HTMLButtonElement && e.value === "clear"
}

function isEnterKey(k: unknown): k is string {
  return k === "Enter"
}

function isSlashKey(k: unknown): k is string {
  return k === "/"
}

function isWindowEvent(e: unknown): e is Event {
  return e instanceof Event && e.currentTarget === window
}

function isClickEvent(e: unknown): e is MouseEvent {
  return e instanceof MouseEvent && e.type === "click"
}

function isFocusinEvent(e: unknown): e is FocusEvent {
  return e instanceof FocusEvent && e.type === "focusin"
}

function isFocusoutEvent(e: unknown): e is FocusEvent {
  return e instanceof FocusEvent && e.type === "focusout"
}

function isInputEvent(e: unknown): e is InputEvent {
  return e instanceof InputEvent && e.type === "input"
}

function isKeydownEvent(e: unknown): e is KeyboardEvent {
  return e instanceof KeyboardEvent && e.type === "keydown"
}

function isSubmitEvent(e: unknown): e is SubmitEvent {
  return e instanceof SubmitEvent && e.type === "submit"
}

/**
 * {@link https://github.com/vitejs/vite/issues/14850/#issuecomment-1907266103 Vite Reference}
 */
async function imp<T>(p: string): Promise<T> {
  if (import.meta && import.meta.env && import.meta.env.DEV) {
    p += `?${Date.now()}`
  }
  return await import(/* @vite-ignore */p)
}
