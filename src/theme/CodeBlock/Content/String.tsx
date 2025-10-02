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

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import OnlyOfficeEditor from '@site/src/components/BrowserWindow/OnlyofficeEditor';

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

  let res = metastring ? metastring.match(/zoom=(\d+)\s*/) : null;
  const zoom = res ? Number(res[1]) : undefined;

  res = metastring ? metastring.match(/templateUrl=([^\s]+)/) : null;
  const templateUrl = res ? res[1] : undefined;

  return (
     <CodeBlockContextProvider metadata={metadata} wordWrap={wordWrap}>
      {editorType ? (
        <Tabs lazy>
          <TabItem value="code" label="Code">{<CodeBlockLayout />}</TabItem>
          <TabItem value="result" label="Result">
            <OnlyOfficeEditor code={metadata.code} fileType={editorType} templateUrl={templateUrl} zoom={zoom} isForm={isForm} />
          </TabItem>
        </Tabs>
      ) : (
        <CodeBlockLayout />
      )}
    </CodeBlockContextProvider>
  );
}
