import { DocSearch } from '@docsearch/core';
import { Sidepanel, SidepanelButton } from '@docsearch/sidepanel';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React from 'react';
import AIIcon from '@site/static/icons/ai-icon.svg';

import '@docsearch/css/dist/sidepanel.css';

export default function Root({ children }) {
  const { siteConfig } = useDocusaurusContext();
  const algoliaConfig = siteConfig.themeConfig.algolia.askAi;

  return (
    <>
      {children}

      <BrowserOnly>
        {() => (
          <DocSearch>
            <SidepanelButton icon={<AIIcon />} />
            <Sidepanel
              appId={algoliaConfig.appId}
              apiKey={algoliaConfig.apiKey}
              indexName={algoliaConfig.indexName}
              assistantId={algoliaConfig.assistantId}
            />
          </DocSearch>
        )}
      </BrowserOnly>
    </>
  );
}
