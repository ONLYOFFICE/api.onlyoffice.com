import { type FC, type ReactNode, useRef, useState, useEffect } from 'react';
import { useLocation, useHistory } from '@docusaurus/router';
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
  favorite: Samples.items,
  docs: getDocsSamples('docs'),
  docspace: getDocspaceSamples('docspace'),
  ai: getAiSamples('ai'),
};

type Props = {
  categories: Category[];
};

const VALID_CATEGORIES = new Set(Object.keys(itemsByCategory));
const DEFAULT_CATEGORY = 'favorite';

function getCategoryFromUrl(search: string): string {
  const params = new URLSearchParams(search);
  const doctype = params.get('doctype');
  return doctype && VALID_CATEGORIES.has(doctype) ? doctype : DEFAULT_CATEGORY;
}

export const SamplesContent: FC<Props> = ({ categories }) => {
  const location = useLocation();
  const history = useHistory();

  const [activeCategory, setActiveCategory] = useState(() => getCategoryFromUrl(location.search));
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const categoryFromUrl = getCategoryFromUrl(location.search);
    if (categoryFromUrl !== activeCategory) {
      setActiveCategory(categoryFromUrl);
      setCurrentPage(0);
      setSearchQuery('');
      prevSearchRef.current = { query: '', results: [] };
    }
  }, [location.search]);

  const allItems = itemsByCategory[activeCategory] || [];
  const prevSearchRef = useRef({ query: '', results: [] as SamplesGrid.Item[] });

  const filteredItems = (() => {
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
  })();

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const items = filteredItems.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setCurrentPage(0);
    setSearchQuery('');
    prevSearchRef.current = { query: '', results: [] };

    const params = new URLSearchParams(location.search);
    params.set('doctype', id);
    history.replace({ ...location, search: `?${params.toString()}` });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0);
  };

  return (
    <>
      <div className={styles.categoryTabs}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.categoryTab} ${activeCategory === cat.id ? styles.categoryTabActive : ''}`}
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

      <main>
        {items.length === 0 ? (
          <p className={styles.noResults}>No results found.</p>
        ) : (
          <SamplesGrid items={items} compact />
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
    </>
  );
};
