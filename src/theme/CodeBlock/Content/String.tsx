import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useThemeConfig, usePrismTheme} from '@docusaurus/theme-common';
import {
  parseCodeBlockTitle,
  parseLanguage,
  parseLines,
  containsLineNumbers,
  useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import {Highlight, type Language} from 'prism-react-renderer';
import Line from '@theme/CodeBlock/Line';
import CopyButton from '@theme/CodeBlock/CopyButton';
import WordWrapButton from '@theme/CodeBlock/WordWrapButton';
import Container from '@theme/CodeBlock/Container';
import type {Props} from '@theme/CodeBlock/Content/String';

import styles from './styles.module.css';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import OnlyOfficeEditor from '@site/src/components/BrowserWindow/OnlyofficeEditor';

// Prism languages are always lowercase
// We want to fail-safe and allow both "php" and "PHP"
// See https://github.com/facebook/docusaurus/issues/9012
function normalizeLanguage(language: string | undefined): string | undefined {
  return language?.toLowerCase();
}

export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}: Props): ReactNode {
  const {
    prism: {defaultLanguage, magicComments},
  } = useThemeConfig();
  const language = normalizeLanguage(
    languageProp ?? parseLanguage(blockClassName) ?? defaultLanguage,
  );

  const prismTheme = usePrismTheme();
  const wordWrap = useCodeWordWrap();

  // We still parse the metastring in case we want to support more syntax in the
  // future. Note that MDX doesn't strip quotes when parsing metastring:
  // "title=\"xyz\"" => title: "\"xyz\""
  const title = parseCodeBlockTitle(metastring) || titleProp;

  const {lineClassNames, code} = parseLines(children, {
    metastring,
    language,
    magicComments,
  });
  const showLineNumbers =
    showLineNumbersProp ?? containsLineNumbers(metastring);

  const editorWord = metastring && metastring.includes("editor-docx") && "docx";
  const editorCell = metastring && metastring.includes("editor-xlsx") && "xlsx";
  const editorSlide = metastring && metastring.includes("editor-pptx") && "pptx";
  const editorPdf = metastring && metastring.includes("editor-pdf") && "pdf";
  const editorType = editorWord || editorCell || editorSlide || editorPdf;

  const urlIndex  = metastring && metastring.indexOf("https://static.onlyoffice.com/assets/docs/samples/");
  const templateUrl = metastring && metastring.includes("https://static.onlyoffice.com/assets/docs/samples/") && metastring.substring(urlIndex);

  const zoomIndex  = metastring && metastring.indexOf("zoom=");
  const zoom = metastring && metastring.includes("zoom=") && Number(metastring.substring(zoomIndex + 5, zoomIndex + 7));

  const codeBlockContent = (
    <Container
      as="div"
      className={clsx(
        blockClassName,
        language &&
          !blockClassName.includes(`language-${language}`) &&
          `language-${language}`,
      )}>
      {title && <div className={styles.codeBlockTitle}>{title}</div>}
      <div className={styles.codeBlockContent}>
        <Highlight
          theme={prismTheme}
          code={code}
          language={(language ?? 'text') as Language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              tabIndex={0}
              ref={wordWrap.codeBlockRef}
              className={clsx(className, styles.codeBlock, 'thin-scrollbar')}
              style={style}>
              <code
                className={clsx(
                  styles.codeBlockLines,
                  showLineNumbers && styles.codeBlockLinesWithNumbering,
                )}>
                {tokens.map((line, i) => (
                  <Line
                    key={i}
                    line={line}
                    getLineProps={getLineProps}
                    getTokenProps={getTokenProps}
                    classNames={lineClassNames[i]}
                    showLineNumbers={showLineNumbers}
                  />
                ))}
              </code>
            </pre>
          )}
        </Highlight>
        <div className={styles.buttonGroup}>
          {(wordWrap.isEnabled || wordWrap.isCodeScrollable) && (
            <WordWrapButton
              className={styles.codeButton}
              onClick={() => wordWrap.toggle()}
              isEnabled={wordWrap.isEnabled}
            />
          )}
          <CopyButton className={styles.codeButton} code={code} />
        </div>
      </div>
    </Container>
  );

  return editorType ? (
    <Tabs lazy>
      <TabItem value="code" label="Code">{codeBlockContent}</TabItem>
      <TabItem value="result" label="Result">
        <OnlyOfficeEditor code={code} fileType={editorType} templateUrl={templateUrl} zoom={zoom} />
      </TabItem>
    </Tabs>
  ) : (
    codeBlockContent
  );
}
