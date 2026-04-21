import { type FC, type ReactNode, useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from '@docusaurus/router';
import useIsBrowser from '@docusaurus/useIsBrowser';
import { SamplesGrid } from '@site/src/components/SamplesGrid';
import { Samples } from '@site/src/homepageItems';
import { getDocsSamples, getDocspaceSamples, getAiSamples } from '@site/src/utils/getSamplesFromDir';
import styles from '@site/src/pages/samples.module.css';

type Category = {
  id: string;
  label: string;
  subtitle: string;
  icon: ReactNode;
};

const ITEMS_PER_PAGE = 30;

const itemsByCategory: Record<string, SamplesGrid.Item[]> = {
  favorites: Samples.items,
  docs: getDocsSamples('docs'),
  docspace: getDocspaceSamples('docspace'),
  ai: getAiSamples('ai'),
};

type Props = {
  categories: Category[];
};

const VALID_CATEGORIES = new Set(Object.keys(itemsByCategory));
const DEFAULT_CATEGORY = 'favorites';

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
  window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
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
      setSearchQuery(textFromUrl);
      prevSearchRef.current = { query: '', results: [] };
    } else if (textFromUrl !== searchQuery) {
      setSearchQuery(textFromUrl);
      setCurrentPage(0);
    }
  }, [location.search]);

  const allItems = itemsByCategory[activeCategory] || [];
  const prevSearchRef = useRef({ query: '', results: [] as SamplesGrid.Item[] });

  const filteredItems = useMemo(() => {
    if (!searchQuery) {
      prevSearchRef.current = { query: '', results: [] };
      return allItems;
    }

    const prev = prevSearchRef.current;
    const isExtending = prev.query && searchQuery.startsWith(prev.query);
    if (isExtending && prev.results.length === 0) {
      prevSearchRef.current = { query: searchQuery, results: [] };
      return [];
    }
    const source = isExtending ? prev.results : allItems;

    const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
    const results = source.filter((item) => {
      const haystack = [
        item.title,
        typeof item.description === 'string' ? item.description : '',
        item.tags?.map((t) => t.label).join(' ') ?? '',
      ].join(' ').toLowerCase();
      return words.every((w: string) => haystack.includes(w));
    });

    prevSearchRef.current = { query: searchQuery, results };
    return results;
  }, [allItems, searchQuery]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const items = useMemo(
    () => filteredItems.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE),
    [filteredItems, currentPage],
  );

  const handleCategoryChange = useCallback((id: string) => {
    setActiveCategory(id);
    setCurrentPage(0);
    setSearchQuery('');
    prevSearchRef.current = { query: '', results: [] };

    updateUrlParams({ doctype: id, text: null });
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setCurrentPage(0);

    updateUrlParams({ text: value || null });
  }, []);

  const handleTagClick = useCallback((label: string) => {
    const lowerLabel = label.toLowerCase();
    setSearchQuery(lowerLabel);
    setCurrentPage(0);

    updateUrlParams({ text: lowerLabel });
  }, []);

  return (
    <>
      <div className={styles.categoryTabs}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.categoryTab} ${isBrowser && activeCategory === cat.id ? styles.categoryTabActive : ''}`}
            onClick={() => handleCategoryChange(cat.id)}
          >
            <span className={styles.categoryIcon}>{cat.icon}</span>
            <span className={styles.categoryText}>
              <span className={styles.categoryLabel}>{cat.label}</span>
              <span className={styles.categorySubtitle}>{cat.subtitle}</span>
            </span>
          </button>
        ))}
      </div>

      <div className={styles.searchWrapper}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search samples..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
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
