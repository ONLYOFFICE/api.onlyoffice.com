import React, { type ComponentProps, type ReactElement, type ReactNode, isValidElement, useRef, useEffect } from "react";
import useBrokenLinks from "@docusaurus/useBrokenLinks";
import { useHistory } from "@docusaurus/router";
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

// Split a string after each dot and insert <wbr> so long dotted parameter keys wrap.
function softBreakString(text: string): ReactNode {
  const tokens = text.split(/(\.)/).filter((t) => t !== "");
  if (tokens.length <= 1) return text;
  const out: ReactNode[] = [];
  tokens.forEach((tok, i) => {
    out.push(tok);
    if (tok === ".") out.push(<wbr key={`wbr-${i}`} />);
  });
  return out;
}

// Soft-break text nodes only; preserve React elements (e.g. <code>) and their keys.
function insertSoftBreaks(node: ReactNode): ReactNode {
  if (typeof node === "string") return softBreakString(node);
  if (Array.isArray(node)) return React.Children.map(node, insertSoftBreaks);
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    if (el.props.children === undefined) return node;
    return React.cloneElement(el, undefined, insertSoftBreaks(el.props.children));
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

  // First cell: soft-break long keys, then append the hash link.
  const cells = React.Children.toArray(children.props.children);
  const renderedCells = cells.map((cell, index) => {
    if (index !== 0 || !isValidElement(cell)) {
      return cell;
    }
    const firstCell = cell as ReactElement<ComponentProps<"td">>;
    return React.cloneElement(firstCell, {}, insertSoftBreaks(firstCell.props.children), hashLink);
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
