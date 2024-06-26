/**
 * {@link https://github.com/CloudCannon/pagefind/blob/v1.1.0/pagefind_web_js/lib/coupled_search.ts/#L629 Pagefind Reference}
 */
export interface PagefindModule {
  /**
   * {@link https://github.com/CloudCannon/pagefind/blob/v1.1.0/pagefind_web_js/lib/coupled_search.ts/#L645 Pagefind Reference}
   */
  init(): Promise<void>

  /**
   * {@link https://github.com/CloudCannon/pagefind/blob/v1.1.0/pagefind_web_js/lib/coupled_search.ts/#L648 Pagefind Reference}
   */
  destroy(): Promise<void>

  /**
   * {@link https://github.com/CloudCannon/pagefind/blob/v1.1.0/pagefind_web_js/lib/coupled_search.ts/#L657 Pagefind Reference}
   */
  search(term: string): Promise<PagefindSearchResults>
}

export interface PagefindSearchResults {
  results: PagefindSearchResult[]
}

export interface PagefindSearchResult {
  data(): Promise<PagefindFragment>
}

export interface PagefindFragment {
  url: string
  meta?: PagefindFragmentMeta
  excerpt: string
}

export interface PagefindFragmentMeta {
  title?: string
}
