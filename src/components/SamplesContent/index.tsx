import { type FC, type ReactNode, useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { SamplesGrid } from '@site/src/components/SamplesGrid';
import { Samples } from '@site/src/homepageItems';
import { getDocsSamples, getDocspaceSamples, getAiSamples } from '@site/src/utils/getSamplesFromDir';
import styles from '@site/src/pages/samples.module.css';

export type SamplesCategory = {
  id: string;
  label: string;
  subtitle: string;
  icon: ReactNode;
};

const ITEMS_PER_PAGE = 30;

const samplesByCategory: Record<string, SamplesGrid.Item[]> = {
  docs: getDocsSamples('docs'),
  docspace: getDocspaceSamples('docspace'),
  ai: getAiSamples('ai'),
};

const itemsByCategory: Record<string, SamplesGrid.Item[]> = {
  favorites: Samples.items,
  ...samplesByCategory,
};

type Props = {
  categories: SamplesCategory[];
};

const VALID_CATEGORIES = new Set(Object.keys(itemsByCategory));
const DEFAULT_CATEGORY = 'favorites';

// Some samples sit in two categories, so deduplicate by link.
const allSamples: SamplesGrid.Item[] = (() => {
  const byLink = new Map<string, SamplesGrid.Item>();
  for (const item of Object.values(samplesByCategory).flat()) {
    const key = item.viewLink ?? item.title;
    if (!byLink.has(key)) byLink.set(key, item);
  }
  const sortKey = (item: SamplesGrid.Item) => item.title.replace(/^[^a-zA-Z]+/, '');
  return [...byLink.values()].sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
})();

function getSearchableText(item: SamplesGrid.Item): string {
  return [
    item.title,
    typeof item.description === 'string' ? item.description : '',
    item.tags?.map((t) => t.label).join(' ') ?? '',
  ].join(' ').toLowerCase();
}

const searchableText = new Map(allSamples.map((item) => [item, getSearchableText(item)]));

function getCategoryFromUrl(search: string): string {
  const params = new URLSearchParams(search);
  const doctype = params.get('doctype');
  return doctype && VALID_CATEGORIES.has(doctype) ? doctype : DEFAULT_CATEGORY;
}

function getTextFromUrl(search: string): string {
  const params = new URLSearchParams(search);
  return params.get('text') ?? '';
}

// Use native replaceState to update URL without triggering
// React Router's full navigation cycle (PendingNavigation).
function updateUrlParams(updates: Record<string, string | null>): void {
  const params = new URLSearchParams(window.location.search);
  for (const [key, value] of Object.entries(updates)) {
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
  }
  const query = params.toString();
  window.history.replaceState(null, '', `${window.location.pathname}${query && `?${query}`}`);
}

export const SamplesContent: FC<Props> = ({ categories }) => {
  const isBrowser = useIsBrowser();
  const location = useLocation();

  const [activeCategory, setActiveCategory] = useState(() => getCategoryFromUrl(location.search));
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState(() => getTextFromUrl(location.search));

  useEffect(() => {
    const categoryFromUrl = getCategoryFromUrl(location.search);
    const textFromUrl = getTextFromUrl(location.search);
    if (categoryFromUrl !== activeCategory) {
      setActiveCategory(categoryFromUrl);
      setCurrentPage(0);
    }
    if (textFromUrl !== searchQuery) {
      setSearchQuery(textFromUrl);
      setCurrentPage(0);
    }
  }, [location.search]);

  const searchWords = useMemo(
    () => searchQuery.toLowerCase().split(/\s+/).filter(Boolean),
    [searchQuery],
  );
  const isSearching = searchWords.length > 0;

  // Search ignores the active tab; it is kept so clearing the search returns to it.
  const filteredItems = useMemo(() => {
    if (!isSearching) return itemsByCategory[activeCategory] || [];
    return allSamples.filter((item) => {
      const haystack = searchableText.get(item)!;
      return searchWords.every((w) => haystack.includes(w));
    });
  }, [activeCategory, isSearching, searchWords]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const items = useMemo(
    () => filteredItems.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE),
    [filteredItems, currentPage],
  );

  const handleCategoryChange = useCallback((id: string) => {
    setActiveCategory(id);
    setCurrentPage(0);
    setSearchQuery('');

    updateUrlParams({ doctype: id === DEFAULT_CATEGORY ? null : id, text: null });
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setCurrentPage(0);

    updateUrlParams({ text: value || null });
  }, []);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    setCurrentPage(0);

    updateUrlParams({ text: null });
    searchInputRef.current?.focus();
  }, []);

  const handleSearchKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape' && e.currentTarget.value) {
      e.preventDefault();
      handleClearSearch();
    }
  }, [handleClearSearch]);

  const handleTagClick = useCallback((label: string) => {
    const lowerLabel = label.toLowerCase();
    setSearchQuery(lowerLabel);
    setCurrentPage(0);

    updateUrlParams({ text: lowerLabel });
  }, []);

  return (
    <>
      <div className={styles.categoryTabs}>
        {categories.map((cat) => {
          const isActive = isBrowser && !isSearching && activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={isActive}
              className={`${styles.categoryTab} ${isActive ? styles.categoryTabActive : ''}`}
              onClick={() => handleCategoryChange(cat.id)}
            >
              <span className={styles.categoryIcon}>{cat.icon}</span>
              <span className={styles.categoryText}>
                <span className={styles.categoryLabel}>{cat.label}</span>
                <span className={styles.categorySubtitle}>{cat.subtitle}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className={styles.searchWrapper}>
        <div className={styles.searchField}>
          <input
            ref={searchInputRef}
            type="text"
            className={styles.searchInput}
            placeholder="Search samples..."
            aria-label="Search samples"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
          />
          {searchQuery && (
            <button
              type="button"
              className={styles.searchClear}
              aria-label="Clear search"
              title="Clear search"
              onClick={handleClearSearch}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M3 3l8 8M11 3l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {isBrowser && (
        <main>
          {items.length === 0 ? (
            <p className={styles.noResults}>No results found.</p>
          ) : (
            <SamplesGrid items={items} compact onTagClick={handleTagClick} />
          )}

          {totalPages > 1 && (
            <nav className={styles.pagination}>
              <button
                className={styles.pageButton}
                disabled={currentPage === 0}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ← Previous
              </button>
              <span className={styles.pageInfo}>
                Page {currentPage + 1} of {totalPages}
              </span>
              <button
                className={styles.pageButton}
                disabled={currentPage === totalPages - 1}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next →
              </button>
            </nav>
          )}
        </main>
      )}
    </>
  );
};
