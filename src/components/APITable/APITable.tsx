import React, { type ComponentProps, type ReactElement, type ReactNode, isValidElement, useRef, useEffect } from "react";
import useBrokenLinks from "@docusaurus/useBrokenLinks";
import { useHistory } from "@docusaurus/router";
import CodeInline from "@theme/CodeInline";
import MDXComponents from "@theme/MDXComponents";
import styles from "./styles.module.css";

interface Props {
  readonly children: ReactElement<ComponentProps<"table">>;
  readonly name?: string;
}

// ReactNode equivalent of HTMLElement#innerText
function getRowName(node: ReactElement): string {
  let curNode: ReactNode = node;
  while (isValidElement(curNode)) {
    [curNode] = React.Children.toArray(curNode.props.children);
  }
  if (typeof curNode !== "string") {
    throw new Error(`Could not extract APITable row name from JSX tree:\n${JSON.stringify(node, null, 2)}`);
  }
  return curNode as string;
}

// Break points: after dots in parameter keys; after dots and slashes in code values (paths, URLs).
const KEY_BREAKS = /(\.)/;
const VALUE_BREAKS = /([./])/;

// Split a string after each separator and insert <wbr> so long unspaced tokens wrap.
function softBreakString(text: string, separators: RegExp): ReactNode {
  const tokens = text.split(separators).filter((t) => t !== "");
  if (tokens.length <= 1) return text;
  const out: ReactNode[] = [];
  tokens.forEach((tok, i) => {
    out.push(tok);
    if (tok.length === 1 && separators.test(tok)) out.push(<wbr key={`wbr-${i}`} />);
  });
  return out;
}

function isInlineCode(el: ReactElement): boolean {
  return el.type === "code" || el.type === MDXComponents.code || el.type === CodeInline;
}

// Soft-break text nodes only (or only those inside inline code); preserve React elements and their keys.
function insertSoftBreaks(node: ReactNode, separators: RegExp, codeOnly = false, inCode = false): ReactNode {
  if (typeof node === "string") return codeOnly && !inCode ? node : softBreakString(node, separators);
  if (Array.isArray(node)) return React.Children.map(node, (child) => insertSoftBreaks(child, separators, codeOnly, inCode));
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    if (el.props.children === undefined) return node;
    const isCode = isInlineCode(el);
    const children = insertSoftBreaks(el.props.children, separators, codeOnly, inCode || isCode);
    // Any code element (MDXCode, raw <code>, CodeInline) is rendered as CodeInline: with <wbr> among its children,
    // MDXCode would switch to CodeBlock, since it renders inline only when every child is a newline-free string.
    if (isCode) return <CodeInline {...el.props} key={el.key}>{children}</CodeInline>;
    return React.cloneElement(el, undefined, children);
  }
  return node;
}

function APITableRow({ name, children }: { name: string | undefined; children: ReactElement<ComponentProps<"tr">> }, ref: React.ForwardedRef<HTMLTableRowElement>) {
  const entryName = getRowName(children);
  const id = name ? `${name}-${entryName}` : entryName;
  const anchor = `#${id}`;
  const history = useHistory();
  useBrokenLinks().collectAnchor(id);

  // Explicit Docusaurus-style hash link to this row.
  const hashLink = (
    <a
      className={styles.rowHashLink}
      href={anchor}
      aria-label={`Direct link to ${id}`}
      title="Direct link to this row"
    />
  );

  // First cell: soft-break long keys, then append the hash link. Other cells: soft-break inline code values.
  const cells = React.Children.toArray(children.props.children);
  const renderedCells = cells.map((cell, index) => {
    if (!isValidElement(cell)) {
      return cell;
    }
    const td = cell as ReactElement<ComponentProps<"td">>;
    if (index === 0) {
      return React.cloneElement(td, {}, insertSoftBreaks(td.props.children, KEY_BREAKS), hashLink);
    }
    return React.cloneElement(td, {}, insertSoftBreaks(td.props.children, VALUE_BREAKS, true));
  });

  return (
    <tr
      id={id}
      tabIndex={0}
      ref={history.location.hash === anchor ? ref : undefined}
      onClick={(e) => {
        const isTDClick = (e.target as HTMLElement).tagName.toUpperCase() === "TD";
        const hasSelectedText = !!window.getSelection()?.toString();

        if (isTDClick && !hasSelectedText) {
          history.push(anchor);
        }
      }}
      onKeyDown={(e: React.KeyboardEvent) => {
        // Only when the row itself is focused - nested controls (hash link) handle their own Enter.
        if (e.key === "Enter" && e.target === e.currentTarget) {
          history.push(anchor);
        }
      }}
    >
      {renderedCells}
    </tr>
  );
}

const APITableRowComp = React.forwardRef(APITableRow);

export default function APITable({ children, name }: Props): ReactNode {
  if (children.type !== "table") {
    throw new Error(
      "Bad usage of APITable component.\nIt is probably that your Markdown table is malformed.\nMake sure to double-check you have the appropriate number of columns for each table row."
    );
  }
  const [thead, tbody] = React.Children.toArray(children.props.children) as [ReactElement<{ children: ReactElement[] }>, ReactElement<{ children: ReactElement[] }>];
  const highlightedRow = useRef<HTMLTableRowElement>(null);
  useEffect(() => {
    highlightedRow.current?.focus();
  }, [highlightedRow]);
  const rows = React.Children.map(tbody.props.children, (row: ReactElement<ComponentProps<"tr">>) => (
    <APITableRowComp name={name} ref={highlightedRow}>
      {row}
    </APITableRowComp>
  ));

  return (
    <div className={styles.apiTableWrap}>
      <table className={styles.apiTable}>
        {thead}
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
