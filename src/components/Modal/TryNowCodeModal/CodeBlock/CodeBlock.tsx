import { Tag, PaintedText, MultiTab, ObjectInner } from "@site/src/components/Modal";
import { code } from "./types";
import styles from "./styles.module.css";
import { forwardRef } from "react";

type Props = {
  code: code;
};

const CodeBlock = forwardRef<HTMLDivElement, Props>(({ code }, ref) => {
  return (
    <div ref={ref} className={styles.codeblock}>
      <PaintedText black>&lt;!DOCTYPE html&gt;</PaintedText>
      <br />
      <Tag>
        <PaintedText red>html style</PaintedText>
        ="height: 100%;"
      </Tag>
      <Tag>
        <PaintedText red>head</PaintedText>
      </Tag>
      <Tag nesting={1} inline>
        <PaintedText red>title</PaintedText>
      </Tag>
      <PaintedText black>ONLYOFFICE Api Documentation</PaintedText>
      <Tag closing>
        <PaintedText red>title</PaintedText>
      </Tag>
      <Tag closing>
        <PaintedText red>head</PaintedText>
      </Tag>
      <Tag>
        <PaintedText red>body style</PaintedText>="height: 100%; margin: 0;"
      </Tag>
      <Tag nesting={1} inline>
        <PaintedText red>div id</PaintedText>="placeholder" <PaintedText red>style</PaintedText>="height: 100%"
      </Tag>
      <Tag closing>
        <PaintedText red>div</PaintedText>
      </Tag>
      <Tag nesting={1} inline>
        <PaintedText red>script type</PaintedText>="text/javascript" <PaintedText red>src</PaintedText>
        ="https://documentserver/web-apps/apps/api/documents/api.js"
      </Tag>
      <Tag>
        <PaintedText red>script</PaintedText>
      </Tag>
      <Tag nesting={1}>
        <PaintedText red>script type</PaintedText>="text/javascript"
      </Tag>
      <MultiTab tabs={2} />
      <PaintedText>
        window<PaintedText black>.docEditor = </PaintedText>new <PaintedText black>{"DocsAPI.DocEditor("}</PaintedText>
        <PaintedText red>"placeholder"</PaintedText>
        <PaintedText black>{", {"}</PaintedText>
      </PaintedText>
      <ObjectInner nesting={3}>{code}</ObjectInner>
      <MultiTab tabs={2} />
      <PaintedText black>{"});"}</PaintedText>
      <br />
      <Tag nesting={1} closing>
        <PaintedText red>script</PaintedText>
      </Tag>
      <Tag closing>
        <PaintedText red>body</PaintedText>
      </Tag>
      <Tag closing>
        <PaintedText red>html</PaintedText>
      </Tag>
    </div>
  );
});

export default CodeBlock;
