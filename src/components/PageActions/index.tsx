import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { ungzip } from 'pako';
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

  const base64ToUint8Array = (base64: string): Uint8Array => {
    const binary = atob(base64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  };

  const decompressApiSpec = (compressedApi: string): any => {
    try {
      const decompressed = ungzip(base64ToUint8Array(compressedApi));
      return JSON.parse(new TextDecoder().decode(decompressed));
    } catch (error) {
      console.error('Failed to decompress API spec:', error);
      return null;
    }
  };

  const generateMarkdownFromApiSpec = (apiSpec: any): string => {
    if (!apiSpec) {
      throw new Error('Invalid API specification');
    }

    let markdown = '';

    // Title
    const title = apiSpec.title || apiSpec.summary || 'API Endpoint';
    markdown += `# ${title}\n\n`;

    // Method and Path
    if (apiSpec.method && apiSpec.path) {
      markdown += `**${apiSpec.method.toUpperCase()}** \`${apiSpec.path}\`\n\n`;
    }

    // Description
    if (apiSpec.description) {
      markdown += `${apiSpec.description}\n\n`;
    }

    // Parameters
    if (apiSpec.parameters && apiSpec.parameters.length > 0) {
      markdown += `## Parameters\n\n`;
      apiSpec.parameters.forEach((param: any) => {
        markdown += `### ${param.name}`;
        if (param.required) {
          markdown += ' (required)';
        }
        markdown += `\n\n`;

        if (param.in) {
          markdown += `**Location:** ${param.in}\n\n`;
        }

        if (param.schema?.type) {
          markdown += `**Type:** ${param.schema.type}\n\n`;
        }

        if (param.description) {
          markdown += `${param.description}\n\n`;
        }
      });
    }

    // Request Body
    if (apiSpec.requestBody) {
      markdown += `## Request Body\n\n`;
      const content = apiSpec.requestBody.content;
      if (content) {
        Object.keys(content).forEach(mediaType => {
          markdown += `**Content-Type:** ${mediaType}\n\n`;
          if (content[mediaType].schema) {
            markdown += '```json\n';
            markdown += JSON.stringify(content[mediaType].schema, null, 2);
            markdown += '\n```\n\n';
          }
        });
      }
    }

    // Responses
    if (apiSpec.responses) {
      markdown += `## Responses\n\n`;
      Object.keys(apiSpec.responses).forEach(statusCode => {
        const response = apiSpec.responses[statusCode];
        markdown += `### ${statusCode}`;
        if (response.description) {
          markdown += ` - ${response.description}`;
        }
        markdown += '\n\n';

        if (response.content) {
          Object.keys(response.content).forEach(mediaType => {
            markdown += `**Content-Type:** ${mediaType}\n\n`;
            if (response.content[mediaType].schema) {
              markdown += '```json\n';
              markdown += JSON.stringify(response.content[mediaType].schema, null, 2);
              markdown += '\n```\n\n';
            }
          });
        }
      });
    }

    return markdown;
  };

  const getMarkdownContent = async () => {
    if (!docMetadata?.metadata?.source) {
      throw new Error('Source file path not available');
    }

    const sourcePath = docMetadata.metadata.source.replace('@site/', '');

    // For OpenAPI files (.api.mdx), extract and decompress API spec from frontMatter
    if (sourcePath.endsWith('.api.mdx')) {
      const frontMatter = docMetadata.frontMatter as any;
      if (frontMatter?.api) {
        const apiSpec = decompressApiSpec(frontMatter.api);
        return generateMarkdownFromApiSpec(apiSpec);
      } else {
        throw new Error('API specification not found in frontMatter');
      }
    }

    // For regular markdown files, fetch from GitHub
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
        <AIIcon className={styles.menuIcon}/>
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
            <AIIcon className={styles.menuIcon} />
            <span className={styles.label}>Summarize page</span>
          </button>
          <button role="menuitem" className={styles.menuItem} onClick={handleCopyPage}>
            <CopyIcon className={styles.menuIconStroke} />
            <span className={styles.label}>Copy page</span>
          </button>
          <button role="menuitem" className={styles.menuItem} onClick={handleViewAsMarkdown}>
            <MarkdownIcon className={styles.menuIconStroke} />
            <span className={styles.label}>View as markdown</span>
          </button>
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
