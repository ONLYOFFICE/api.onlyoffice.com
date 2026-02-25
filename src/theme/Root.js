import { DocSearch } from '@docsearch/core';
import { Sidepanel, SidepanelButton } from '@docsearch/sidepanel';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useRef, useEffect } from 'react';
import AIIcon from '@site/static/icons/ai-icon.svg';
import { OOAdventAnnounce } from 'onlyoffice-react-ui-kit/advent-announce';
import 'onlyoffice-react-ui-kit/advent-announce/css';

import '@docsearch/css/dist/sidepanel.css';

export default function Root({ children }) {
  const { siteConfig, i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale === 'zh-CN' ? 'zh' : 'en';
  const algoliaConfig = siteConfig.themeConfig.algolia.askAi;
  const docSearchRef = useRef(null);

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
      <OOAdventAnnounce locale={locale} />
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
