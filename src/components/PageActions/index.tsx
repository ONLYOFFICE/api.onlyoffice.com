import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import AIIcon from '@site/static/icons/ai-icon.svg';
import ClaudeIcon from '@site/static/icons/claude.svg';
import ChatGPTIcon from '@site/static/icons/chatgpt.svg';
import MarkdownIcon from '@site/static/icons/markdown.svg';
import ArowIcon from '@site/static/icons/arrow-down.svg';
import CopyIcon from '@site/static/icons/copy.svg';

export default function PageActions(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  let docMetadata = null;
  try {
    docMetadata = useDoc();
  } catch (e) {
  }

  // Workspace is deprecated and gets no .md twins. Matched on the source path, not the URL,
  // so it holds for every locale.
  const hasMarkdown = !(docMetadata?.metadata?.source ?? '').includes('/workspace/');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleAskQuestion = () => {
    const currentUrl = window.location.href;
    const message = `[Context: ${currentUrl}] I want to ask questions about this page.`;

    // Dispatch custom event to open sidepanel with message
    window.dispatchEvent(new CustomEvent('openDocSearchSidepanel', {
      detail: { query: message }
    }));

    setIsMenuOpen(false);
  };

  const handleSummarizePage = () => {
    const currentUrl = window.location.href;
    const message = `[Context: ${currentUrl}] Summarize this page.`;

    // Dispatch custom event to open sidepanel with message
    window.dispatchEvent(new CustomEvent('openDocSearchSidepanel', {
      detail: { query: message }
    }));

    setIsMenuOpen(false);
  };

  // The Markdown twin of the current page, published next to its HTML at build time
  // (/docs/docs-api/get-started/basic-concepts/ -> /docs/docs-api/get-started/basic-concepts.md).
  const getMarkdownUrl = (): string =>
    `${window.location.pathname.replace(/\/$/, '')}.md`;

  const fetchMarkdown = async (): Promise<string> => {
    const response = await fetch(getMarkdownUrl());
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown: ${response.statusText}`);
    }
    // A missing file can still come back as the SPA shell, so check what we actually got.
    const contentType = response.headers.get('content-type') ?? '';
    if (!/text\/(markdown|plain)/.test(contentType)) {
      throw new Error(`Unexpected content type: ${contentType}`);
    }
    return response.text();
  };

  const handleCopyPage = async () => {
    setIsMenuOpen(false);

    try {
      // WebKit rejects a write made after the await, so pass the pending fetch instead.
      if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
        const markdown = fetchMarkdown().then((text) => new Blob([text], { type: 'text/plain' }));
        await navigator.clipboard.write([new ClipboardItem({ 'text/plain': markdown })]);
      } else {
        await navigator.clipboard.writeText(await fetchMarkdown());
      }
    } catch (error) {
      console.error('Failed to copy page:', error);
    }
  };

  // Opened directly rather than fetched first: the URL is shareable, renders as plain text,
  // and opening synchronously keeps the browser from treating it as a blocked popup.
  const handleViewAsMarkdown = () => {
    setIsMenuOpen(false);
    window.open(getMarkdownUrl(), '_blank');
  };

  const handleOpenInAI = (baseUrl: string) => {
    const currentUrl = window.location.href;
    const prompt = `Read ${currentUrl} so I can ask questions about it.`;
    const aiUrl = `${baseUrl}?q=${encodeURIComponent(prompt)}`;
    window.open(aiUrl, '_blank');
    setIsMenuOpen(false);
  };

  return (
    <div id="page_actions" className={styles.pageActions} ref={menuRef}>
      <button
        type="button"
        className={styles.btn}
        onClick={handleAskQuestion}
      >
        <AIIcon className={styles.menuIconStroke}/>
        <span className={styles.label}>Ask a question</span>
      </button>
      <button
        type="button"
        className={`${styles.btn} ${styles.toggle}`}
        aria-haspopup="menu"
        aria-expanded={isMenuOpen}
        aria-controls="split-menu"
        onClick={toggleMenu}
      >
        <ArowIcon className={styles.arrowIcon} />
      </button>
      {isMenuOpen && (
        <div id="split-menu" role="menu" className={styles.menu}>
          <button role="menuitem" className={styles.menuItem} onClick={handleSummarizePage}>
            <AIIcon className={styles.menuIconStroke} />
            <span className={styles.label}>Summarize page</span>
          </button>
          {hasMarkdown && (
            <>
              <button role="menuitem" className={styles.menuItem} onClick={handleCopyPage}>
                <CopyIcon className={styles.menuIconStroke} />
                <span className={styles.label}>Copy page</span>
              </button>
              <button role="menuitem" className={styles.menuItem} onClick={handleViewAsMarkdown}>
                <MarkdownIcon className={styles.menuIconStroke} />
                <span className={styles.label}>View as markdown</span>
              </button>
            </>
          )}
          <button role="menuitem" className={styles.menuItem} onClick={() => handleOpenInAI('https://claude.ai/new')}>
            <ClaudeIcon className={styles.menuIcon} />
            <span className={styles.label}>Open in Claude</span>
          </button>
          <button role="menuitem" className={styles.menuItem} onClick={() => handleOpenInAI('https://chat.openai.com/')}>
            <ChatGPTIcon className={styles.menuIcon} />
            <span className={styles.label}>Open in ChatGPT</span>
          </button>
        </div>
      )}
    </div>
  );
}
