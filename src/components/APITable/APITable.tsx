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

function APITableRow({ name, children }: { name: string | undefined; children: ReactElement<ComponentProps<"tr">> }, ref: React.ForwardedRef<HTMLTableRowElement>) {
  const entryName = getRowName(children);
  const id = name ? `${name}-${entryName}` : entryName;
  const anchor = `#${id}`;
  const history = useHistory();
  useBrokenLinks().collectAnchor(id);
  return (
    <tr
      id={id}
      tabIndex={0}
      ref={history.location.hash === anchor ? ref : undefined}
      onClick={(e) => {
        const isTDClick = (e.target as HTMLElement).tagName.toUpperCase() === "TD";
        const hasSelectedText = !!window.getSelection()?.toString();

        const shouldNavigate = isTDClick && !hasSelectedText;
        if (shouldNavigate) {
          history.push(anchor);
        }
      }}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
          history.push(anchor);
        }
      }}
    >
      {children.props.children}
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
    <table className={styles.apiTable}>
      {thead}
      <tbody>{rows}</tbody>
    </table>
  );
}
