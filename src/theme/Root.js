import { DocSearch } from '@docsearch/core';
import { Sidepanel, SidepanelButton } from '@docsearch/sidepanel';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useRef, useEffect } from 'react';
import AIIcon from '@site/static/icons/ai-icon.svg';

import '@docsearch/css/dist/sidepanel.css';

export default function Root({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const algoliaConfig = siteConfig.themeConfig.algolia.askAi;
  const docSearchRef = useRef(null);

  useEffect(() => {
    const handleOpenSidepanel = (event) => {
      if (docSearchRef.current && event.detail) {
        docSearchRef.current.openSidepanel(event.detail);
      }
    };

    window.addEventListener('openDocSearchSidepanel', handleOpenSidepanel);

    return () => {
      window.removeEventListener('openDocSearchSidepanel', handleOpenSidepanel);
    };
  }, []);

  return (
    <>
      {children}

      <BrowserOnly>
        {() => (
          <DocSearch ref={docSearchRef}>
            <SidepanelButton icon={<AIIcon />} />
            <Sidepanel
              appId={algoliaConfig.appId}
              apiKey={algoliaConfig.apiKey}
              indexName={algoliaConfig.indexName}
              assistantId={algoliaConfig.assistantId}
              suggestedQuestions={true}
            />
          </DocSearch>
        )}
      </BrowserOnly>
    </>
  );
}
