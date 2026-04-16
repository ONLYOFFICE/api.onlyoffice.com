import { DocSearch } from '@docsearch/core';
import { Sidepanel, SidepanelButton } from '@docsearch/sidepanel';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import React, { useRef, useEffect } from 'react';
import AIIcon from '@site/static/icons/ai-icon.svg';

import '@docsearch/css/dist/sidepanel.css';

export default function Root({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const algoliaConfig = siteConfig.themeConfig.algolia.askAi;
  const docSearchRef = useRef(null);
  const location = useLocation();

  const hideAskAIPaths = ['/playground/', '/docspace-playground/'];
  const showAskAI = !hideAskAIPaths.includes(location.pathname);

  const openDocSearchSidepanel = (event) => {
    if (docSearchRef.current && event.detail) {
      docSearchRef.current.openSidepanel(event.detail);
    }
  };

  useEffect(() => {
    window.addEventListener('openDocSearchSidepanel', openDocSearchSidepanel);

    return () => {
      window.removeEventListener('openDocSearchSidepanel', openDocSearchSidepanel);
    };
  }, []);

  return (
    <>
      {children}

      {showAskAI && (
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
      )}
    </>
  );
}
