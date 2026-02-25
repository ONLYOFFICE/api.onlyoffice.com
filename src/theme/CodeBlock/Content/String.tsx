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
import {EditorType} from "@site/src/components/Playground/root/PlaygroundRootContext";
import styles from './String.module.css'

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

  const editorWord = metastring && metastring.includes("editor-docx") && "docx";
  const editorCell = metastring && metastring.includes("editor-xlsx") && "xlsx";
  const editorSlide = metastring && metastring.includes("editor-pptx") && "pptx";
  const editorPdf = metastring && metastring.includes("editor-pdf") && "pdf";
  const isForm = metastring && metastring.includes("editor-pdf"); // TODO: change to editor-pdf-form
  const editorType = editorWord || editorCell || editorSlide || editorPdf;

  const playground = metastring && metastring.includes("playground") && "playground";

  let res = metastring ? metastring.match(/zoom=(\d+)\s*/) : null;
  const zoom = res ? Number(res[1]) : undefined;

  res = metastring ? metastring.match(/templateUrl=([^\s]+)/) : null;
  const templateUrl = res ? res[1] : undefined;

  const handlePlaygroundClick = () => {
    const params = new URLSearchParams({
      code: metadata.code,
      editorType: isForm ? 'form' : (editorType.length ? EDITOR_TYPE_MAP[editorType] : null),
      testType: 'office-js-api',
    });

    if (templateUrl) {
      params.set('templateUrl', templateUrl);
    } else {
      params.set('emptyTemplateUrl', '');
    }

    window.open(`/playground?${params}`, '_blank');
  };

  return (
     <CodeBlockContextProvider metadata={metadata} wordWrap={wordWrap}>
      {editorType ? (
        <Tabs.Root defaultValue="code">
          <Tabs.List className={styles.TabsList}>
            <Tabs.Trigger className={styles.TabsItem} value="code">Code</Tabs.Trigger>
            <Tabs.Trigger className={styles.TabsItem} value="result">Result</Tabs.Trigger>
            {playground && (
                <button
                    className={styles.TabsItem}
                    onClick={handlePlaygroundClick}
                    type="button"
                >
                  Playground
                </button>
            )}
          </Tabs.List>

          <Tabs.Content value="code">
            <CodeBlockLayout />
          </Tabs.Content>

          <Tabs.Content value="result">
            <OnlyOfficeEditor
                code={metadata.code}
                fileType={editorType}
                templateUrl={templateUrl}
                zoom={zoom}
                isForm={isForm}
            />
          </Tabs.Content>
        </Tabs.Root>
      ) : (
        <CodeBlockLayout />
      )}
    </CodeBlockContextProvider>
  );
}
