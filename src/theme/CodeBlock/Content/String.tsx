import React, {type ReactNode} from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  CodeBlockContextProvider,
  type CodeBlockMetadata,
  createCodeBlockMetadata,
  useCodeWordWrap,
} from '@docusaurus/theme-common/internal';
import type {Props} from '@theme/CodeBlock/Content/String';
import CodeBlockLayout from '@theme/CodeBlock/Layout';
import * as Tabs from '@radix-ui/react-tabs';

import OnlyOfficeEditor from '@site/src/components/BrowserWindow/OnlyofficeEditor';
import {EditorType} from '@site/src/components/Playground/root/PlaygroundRootContext';
import styles from './String.module.css';

function useCodeBlockMetadata(props: Props): CodeBlockMetadata {
  const {prism} = useThemeConfig();
  return createCodeBlockMetadata({
    code: props.children,
    className: props.className,
    metastring: props.metastring,
    magicComments: prism.magicComments,
    defaultLanguage: prism.defaultLanguage,
    language: props.language,
    title: props.title,
    showLineNumbers: props.showLineNumbers,
  });
}

const EDITOR_TYPE_MAP: Record<string, EditorType> = {
  'docx': 'word',
  'pptx': 'slide',
  'xlsx': 'cell',
  'pdf': 'pdf'
}

// TODO Docusaurus v4: move this component at the root?
export default function CodeBlockString({
  children,
  className: blockClassName = '',
  metastring,
  title: titleProp,
  showLineNumbers: showLineNumbersProp,
  language: languageProp,
}: Props): ReactNode {

  const metadata = useCodeBlockMetadata({
    children,
    className: blockClassName,
    metastring,
    title: titleProp,
    showLineNumbers: showLineNumbersProp,
    language: languageProp,
  });
  const wordWrap = useCodeWordWrap();

  let editorType: string | false = false;
  let isForm = false;
  let zoom: number | undefined;
  let templateUrl: string | undefined;

  if (metastring) {
    const editorWord = metastring.includes("editor-docx") && "docx";
    const editorCell = metastring.includes("editor-xlsx") && "xlsx";
    const editorSlide = metastring.includes("editor-pptx") && "pptx";
    const editorPdf = /editor-(?:pdf|forms)/.test(metastring) && "pdf";
    isForm = metastring.includes("editor-forms");
    editorType = editorWord || editorCell || editorSlide || editorPdf;

    let res = metastring.match(/zoom=(\d+)\s*/);
    zoom = res ? Number(res[1]) : undefined;

    res = metastring.match(/templateUrl=([^\s]+)/);
    templateUrl = res ? res[1] : undefined;
  }

  const handlePlaygroundClick = () => {
    const params = new URLSearchParams({
      code: metadata.code,
      editor: isForm ? 'form' : EDITOR_TYPE_MAP[editorType as string],
      script: 'office-js-api',
    });

    if (templateUrl) {
      params.set('templateUrl', templateUrl);
    }

    window.open(`/playground/?${params}`, '_blank');
  };

  return (
     <CodeBlockContextProvider metadata={metadata} wordWrap={wordWrap}>
      {editorType ? (
        <Tabs.Root defaultValue="code">
          <Tabs.List className={styles.TabsList}>
            <Tabs.Trigger className={styles.TabsItem} value="code">Code</Tabs.Trigger>
            <Tabs.Trigger className={styles.TabsItem} value="result">Result</Tabs.Trigger>
            <button
                className={styles.TabsItem}
                onClick={handlePlaygroundClick}
                type="button"
            >
              Playground
            </button>
          </Tabs.List>

          <Tabs.Content value="code" forceMount className={styles.TabsContent}>
            <CodeBlockLayout />
          </Tabs.Content>

          <Tabs.Content value="result">
            <OnlyOfficeEditor
                code={metadata.code}
                fileType={editorType}
                templateUrl={templateUrl}
                zoom={zoom}
                isForm={isForm}
                config={{ editorConfig: { customization: { compactToolbar: true } } }}
            />
          </Tabs.Content>
        </Tabs.Root>
      ) : (
        <CodeBlockLayout />
      )}
    </CodeBlockContextProvider>
  );
}
