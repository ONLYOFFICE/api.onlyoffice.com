import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function PageActions(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  let docMetadata = null;
  try {
    docMetadata = useDoc();
  } catch (e) {
  }

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
    const message = `Read ${currentUrl} so I can ask questions about it.`;

    // Dispatch custom event to open sidepanel with message
    window.dispatchEvent(new CustomEvent('openDocSearchSidepanel', {
      detail: { query: message }
    }));

    setIsMenuOpen(false);
  };

  const handleSummarizePage = () => {
    const currentUrl = window.location.href;
    const message = `Summarize the following page: ${currentUrl}`;

    // Dispatch custom event to open sidepanel with message
    window.dispatchEvent(new CustomEvent('openDocSearchSidepanel', {
      detail: { query: message }
    }));

    setIsMenuOpen(false);
  };

  const getMarkdownContent = async () => {
    if (!docMetadata?.metadata?.source) {
      throw new Error('Source file path not available');
    }

    const sourcePath = docMetadata.metadata.source.replace('@site/', '');

    const githubRawUrl = 'https://github.com/ONLYOFFICE/api.onlyoffice.com/tree/master/'
      .replace('github.com', 'raw.githubusercontent.com')
      .replace('/tree/', '/') + sourcePath;

    const response = await fetch(githubRawUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch markdown: ${response.statusText}`);
    }

    let markdown = await response.text();

    markdown = markdown.replace(/^---\n[\s\S]*?\n---\n/, '');

    return markdown;
  };

  const handleCopyPage = async () => {
    setIsMenuOpen(false);

    try {
      const markdown = await getMarkdownContent();
      await navigator.clipboard.writeText(markdown);
    } catch (error) {
      console.error('Failed to copy page:', error);
    }
  };

  const handleViewAsMarkdown = async () => {
    setIsMenuOpen(false);

    try {
      const markdown = await getMarkdownContent();

      // Open markdown in a new window/tab
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Markdown - ${docMetadata?.metadata?.title || 'Document'}</title>
              <style>
                body {
                  font-family: monospace;
                  padding: 20px;
                  max-width: 900px;
                  margin: 0 auto;
                  background: #f5f5f5;
                  color: #333;
                }
                pre {
                  white-space: pre-wrap;
                  word-wrap: break-word;
                  background: white;
                  padding: 20px;
                  border-radius: 4px;
                  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }
              </style>
            </head>
            <body>
              <pre>${markdown.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
            </body>
          </html>
        `);
        newWindow.document.close();
      }
    } catch (error) {
      console.error('Failed to view markdown:', error);
    }
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
        <img src="/icons/ai-icon.svg" className={styles.buttonIcon} alt="" />
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
        <img src="/icons/arrow-down.svg" className={styles.arrowIcon} alt="" />
      </button>
      {isMenuOpen && (
        <div id="split-menu" role="menu" className={styles.menu}>
          <button role="menuitem" className={styles.menuItem} onClick={handleSummarizePage}>
            <img src="/icons/ai-icon.svg" className={styles.buttonIcon} alt="" />
            <span className={styles.label}>Summarize page</span>
          </button>
          <button role="menuitem" className={styles.menuItem} onClick={handleCopyPage}>
            <img src="/icons/copy.svg" className={styles.menuIconStroke} alt="" />
            <span className={styles.label}>Copy page</span>
          </button>
          <button role="menuitem" className={styles.menuItem} onClick={handleViewAsMarkdown}>
            <img src="/icons/markdown.svg" className={styles.menuIconStroke} alt="" />
            <span className={styles.label}>View as markdown</span>
          </button>
          <button role="menuitem" className={styles.menuItem} onClick={() => handleOpenInAI('https://claude.ai/new')}>
            <img src="/icons/claude.svg" className={styles.menuIcon} alt="" />
            <span className={styles.label}>Open in Claude</span>
          </button>
          <button role="menuitem" className={styles.menuItem} onClick={() => handleOpenInAI('https://chat.openai.com/')}>
            <img src="/icons/chatgpt.svg" className={styles.menuIcon} alt="" />
            <span className={styles.label}>Open in ChatGPT</span>
          </button>
        </div>
      )}
    </div>
  );
}
